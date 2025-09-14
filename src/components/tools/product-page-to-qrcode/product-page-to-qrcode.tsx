'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import QRCode from 'qrcode'
import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

// Validation schema
const formSchema = z.object({
  aboSponsor: z.string().regex(/^\d+$/, 'Dozwolone są wyłącznie cyfry.'),
  linkUrl: z.string().url('Podaj poprawny adres URL (z http/https).'),
})

type FormValues = z.infer<typeof formSchema>

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

// 1) Normalizacja adresów Amway: jeśli URL zawiera dokładnie origin
//    "https://www.amway.pl" oraz fragment "/p/", to wycinamy wszystko
//    POMIĘDZY tymi elementami, np.:
//    https://www.amway.pl/kategoria/jakas/p/123 -> https://www.amway.pl/p/123
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

// export default function AboSponsorLinkTool() {
export function ProductPageToQrcode() {
  const [generatedUrl, setGeneratedUrl] = useState<string>('')
  const [qrDataUrl, setQrDataUrl] = useState<string>('')
  const [isWorking, setIsWorking] = useState(false)
  const { toast } = useToast()

  const suppressNextSaveRef = useRef(false) // blokuje jednorazowe zapisywanie (np. po Wyczyść)
  const [isHydrated, setIsHydrated] = useState(false) // chroni przed nadpisaniem LS pustymi danymi przy starcie

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aboSponsor: '',
      linkUrl: '',
    },
    mode: 'onBlur',
  })

  // 1) Hydratacja z localStorage (tylko raz) i dopiero potem pozwalamy na auto-zapis
  useEffect(() => {
    const stored = loadFromLocalStorage()
    if (stored) {
      reset(stored)
    }
    setIsHydrated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 2) Auto-zapis do localStorage przy zmianach pól — ale dopiero po hydratacji
  const values = watch()
  useEffect(() => {
    if (!isHydrated) return
    if (suppressNextSaveRef.current) {
      suppressNextSaveRef.current = false
      return
    }
    saveToLocalStorage(values)
  }, [values, isHydrated])

  const onSubmit = async (data: FormValues) => {
    setIsWorking(true)
    try {
      // Normalizujemy tylko jeśli spełnione warunki z prośby
      const normalized = normalizeAmwayUrl(data.linkUrl)
      const finalUrl = buildUrlWithAbo(normalized, data.aboSponsor)

      setGeneratedUrl(finalUrl)
      const pngDataUrl = await generateQrPngDataUrl(finalUrl)
      setQrDataUrl(pngDataUrl)

      // Informacja, jeśli dokonano normalizacji adresu
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
      // Nie czyścimy localStorage — ma działać jak baza danych
    } catch (e) {
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

  return (
    <div className="mx-auto max-w-2xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>
            Generator kodu QR z linkiem do strony produktu i&nbsp;numerem PA
            zapraszającego
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div>
              <Label htmlFor="aboSponsor">Twój numer PA</Label>

              <Input
                id="aboSponsor"
                type="text"
                inputMode="numeric"
                placeholder="np. 123456"
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
                {...register('linkUrl')}
              />

              {errors.linkUrl && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.linkUrl.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={isWorking}>
                {isWorking ? 'Przetwarzanie…' : 'Generuj link i QR'}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  suppressNextSaveRef.current = true // nie zapisuj pustych po reset
                  reset({ aboSponsor: '', linkUrl: '' })
                  setGeneratedUrl('')
                  setQrDataUrl('')
                  clearLocalStorage() // czyścimy LS TYLKO tutaj
                  toast({
                    title: 'Wyczyszczono',
                    description: 'Formularz został wyczyszczony.',
                  })
                }}
              >
                Wyczyść
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {generatedUrl && (
        <Card className="mt-6">
          <CardContent className="grid gap-4">
            <div>
              <Label>Wygenerowany link</Label>

              <div className="flex items-center gap-2">
                <Input
                  readOnly
                  value={generatedUrl}
                  className="font-mono text-sm"
                />

                <Button onClick={copyToClipboard}>Kopiuj</Button>
              </div>
            </div>

            {qrDataUrl && (
              <div className="grid gap-3">
                <Label>Kod QR</Label>

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Image
                    src={qrDataUrl}
                    alt="QR code"
                    width={224}
                    height={224}
                    className="h-auto w-56 rounded-xl border"
                  />

                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline">
                      <a href={generatedUrl} target="_blank" rel="noreferrer">
                        Otwórz link
                      </a>
                    </Button>

                    <Button onClick={downloadPng}>Pobierz PNG</Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/*
      <p className="mt-6 text-xs text-gray-500">
        Uwaga: walidujemy wyłącznie format URL; istnienia strony nie da się
        sprawdzić po stronie przeglądarki bez dodatkowych usług.
      </p>
*/}
    </div>
  )
}
