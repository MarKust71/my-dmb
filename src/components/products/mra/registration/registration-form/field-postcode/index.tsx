import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldPostcodeProps } from '@/components/products/mra/registration/registration-form/field-postcode/field-postcode.types'

export const FieldPostcode = ({ form }: FieldPostcodeProps) => {
  return (
    <FormField
      control={form.control}
      name="postcode"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Kod pocztowy:</FormLabel>

          <FormControl>
            <Input
              {...field}
              placeholder="np.: 00-000"
              type={'text'}
              pattern={'[0-9]{2}-[0-9]{3}'} // 00-000
              maxLength={6}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
