import { ReportItemList } from '@/components/mra-reports/menu-item-list'
import { ReportDocument } from '@/components/mra-reports/report-document'

type Props = {
  params: { id: string }
}

export default function Component({ params: { id } }: Props) {
  return (
    <div
      className={
        'min-h-screen w-full bg-amber-300 grid grid-cols-[min-content_1fr]'
      }
    >
      <ReportItemList />

      <ReportDocument id={id} />
    </div>
  )
}
