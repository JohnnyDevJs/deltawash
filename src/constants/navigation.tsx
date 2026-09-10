import type { ReactNode } from 'react'
import { LuContact, LuHouse, LuMessageCircleWarning } from 'react-icons/lu'

export type NavigationItem = {
  label: string
  href: string
  icon: ReactNode
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'Início',
    href: '/',
    icon: <LuHouse className="size-6" />,
  },
  {
    label: 'Sobre nós',
    href: '/sobre',
    icon: <LuMessageCircleWarning className="size-6" />,
  },
  {
    label: 'Fale Conosco',
    href: '/contato',
    icon: <LuContact className="size-6" />,
  },
]
