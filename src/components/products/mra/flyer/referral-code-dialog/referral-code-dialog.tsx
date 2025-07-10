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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Jeśli otrzymałeś swój własny kod polecenia, wpisz go tutaj:
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
                .replace(/[^A-Z0-9]/g, '') // tylko litery A-Z i cyfry 0-9
              setReferralCode(sanitizedValue)
              if (error) {
                setError('')
              }
            }}
            placeholder="TWÓJ KOD"
            className={error ? 'border-red-500' : ''}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <DialogFooter className="flex justify-between gap-2">
          <Button onClick={handleProceed} className="flex-1">
            Mam kod
          </Button>

          <Button variant="secondary" onClick={handleNoCode} className="flex-1">
            Nie mam kodu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
