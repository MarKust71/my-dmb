import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { ContactConsentFormProps } from '@/components/contact/contact-consent-form.types'

export const ContactConsentForm = ({
  control,
  disabled,
}: ContactConsentFormProps) => {
  return (
    <FormField
      control={control}
      disabled={disabled}
      name="gdprConsent"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
          <FormControl>
            <Checkbox
              className={'border-gray-200'}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Zgoda RODO</FormLabel>

            <FormDescription>
              Pełna treść udzielanej zgody{' '}
              <Link href="/examples/forms" className={'font-bold'}>
                TUTAJ
              </Link>
              .
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  )
}
