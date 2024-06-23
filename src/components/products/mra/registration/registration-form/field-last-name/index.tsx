import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldLastNameProps } from '@/components/products/mra/registration/registration-form/field-last-name/field-last-name.types'

export const FieldLastName = ({ form }: FieldLastNameProps) => {
  return (
    <FormField
      control={form.control}
      name="lastname"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nazwisko:</FormLabel>

          <FormControl>
            <Input placeholder="np.: Kowalski" {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
