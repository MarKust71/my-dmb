import { Copy } from 'lucide-react'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useQrStore } from '@/store/use-qr-store'
import { useToast } from '@/components/ui/use-toast'

import { GeneratedUrlCardProps } from './generated-url-card.types'

export const GeneratedUrlCard = ({ values }: GeneratedUrlCardProps) => {
  const { toast } = useToast()

  const isCompact = useQrStore((s) => s.isCompact)
  const generatedUrl = useQrStore((s) => s.generatedUrl)
  const qrDataUrl = useQrStore((s) => s.qrDataUrl)

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
    <Card className={`${isCompact ? 'mt-1' : 'mt-2'}`}>
      <CardContent className={`grid ${isCompact ? 'gap-3 p-2' : 'gap-4 p-4'}`}>
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
  )
}
