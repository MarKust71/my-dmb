'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { useMraFlyerStore } from '@/store/mra-flyer'

const images = [
  '/img/mra/mra-ulotka-skan-page-1-optimized.jpg',
  '/img/mra/mra-ulotka-skan-page-2-optimized.jpg',
  '/img/mra/mra-ulotka-skan-page-3-optimized.jpg',
  '/img/mra/mra-ulotka-skan-page-5-optimized.jpg',
  '/img/mra/mra-ulotka-skan-page-6-optimized.jpg',
]

const registerUrl = 'https://mydmb.pl/mra/rejestruj'

const Flyer = () => {
  const {
    referralCode,
    error,
    dialogOpen,
    setReferralCode,
    setError,
    setDialogOpen,
  } = useMraFlyerStore()
  const inputRef = useRef<HTMLInputElement>(null)

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

  // Auto-focus gdy jest błąd
  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus()
    }
  }, [error])

  return (
    <div className="relative">
      <div className="flex h-screen overflow-x-auto md:flex-row flex-col md:items-start items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-auto md:h-full flex items-center"
          >
            <Image
              src={src}
              alt={`Ulotka MRA strona ${index + 1}`}
              width={600}
              height={900}
              quality={75}
              className="h-auto md:h-screen w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Pływający przycisk */}
      <Button
        onClick={() => {
          setDialogOpen(true)
          setError('')
        }}
        className="fixed bottom-4 right-4 rounded-full shadow-lg"
      >
        Umów test
      </Button>

      {/* Dialog */}
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
                setReferralCode(e.target.value)
                if (error) {
                  setError('')
                }
              }}
              placeholder="Twój kod"
              className={error ? 'border-red-500' : ''}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <DialogFooter className="flex justify-between gap-2">
            <Button onClick={handleProceed} className="flex-1">
              Mam kod
            </Button>

            <Button
              variant="secondary"
              onClick={handleNoCode}
              className="flex-1"
            >
              Nie mam kodu
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Flyer
