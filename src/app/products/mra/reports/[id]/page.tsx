import { ReportDocument } from '@/components/products/mra/reports/report-document'
import { ReportItemList } from '@/components/products/mra/reports/menu-item-list'
import { PageProps } from '@/types'

import { PageParams } from './page.types'

export default async function Component({ params }: PageProps<PageParams>) {
  const { id } = await params

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
