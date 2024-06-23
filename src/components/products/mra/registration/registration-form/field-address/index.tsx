import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldAddressProps } from '@/components/products/mra/registration/registration-form/field-address/field-address.types'

export const FieldAddress = ({ form }: FieldAddressProps) => {
  return (
    <FormField
      control={form.control}
      name="address"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Ulica, nr domu, nr mieszkania (opcjonalnie):</FormLabel>

          <FormControl>
            <Input {...field} placeholder="np.: Pcimska 10A/5" type={'text'} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
