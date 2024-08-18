import React from 'react'
import { CampaignRegisterFormSocialsListItemProps } from '@/components/campaign/campaign-register-form/campaign-register-form-socials/campaign-register-form-socials-list-item/campaign-register-form-socials-list-item.types'
import { listItemClassName } from '@/components/campaign/campaign-register-form/campaign-register-form-socials/campaign-register-form-socials-list-item/campaign-register-form-socials-list-item.constants'

export const CampaignRegisterFormSocialsListItem = ({
  href,
  children,
}: CampaignRegisterFormSocialsListItemProps) => {
  return (
    <li className={listItemClassName}>
      <a href={href}>{children}</a>
    </li>
  )
}
