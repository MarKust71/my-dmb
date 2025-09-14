import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type QrState = {
  generatedUrl: string
  qrDataUrl: string
  isWorking: boolean
  isCompact: boolean
  isHydrated: boolean
  suppressNextSave: boolean
  // actions
  setGeneratedUrl: (v: string) => void
  setQrDataUrl: (v: string) => void
  setIsWorking: (v: boolean) => void
  setIsCompact: (v: boolean) => void
  setIsHydrated: (v: boolean) => void
  setSuppressNextSave: (v: boolean) => void
  resetOutput: () => void
}

export const useQrStore = create<QrState>()(
  persist(
    (set) => ({
      generatedUrl: '',
      qrDataUrl: '',
      isWorking: false,
      isCompact: false,
      isHydrated: false,
      suppressNextSave: false,
      setGeneratedUrl: (v) => set({ generatedUrl: v }),
      setQrDataUrl: (v) => set({ qrDataUrl: v }),
      setIsWorking: (v) => set({ isWorking: v }),
      setIsCompact: (v) => set({ isCompact: v }),
      setIsHydrated: (v) => set({ isHydrated: v }),
      setSuppressNextSave: (v) => set({ suppressNextSave: v }),
      resetOutput: () => set({ generatedUrl: '', qrDataUrl: '' }),
    }),
    {
      name: 'qr-ui', // klucz w localStorage
      // zapisujemy TYLKO isCompact (UI), reszta pozostaje nietrwała
      partialize: (state) => ({ isCompact: state.isCompact }),
      version: 1,
    }
  )
)
