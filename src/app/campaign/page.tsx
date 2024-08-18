import {
  CampaignRegisterFormEmail,
  CampaignRegisterFormHeader,
  CampaignRegisterFormSocials,
} from '@/components/campaign/campaign-register-form'
import { CampaignRegisterForm } from '@/components/campaign'

const CampaignPage = () => {
  return (
    <div className="my-6">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div>
          <CampaignRegisterFormHeader />

          <CampaignRegisterFormEmail />

          <CampaignRegisterFormSocials />
        </div>

        <CampaignRegisterForm />
      </div>
    </div>
  )
}

export default CampaignPage
