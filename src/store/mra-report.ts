import { create } from 'zustand'
import { MraReport } from '@/store/mra-report.types'

export type MraReportState = {
  currentMraReport: MraReport
  updateCurrentMraReport: (mraReport: MraReport) => void
}

export const useMraReportStore = create<MraReportState>()((set) => ({
  currentMraReport: { id: '', title: '', url: '' },
  updateCurrentMraReport: (mraReport) =>
    set((state) => ({
      ...state,
      currentMraReport: { ...mraReport },
    })),
}))
