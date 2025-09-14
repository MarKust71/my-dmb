import { Control, FieldValues } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldHeightProps } from '@/components/products/mra/registration/registration-form/field-height/field-height.types'

export const FieldHeight = ({ form }: FieldHeightProps) => {
  return (
    <FormField
      control={form.control as unknown as Control<FieldValues>}
      name="height"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Wzrost w cm (opcjonalnie):</FormLabel>

          <FormControl>
            <Input
              {...field}
              placeholder="np.: 167"
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
