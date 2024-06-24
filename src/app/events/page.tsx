import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import { Separator } from '@/components/ui/separator'
import { EventBox } from '@/components/ui/boxes/event-box'
import { EventBoxHeader } from '@/components/ui/boxes/event-box/event-box-header'
import { EventBoxSubheader } from '@/components/ui/boxes/event-box/event-box-subheader'
import { EventBoxLink } from '@/components/ui/boxes/event-box/event-box-link'

import DmbLogo from '@/assets/images/dmb-logo.png'
import Image from 'next/image'
import { Metadata } from 'next'

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

        <EventBox>
          <EventBoxHeader>DIAMOND LIVE</EventBoxHeader>

          <EventBoxSubheader>każdy poniedziałek, godz. 20:00</EventBoxSubheader>

          <EventBoxLink url={'https://us06web.zoom.us/j/89796337110'} />
        </EventBox>

        <Separator className={'my-2'} />

        <EventBox>
          <EventBoxHeader>ŚNIADANIE Z BIZNESEM</EventBoxHeader>

          <EventBoxSubheader>każda sobota, godz. 9:00</EventBoxSubheader>

          <EventBoxLink url={'https://zoom.us/j/981646663'} />
        </EventBox>

        <Separator className={'my-2'} />

        <EventBox>
          <EventBoxHeader>PREZENTACJA PLANU BIZNESOWEGO</EventBoxHeader>

          <EventBoxSubheader>każdy poniedziałek, godz. 21:00</EventBoxSubheader>

          <EventBoxLink url={'https://us06web.zoom.us/j/89796337110'} />
        </EventBox>

        <Separator className={'my-2'} />

        <EventBox>
          <EventBoxHeader>INTERNATIONAL AWARD CEREMONY</EventBoxHeader>

          <EventBoxSubheader>
            pierwsza niedziela miesiąca, godz. 19:00
          </EventBoxSubheader>

          <EventBoxLink url={'https://us06web.zoom.us/j/88601812540'} />
        </EventBox>

        <Separator className={'my-2'} />

        <EventBox>
          <EventBoxHeader>WIECZÓR Z EKSPERTEM</EventBoxHeader>

          <EventBoxSubheader>czwartek, godz. 20:00</EventBoxSubheader>

          <EventBoxLink url={'https://us02web.zoom.us/j/85906635318'} />
        </EventBox>

        <Separator className={'my-2'} />
      </div>
    </DashboardWrapper>
  )
}

export default EventsPage
