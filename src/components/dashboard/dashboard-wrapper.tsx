type DashboardWrapperProps = {
  children: React.ReactNode
}

export const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <div
      className={
        'w-full h-full flex flex-col items-start justify-start bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 overflow-y-auto'
      }
    >
      {children}
    </div>
  )
}
