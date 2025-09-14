import { Control, FieldValues } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldFirstNameProps } from '@/components/products/mra/registration/registration-form/field-first-name/field-first-name.types'

export const FieldFirstName = ({ form }: FieldFirstNameProps) => {
  return (
    <FormField
      control={form.control as unknown as Control<FieldValues>}
      name="firstname"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Imię:</FormLabel>

          <FormControl>
            <Input {...field} placeholder="np.: Jan" />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
