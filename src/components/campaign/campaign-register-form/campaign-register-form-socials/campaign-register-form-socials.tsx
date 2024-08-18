import {
  CampaignRegisterFormSocialsListItem,
  Facebook,
  Instagram,
  Linkedin,
} from '@/components/campaign/campaign-register-form/campaign-register-form-socials'

export const CampaignRegisterFormSocials = () => {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-extrabold">Socials</h2>

      <ul className="flex mt-3 space-x-4">
        <CampaignRegisterFormSocialsListItem href="javascript:void(0)">
          <Facebook />
        </CampaignRegisterFormSocialsListItem>

        <CampaignRegisterFormSocialsListItem href="javascript:void(0)">
          <Linkedin />
        </CampaignRegisterFormSocialsListItem>

        <CampaignRegisterFormSocialsListItem href="javascript:void(0)">
          <Instagram />
        </CampaignRegisterFormSocialsListItem>
      </ul>
    </div>
  )
}
