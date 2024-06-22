'use client'

import './styles.scss'
import { useMraReportStore } from '@/store/mra-report'
import { cn } from '@/lib/utils'
import { reportItems } from '@/components/products/mra/reports/menu-item-list/menu-item-list.const'

export const ReportItemList = () => {
  const updateCurrentMraReport = useMraReportStore(
    (state) => state.updateCurrentMraReport
  )
  const currentMraReport = useMraReportStore((state) => state.currentMraReport)

  const handleClick = (id: string) => {
    updateCurrentMraReport(reportItems.filter((item) => item.id === id)[0])
  }

  return (
    <ul>
      {reportItems.map(({ id, title }) => {
        const isSelected = currentMraReport.id === id

        return (
          <li
            key={id}
            id={id}
            className={cn('mra-report-menu-li', isSelected && 'selected')}
            onClick={() => handleClick(id)}
          >
            {title}
          </li>
        )
      })}
    </ul>
  )
}
