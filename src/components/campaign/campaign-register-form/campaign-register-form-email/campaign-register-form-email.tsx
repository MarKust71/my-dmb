import { Email } from '@/components/campaign/campaign-register-form/campaign-register-form-socials'
import { listItemClassName } from '@/components/campaign/campaign-register-form/campaign-register-form-socials/campaign-register-form-socials-list-item/campaign-register-form-socials-list-item.constants'

export const CampaignRegisterFormEmail = () => {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-extrabold">Email</h2>

      <ul className="mt-3">
        <li className="flex items-center">
          <div className={listItemClassName}>
            <Email />
          </div>

          <a
            target="blank"
            href="https://veilmail.io/e/FkKh7o"
            className="text-[#007bff] text-sm ml-3"
          >
            <small className="block">Mail</small>

            <strong>https://veilmail.io/e/FkKh7o</strong>
          </a>
        </li>
      </ul>
    </div>
  )
}
