import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Product | MRA',
  }
}

const MraPage = () => {
  return (
    <div>
      <h1>MRA</h1>
    </div>
  )
}

export default MraPage
