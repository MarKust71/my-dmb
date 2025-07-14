'use client'

import { ReferralCodeDialog } from '@/components/products/mra/flyer/referral-code-dialog'
import { MenuButton } from '@/components/products/mra/flyer/menu-button'
import { FlyerImages } from '@/components/products/mra/flyer/flyer-images'
import { QrCodeDialog } from '@/components/products/mra/flyer/qr-code-dialog'

const Flyer = () => {
  return (
    <div className="relative">
      <FlyerImages />

      {/* Floating Button */}
      <MenuButton />

      {/* Referral Code Modal */}
      <ReferralCodeDialog />

      {/* QR Modal */}
      <QrCodeDialog />
    </div>
  )
}

export default Flyer
