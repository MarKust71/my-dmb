import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404: This page could not be found.',
}

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily:
          'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: 20,
            paddingRight: 20,
            fontSize: 24,
            fontWeight: 500,
            borderRight: '1px solid rgba(255,255,255,.3)',
          }}
        >
          404
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 400 }}>
            This page could not be found.
          </div>

          <div style={{ fontSize: 14, fontWeight: 400, opacity: 0.7 }}>
            Nie można odnaleźć takiej strony.
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
