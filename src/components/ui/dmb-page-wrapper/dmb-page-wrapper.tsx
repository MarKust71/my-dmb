import { cn } from '@/lib/utils'

type DmbPageWrapperProps = {
  children: React.ReactNode
}

export const DmbPageWrapper = ({ children }: DmbPageWrapperProps) => {
  return (
    <main className="theme-dmb relative min-h-dvh bg-gradient-to-b from-background to-muted/40">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 -z-10',
          'bg-[radial-gradient(900px_circle_at_50%_-200px,hsl(var(--primary)/0.18),transparent_55%)]'
        )}
      />

      {children}
    </main>
  )
}
