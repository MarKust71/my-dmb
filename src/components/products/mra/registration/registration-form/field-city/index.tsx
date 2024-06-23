import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldCityProps } from '@/components/products/mra/registration/registration-form/field-city/field-city.types'

export const FieldCity = ({ form }: FieldCityProps) => {
  return (
    <FormField
      control={form.control}
      name="city"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Miasto (opcjonalnie):</FormLabel>

          <FormControl>
            <Input {...field} placeholder="np.: Wąchock" type={'text'} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
