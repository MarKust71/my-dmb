import { ReportDocumentProps } from '@/components/mra-reports/report-document/types'

export const ReportDocument = ({ id }: ReportDocumentProps) => {
  return (
    <iframe
      src={`/mra-reports/${id}/01-Układ krążenia i naczyń mózgowych.htm`}
      style={{ width: '100%', height: '100%' }}
      title="MRA Reports"
    />
  )
}
