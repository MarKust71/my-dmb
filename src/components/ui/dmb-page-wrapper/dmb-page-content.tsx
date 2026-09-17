import { DmbLogo } from '@/components/ui/dmb-logo'

type DmbPageContentProps = {
  badge?: string
  title: string
  description?: string
  children: React.ReactNode
}

export const DmbPageContent = ({
  badge,
  title,
  description,
  children,
}: DmbPageContentProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10">
        <div className="flex items-start justify-between gap-4 sm:hidden">
          <div className="flex min-w-0 flex-col gap-2">
            {badge && (
              <div className="inline-flex w-fit items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-sm">
                {badge}
              </div>
            )}

            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>

            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>

          <div className="shrink-0">
            <DmbLogo size={50} />
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="mb-10 flex justify-center">
            <DmbLogo size={150} />
          </div>

          {badge && (
            <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-sm">
              {badge}
            </div>
          )}

          <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h1>

          {description && (
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </div>
      </header>

      {children}
    </div>
  )
}
