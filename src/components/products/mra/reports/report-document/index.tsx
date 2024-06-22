'use client'

import { useMraReportStore } from '@/store/mra-report'
import { useMemo } from 'react'
import { ReportDocumentProps } from '@/components/products/mra/reports/report-document/types'

export const ReportDocument = ({ id }: ReportDocumentProps) => {
  const currentMraReport = useMraReportStore((state) => state.currentMraReport)

  const src = useMemo(
    () => encodeURI(currentMraReport.url?.replace('[id]', id)),
    [currentMraReport]
  )

  return (
    <iframe
      src={src}
      style={{ width: '100%', height: '100%' }}
      title="MRA Reports"
    />
  )
}
