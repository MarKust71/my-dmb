import { useEffect, useRef } from 'react'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMraFlyerStore } from '@/store/mra-flyer'
import { cn } from '@/lib/utils'

const registerUrl = 'https://mydmb.pl/mra/rejestruj'

export const ReferralCodeDialog = () => {
  const {
    dialogOpen,
    setDialogOpen,
    referralCode,
    setReferralCode,
    error,
    setError,
  } = useMraFlyerStore()

  const handleProceed = () => {
    if (referralCode.trim() === '') {
      setError('Proszę wpisać kod polecenia')

      return
    }
    setError('')
    window.open(`${registerUrl}/${encodeURIComponent(referralCode)}`, '_blank')
    setDialogOpen(false)
  }

  const handleNoCode = () => {
    setError('')
    window.open(registerUrl, '_blank')
    setDialogOpen(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-focus gdy jest błąd
  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus()
    }
  }, [error])

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="bg-[#f8f5f2] rounded-xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-[#2e2e2e] text-lg font-semibold">
            Jeśli otrzymałeś kod polecenia, wpisz go tutaj:
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          <Input
            ref={inputRef}
            value={referralCode}
            onChange={(e) => {
              const rawValue = e.target.value
              const sanitizedValue = rawValue
                .toUpperCase()
                .replace(/[^A-Z0-9]/g, '')
              setReferralCode(sanitizedValue)
              if (error) {
                setError('')
              }
            }}
            placeholder="TWÓJ KOD"
            className={cn(
              'bg-white text-black',
              error ? 'border-red-500' : 'border-gray-300'
            )}
          />
          {error && <p className="text-[#d44b3e] text-sm">{error}</p>}
        </div>

        <DialogFooter className="flex justify-between gap-2 pt-4">
          <Button
            onClick={handleProceed}
            className="flex-1 bg-[#ff9100] hover:bg-[#e57e00] text-white"
          >
            Mam kod
          </Button>

          <Button
            variant="outline"
            onClick={handleNoCode}
            className="flex-1 border border-[#ff9100] text-[#ff9100] hover:bg-[#fff4e6]"
          >
            Nie mam kodu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
