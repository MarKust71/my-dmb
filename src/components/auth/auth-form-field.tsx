import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type LoginFormFieldProps = {
  name: 'email' | 'password' | 'name'
  label: string
  placeholder: string
  type: string
  control: any
  disabled: boolean
  autocomplete?: string
}

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
