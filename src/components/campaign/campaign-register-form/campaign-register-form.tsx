import {
  buttonClassName,
  inputClassName,
  textareaClassName,
} from '@/components/campaign/campaign-register-form/campaign-register-form-socials/campaign-register-form.constants'

export const CampaignRegisterForm = () => {
  return (
    <form
      action="https://fabform.io/f/xxxxx"
      method="post"
      className="ml-auo space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className={inputClassName}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className={inputClassName}
      />

      <input
        type="text"
        placeholder="Subject"
        name="subject"
        className={inputClassName}
      />

      <textarea
        placeholder="Message"
        rows={6}
        name="message"
        className={textareaClassName}
      ></textarea>

      <button type="submit" className={buttonClassName}>
        Send
      </button>
    </form>
  )
}
