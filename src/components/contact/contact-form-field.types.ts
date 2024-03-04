export type ContactFormFieldProps = {
  name: 'email' | 'password' | 'name'
  label?: string
  placeholder: string
  type: string
  control: any
  disabled: boolean
  autocomplete?: string
  className?: string
}
