import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldBirthDateProps } from '@/components/products/mra/registration/registration-form/field-birth-date/field-birth-date.types'

export const FieldBirthDate = ({ form }: FieldBirthDateProps) => {
  return (
    <FormField
      control={form.control}
      name="birthDate"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Data urodzenia (opcjonalnie):</FormLabel>

          <FormControl>
            <Input
              {...field}
              placeholder="np.: 1999-04-05"
              type={'text'}
              pattern={'[0-9]{4}-[0-9]{2}-[0-9]{2}'} // RRRR-MM-DD
              maxLength={10}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
