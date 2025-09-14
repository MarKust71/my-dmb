import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Skeleton } from '@/components/ui/skeleton'
import { useQrStore } from '@/store/use-qr-store'

export const FormCardHeader = () => {
  const isCompact = useQrStore((s) => s.isCompact)
  const isHydrated = useQrStore((s) => s.isHydrated)
  const setIsCompact = useQrStore((s) => s.setIsCompact)

  return (
    <CardHeader className={`${isCompact ? 'p-2' : 'p-4'} pb-0`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col items-start justify-start">
          <CardTitle className="text-xl">Generator kodu QR</CardTitle>

          {isHydrated ? (
            <CardDescription>
              link do strony produktu z&nbsp;numerem&nbsp;PA zapraszającego
            </CardDescription>
          ) : (
            <CardDescription>Ładowanie danych…</CardDescription>
          )}
        </div>

        {/* Desktop: przełącznik compact */}
        <div className="hidden items-center gap-2 md:flex">
          {isHydrated ? (
            <>
              <Label htmlFor="compact" className="cursor-pointer text-right">
                Tryb kompaktowy
              </Label>

              <Switch
                id="compact"
                checked={isCompact}
                onCheckedChange={setIsCompact}
              />
            </>
          ) : (
            <>
              <Label className="opacity-60">Tryb kompaktowy</Label>

              <Skeleton className="h-6 w-11 rounded-full" />
            </>
          )}
        </div>
      </div>
    </CardHeader>
  )
}
