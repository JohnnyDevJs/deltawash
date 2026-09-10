'use client'

import { useEffect } from 'react'

export function PwaRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return
    }

    const register = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // registro do service worker falhou; o app segue funcionando online
      })
    }

    if (document.readyState === 'complete') {
      register()
      return
    }

    window.addEventListener('load', register)

    return () => window.removeEventListener('load', register)
  }, [])

  return null
}
