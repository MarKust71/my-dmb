'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import QRCode from 'qrcode'
import Image from 'next/image'
import { Copy, Loader2, ExternalLink } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/components/ui/use-toast'
import { useQrStore } from '@/store/use-qr-store'
import { Skeleton } from '@/components/ui/skeleton'

// ---- RHF schema -------------------------------------------------------------
const formSchema = z.object({
  aboSponsor: z.string().regex(/^\d+$/, 'Dozwolone są wyłącznie cyfry.'),
  linkUrl: z.string().url('Podaj poprawny adres URL (z http/https).'),
})
type FormValues = z.infer<typeof formSchema>

// ---- localStorage helpers ---------------------------------------------------
const LS_KEY = 'abo-link-form'

function loadFromLocalStorage(): Partial<FormValues> | undefined {
  if (typeof window === 'undefined') return undefined
  try {
    const raw = window.localStorage.getItem(LS_KEY)
    if (!raw) return undefined
    return JSON.parse(raw) as FormValues
  } catch {}
  return undefined
}

function saveToLocalStorage(values: Partial<FormValues>) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(LS_KEY, JSON.stringify(values))
  } catch {}
}

function clearLocalStorage() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(LS_KEY)
  } catch {}
}

// ---- Amway URL normalization -----------------------------------------------
function normalizeAmwayUrl(input: string): string {
  const url = new URL(input)
  if (url.origin === 'https://www.amway.pl' && url.pathname.includes('/p/')) {
    const idx = url.pathname.indexOf('/p/')
    url.pathname = url.pathname.slice(idx) // od "/p/" do końca
  }
  return url.toString()
}

function buildUrlWithAbo(baseUrl: string, aboSponsor: string): string {
  const url = new URL(baseUrl)
  url.searchParams.set('aboSponsor', aboSponsor)
  return url.toString()
}

async function generateQrPngDataUrl(text: string): Promise<string> {
  return QRCode.toDataURL(text, {
    errorCorrectionLevel: 'H',
    margin: 1,
    width: 640,
  })
}

// ---- Component --------------------------------------------------------------
export function ProductPageToQrcode() {
  const { toast } = useToast()

  // selecty ze store (unikamy rerenderów na każdy stan dzięki selektorom)
  const generatedUrl = useQrStore((s) => s.generatedUrl)
  const qrDataUrl = useQrStore((s) => s.qrDataUrl)
  const isWorking = useQrStore((s) => s.isWorking)
  const isCompact = useQrStore((s) => s.isCompact)
  const isHydrated = useQrStore((s) => s.isHydrated)
  const suppressNextSave = useQrStore((s) => s.suppressNextSave)

  const setGeneratedUrl = useQrStore((s) => s.setGeneratedUrl)
  const setQrDataUrl = useQrStore((s) => s.setQrDataUrl)
  const setIsWorking = useQrStore((s) => s.setIsWorking)
  const setIsCompact = useQrStore((s) => s.setIsCompact)
  const setIsHydrated = useQrStore((s) => s.setIsHydrated)
  const setSuppressNextSave = useQrStore((s) => s.setSuppressNextSave)
  const resetOutput = useQrStore((s) => s.resetOutput)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { aboSponsor: '', linkUrl: '' },
    mode: 'onBlur',
  })

  // 1) Hydratacja z localStorage + auto-compact na mobile
  useEffect(() => {
    const stored = loadFromLocalStorage()
    if (stored) reset(stored)

    // ustaw compact z media query tylko, gdy persist nie zdążył nadpisać
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(max-width: 767px)')
      const hydrated = (useQrStore as any).persist?.hasHydrated?.() ?? false
      if (!hydrated) setIsCompact(mq.matches)
    }

    setIsHydrated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 2) Auto-zapis do localStorage przy zmianach pól — ale dopiero po hydratacji
  const values = watch()
  useEffect(() => {
    if (!isHydrated) return

    if (suppressNextSave) {
      setSuppressNextSave(false)
      return
    }

    saveToLocalStorage(values)
  }, [values, isHydrated, suppressNextSave, setSuppressNextSave])

  const onSubmit = async (data: FormValues) => {
    setIsWorking(true)

    try {
      const normalized = normalizeAmwayUrl(data.linkUrl)
      const finalUrl = buildUrlWithAbo(normalized, data.aboSponsor)

      setGeneratedUrl(finalUrl)
      setQrDataUrl(await generateQrPngDataUrl(finalUrl))

      if (normalized !== data.linkUrl) {
        toast({
          title: 'Znormalizowano adres',
          description: 'Usunięto fragment ścieżki pomiędzy domeną a "/p/".',
        })
      }

      toast({
        title: 'Sukces',
        description: 'Link i kod QR zostały wygenerowane.',
      })
    } catch {
      toast({
        title: 'Błąd',
        description: 'Nie udało się wygenerować linku lub QR.',
        variant: 'destructive',
      })
    } finally {
      setIsWorking(false)
    }
  }

  const copyToClipboard = async () => {
    if (!generatedUrl) return

    try {
      await navigator.clipboard.writeText(generatedUrl)
      toast({
        title: 'Skopiowano',
        description: 'Link został skopiowany do schowka.',
      })
    } catch {
      toast({
        title: 'Błąd',
        description: 'Nie udało się skopiować linku.',
        variant: 'destructive',
      })
    }
  }

  const downloadPng = () => {
    if (!qrDataUrl) return

    const a = document.createElement('a')
    a.href = qrDataUrl
    a.download = `qr-abo-${values.aboSponsor || 'link'}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    toast({ title: 'Pobrano', description: 'Kod QR został pobrany jako PNG.' })
  }

  if (!isHydrated) {
    return (
      <div
        className={`theme-amway ${isCompact ? 'am-compact' : ''} mx-auto max-w-2xl ${isCompact ? 'p-3' : 'p-6'}`}
      >
        <Card>
          <CardHeader className={`${isCompact ? 'py-3' : ''}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col items-start justify-start">
                <CardTitle className="text-xl">Generator kodu QR</CardTitle>
                <CardDescription>Ładowanie danych…</CardDescription>
              </div>

              <div className="hidden items-center gap-2 md:flex">
                <Label className="opacity-60">Tryb kompaktowy</Label>

                <Skeleton className="h-6 w-11 rounded-full" />
              </div>
            </div>
          </CardHeader>

          <CardContent className={`${isCompact ? 'p-4' : ''}`}>
            <div className={`grid ${isCompact ? 'gap-3' : 'gap-4'}`}>
              <div>
                <Label>Twój numer PA</Label>

                <Skeleton
                  className={`${isCompact ? 'h-9' : 'h-10'} w-full rounded-xl`}
                />
              </div>

              <div>
                <Label>Link do strony produktu</Label>

                <Skeleton
                  className={`${isCompact ? 'h-9' : 'h-10'} w-full rounded-xl`}
                />
              </div>

              <div
                className={`flex items-center justify-between ${isCompact ? 'gap-2' : 'gap-3'}`}
              >
                <Skeleton
                  className={`${isCompact ? 'h-9 w-28' : 'h-10 w-32'} rounded-xl`}
                />

                <Skeleton
                  className={`${isCompact ? 'h-9 w-28' : 'h-10 w-32'} rounded-xl`}
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />

                <span>Wczytywanie zapisanych wartości…</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={`theme-amway ${isCompact ? 'am-compact' : ''} mx-auto max-w-2xl ${isCompact ? 'p-3' : 'p-6'}`}
    >
      <Card>
        <CardHeader className={`${isCompact ? 'py-3' : ''}`}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col items-start justify-start">
              <CardTitle className="text-xl">Generator kodu QR</CardTitle>

              <CardDescription>
                link do strony produktu
                z&nbsp;numerem&nbsp;PA&nbsp;zapraszającego
              </CardDescription>
            </div>

            {/* Desktop: przełącznik compact */}
            <div className="hidden items-center gap-2 md:flex">
              <Label htmlFor="compact" className="cursor-pointer text-right">
                Tryb kompaktowy
              </Label>

              <Switch
                id="compact"
                checked={isCompact}
                onCheckedChange={setIsCompact}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className={`${isCompact ? 'p-4' : ''}`}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`grid ${isCompact ? 'gap-3' : 'gap-4'}`}
          >
            <div>
              <Label htmlFor="aboSponsor">Twój numer PA</Label>

              <Input
                id="aboSponsor"
                type="text"
                inputMode="numeric"
                placeholder="np. 123456"
                className={`${isCompact ? 'h-9 text-sm' : ''}`}
                {...register('aboSponsor')}
              />

              {errors.aboSponsor && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.aboSponsor.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="linkUrl">Link do strony produktu</Label>

              <Input
                id="linkUrl"
                type="url"
                placeholder="skopiuj i wklej tutaj adres strony produktu z przeglądarki"
                className={`${isCompact ? 'h-9 text-sm' : ''}`}
                {...register('linkUrl')}
              />

              {errors.linkUrl && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.linkUrl.message}
                </p>
              )}
            </div>

            <div
              className={`flex items-center justify-between ${isCompact ? 'gap-2' : 'gap-3'}`}
            >
              <Button
                type="button"
                variant="outline"
                className={`${isCompact ? 'h-9 px-3 text-sm' : ''}`}
                onClick={() => {
                  setSuppressNextSave(true) // nie zapisuj pustych po reset
                  reset({ aboSponsor: '', linkUrl: '' })
                  resetOutput()
                  clearLocalStorage() // czyścimy LS TYLKO tutaj
                  toast({
                    title: 'Wyczyszczono',
                    description: 'Formularz został wyczyszczony.',
                  })
                }}
              >
                Wyczyść
              </Button>

              <Button
                type="submit"
                disabled={isWorking}
                className={`${isCompact ? 'h-9 px-3 text-sm' : ''}`}
              >
                {isWorking ? 'Przetwarzanie…' : 'Generuj link i QR'}
              </Button>
            </div>

            <div className="flex justify-center">
              <a
                href="https://mydmb.pl/c/mk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 underline hover:text-blue-700 mb-[-12px]"
              >
                Kontakt z autorem
                <ExternalLink className="h-4 w-4 ml-1" aria-hidden="true" />
              </a>
            </div>
          </form>
        </CardContent>
      </Card>

      {generatedUrl && (
        <Card className={`${isCompact ? 'mt-4' : 'mt-6'}`}>
          <CardContent className={`grid ${isCompact ? 'gap-3' : 'gap-4'}`}>
            <div>
              <Label>Wygenerowany link</Label>

              <div className="relative">
                <Input
                  readOnly
                  value={generatedUrl}
                  className={`font-mono pr-10 ${isCompact ? 'h-9 text-xs' : 'text-sm'}`}
                />

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                  aria-label="Kopiuj link"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>

            {qrDataUrl && (
              <div className="grid gap-3 mx-auto">
                <Label>Kod QR</Label>

                <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                  <Image
                    src={qrDataUrl}
                    alt="QR code"
                    width={224}
                    height={224}
                    className={`h-auto ${isCompact ? 'w-44' : 'w-56'} rounded-xl border`}
                  />

                  <div className="flex flex-col items-stretch gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className={`w-full ${isCompact ? 'h-9 px-3 text-sm' : ''}`}
                    >
                      <a href={generatedUrl} target="_blank" rel="noreferrer">
                        Otwórz link
                      </a>
                    </Button>

                    <Button
                      onClick={downloadPng}
                      className={`w-full ${isCompact ? 'h-9 px-3 text-sm' : ''}`}
                    >
                      Pobierz PNG
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
