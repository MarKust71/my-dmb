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
      control={form.control}
      name="firstname"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Imię:</FormLabel>

          <FormControl>
            <Input placeholder="np.: Jan" {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
