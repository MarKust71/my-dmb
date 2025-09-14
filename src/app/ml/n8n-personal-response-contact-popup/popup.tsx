'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    ml?: (...args: any[]) => void
  }
}

export const Popup = () => {
  const handleClick = () => {
    if (typeof window.ml === 'function') {
      window.ml('show', 'Vlw0Sb', true) // ← ID formularza
    } else {
      console.warn('MailerLite jeszcze się nie załadował.')
    }
  }

  useEffect(() => {
    handleClick()
  }, [])

  return (
    <>
      <button className="ml-onclick-form" onClick={handleClick}>
        Kliknij tutaj, aby pokazać formularz
      </button>

      <a
        className="ml-onclick-form"
        href="javascript:void(0)"
        onClick={handleClick}
      >
        Kliknij tutaj, aby pokazać formularz
      </a>
    </>
  )
}
