import { Metadata } from 'next'

import { MraRegistrationForm } from '@/components/products/mra/registration/registration-form'
import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Product | MRA | Registration',
  }
}

const MraRegistrationPage = () => {
  return (
    <DashboardWrapper>
      <h1>Biorezonans MRA || Rejestracja</h1>

      <p>
        Podanie podstawowych danych oraz informacji kontaktowych ułatwi
        przygotowanie terminu oraz sprawne przeprowadzenie testu.
      </p>

      <MraRegistrationForm />
    </DashboardWrapper>
  )
}

export default MraRegistrationPage
