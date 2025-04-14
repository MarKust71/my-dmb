import Image from 'next/image'
import { Metadata } from 'next'

import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import { Separator } from '@/components/ui/separator'
import DmbLogo from '@/assets/images/dmb-logo.png'
import { EventList } from '@/components/ui/lists/event-list/event-list'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `my-dMb App | Events`,
  }
}

const EventsPage = () => {
  return (
    <DashboardWrapper>
      <div className={'mx-auto mt-2 flex flex-col items-center'}>
        <Image
          src={DmbLogo}
          alt={'dmb-logo'}
          width={150}
          height={150}
          className={'mb-4 p-4 bg-black/35 rounded shadow-md'}
        />

        <h1 className={'text-2xl uppercase font-bold mb-4'}>
          Wydarzenia systemowe
        </h1>

        <Separator className={'my-2'} />

        <EventList />
      </div>
    </DashboardWrapper>
  )
}

export default EventsPage
