import { create } from 'zustand'

import { MraFlyerState } from '@/store/mra-flyer.types'

export const useMraFlyerStore = create<MraFlyerState>((set) => ({
  referralCode: '',
  error: '',
  dialogOpen: false,
  setReferralCode: (code) => set({ referralCode: code }),
  setError: (error) => set({ error }),
  setDialogOpen: (open) => set({ dialogOpen: open }),
  resetState: () => set({ referralCode: '', error: '', dialogOpen: false }),
}))
