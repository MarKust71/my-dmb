import { z } from 'zod'

import { FormSchema } from '@/components/tools/product-page-to-qrcode/schema/form-schema'

export type FormValues = z.infer<typeof FormSchema>
