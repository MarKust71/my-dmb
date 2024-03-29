import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginFormFieldProps } from '@/components/auth/auth-form-field.types'

export const AuthFormField = ({
  name,
  label,
  placeholder,
  type,
  control,
  disabled,
  autocomplete,
}: LoginFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type}
              disabled={disabled}
              autoComplete={autocomplete}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
