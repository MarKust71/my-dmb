import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ContactFormFieldProps } from '@/components/contact/contact-form-field.types'

export const ContactFormField = ({
  name,
  label,
  placeholder,
  type,
  control,
  disabled,
  autocomplete,
  className,
}: ContactFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {!!label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type}
              disabled={disabled}
              autoComplete={autocomplete}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
