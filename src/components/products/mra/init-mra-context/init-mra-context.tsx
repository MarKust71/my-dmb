'use client'

import { startTransition } from 'react'

import { Button } from '@/components/ui/button'
import { addContext } from '@/actions/mra/add-context'
import { useToast } from '@/components/ui/use-toast'

export const InitMraContext = () => {
  const { toast } = useToast()

  const addNewContext = (contextId: string, name: string) => {
    startTransition(() => {
      addContext({
        contextId,
        name,
      }).then((data) => {
        if (data.error) {
          toast({
            className: 'font-bold justify-center',
            description: data.error,
            duration: 3000,
            variant: 'destructive',
          })

          return
        }

        if (data.success) {
          toast({
            className: 'font-bold justify-center bg-[#999DAD]',
            description: data.success,
            duration: 3000,
          })
        }
      })
    })
  }

  const handleClick = () => {
    addNewContext('', 'bez kontekstu')
    addNewContext('KASTOM', '"KASTOM" P.H.U. Katarzyna Grab')
  }

  return (
    <div className={'flex flex-col items-center justify-center mt-4'}>
      <h1 className={'text-3xl font-bold mb-4'}>Init MRA Context</h1>

      <Button onClick={handleClick}>Init MRA Context</Button>
    </div>
  )
}
