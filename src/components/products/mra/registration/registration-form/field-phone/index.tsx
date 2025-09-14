import { Control, FieldValues } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldPhoneProps } from '@/components/products/mra/registration/registration-form/field-phone/field-phone.types'

export const FieldPhone = ({ form }: FieldPhoneProps) => {
  return (
    <FormField
      control={form.control as unknown as Control<FieldValues>}
      name="phone"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Telefon:</FormLabel>

          <FormControl>
            <Input {...field} placeholder="np.: +48 123 456 789" type={'tel'} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
