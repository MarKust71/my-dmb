'use client'

import './styles.scss'
import { reportItems } from '@/components/mra-reports/menu-item-list/menu-item-list.const'

const handleClick = (id: string) => {
  // TODO: remove!
  // eslint-disable-next-line no-console
  console.log('%c item:', 'color: black; background-color: yellow', {
    item: reportItems.filter((item) => item.id === id)[0],
  })
}

export const ReportItemList = () => {
  return (
    <ul>
      {reportItems.map(({ id, title, url }) => (
        <li
          key={id}
          id={id}
          className={'mra-report-menu-li'}
          onClick={() => handleClick(id)}
        >
          {title}
        </li>
      ))}
    </ul>
  )
}
