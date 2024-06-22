import { ReportDocument } from '@/components/products/mra/reports/report-document'
import { ReportItemList } from '@/components/products/mra/reports/menu-item-list'

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
