export interface MraFlyerState {
  referralCode: string
  error: string
  dialogOpen: boolean
  setReferralCode: (code: string) => void
  setError: (error: string) => void
  setDialogOpen: (open: boolean) => void
  resetState: () => void
  menuOpen: boolean
  qrOpen: boolean
  setMenuOpen: (open: boolean) => void
  setQrOpen: (open: boolean) => void
}
