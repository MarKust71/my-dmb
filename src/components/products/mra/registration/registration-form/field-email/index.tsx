import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldEmailProps } from '@/components/products/mra/registration/registration-form/field-email/field-email.types'

export const FieldEmail = ({ form }: FieldEmailProps) => {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Adres email:</FormLabel>

          <FormControl>
            <Input
              {...field}
              placeholder="np.: jan.kowalski@mail.com"
              type={'email'}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
