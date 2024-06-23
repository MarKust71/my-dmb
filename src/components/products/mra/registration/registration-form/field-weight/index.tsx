import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldWeightProps } from '@/components/products/mra/registration/registration-form/field-weight/field-weight.types'

export const FieldWeight = ({ form }: FieldWeightProps) => {
  return (
    <FormField
      control={form.control}
      name="weight"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Waga w kg (opcjonalnie):</FormLabel>

          <FormControl>
            <Input
              {...field}
              placeholder="np.: 67"
              type={'text'}
              pattern={'[0-9]{2,3}'}
              maxLength={3}
              minLength={2}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
