import { DashboardWrapperProps } from './dashboard-wrapper.types'

export const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <main className="theme-dmb relative min-h-dvh w-full overflow-y-auto bg-gradient-to-b from-background to-muted/40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_50%_-200px,hsl(var(--primary)/0.18),transparent_55%)]" />
      {children}
    </main>
  )
}
