import DashboardNavbar from '@/components/dashboard/dashboard-navbar'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className={'h-full flex flex-col items-start justify-start'}>
      <DashboardNavbar />

      {children}
    </div>
  )
}

export default DashboardLayout
