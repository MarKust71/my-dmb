import { Metadata } from 'next'

import Flyer from '@/components/products/mra/flyer/flyer'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'myDMB App | Product | MRA | Flyer',
  }
}

const MraFlyerPage = () => {
  return <Flyer />
}

export default MraFlyerPage
