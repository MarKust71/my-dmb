'use client'

import { ReferralCodeDialog } from '@/components/products/mra/flyer/referral-code-dialog'
import { RegisterButton } from '@/components/products/mra/flyer/register-button'
import { FlyerImages } from '@/components/products/mra/flyer/flyer-images'

const Flyer = () => {
  return (
    <div className="relative">
      <FlyerImages />

      {/* Pływający przycisk */}
      <RegisterButton />

      {/* Dialog */}
      <ReferralCodeDialog />
    </div>
  )
}

export default Flyer
