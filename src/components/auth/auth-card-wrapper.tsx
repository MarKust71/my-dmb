'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { AuthCardHeader } from '@/components/auth/auth-card-header'
import { AuthSocialButtons } from '@/components/auth/auth-social-buttons'
import { BackButton } from '@/components/auth/back-button'

type AuthCardWrapperProps = {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocialButtons?: boolean
}

export const AuthCardWrapper = ({
  children,
  backButtonHref,
  backButtonLabel,
  showSocialButtons,
  headerLabel,
}: AuthCardWrapperProps) => {
  return (
    <Card className={'w-[400px] shadow-md'}>
      <CardHeader>
        <AuthCardHeader>{headerLabel}</AuthCardHeader>
      </CardHeader>

      <CardContent>{children}</CardContent>

      {showSocialButtons && (
        <CardFooter>
          <AuthSocialButtons />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}
