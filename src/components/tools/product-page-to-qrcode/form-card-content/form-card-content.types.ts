import { DeepRequired, FieldErrorsImpl, GlobalError } from 'react-hook-form'

import { FormValues } from '@/components/tools/product-page-to-qrcode/product-page-to-qrcode.types'

export type FormCardContentProps = {
  handleSubmit: any
  register: any
  errors: Partial<FieldErrorsImpl<DeepRequired<FormValues>>> & {
    root?: Record<string, GlobalError> & GlobalError
  }
  reset: any
  lsKey: string
}
