import Link from 'next/link'
import type { ReactNode } from 'react'
import { LuContact, LuHouse, LuMessageCircleWarning } from 'react-icons/lu'

type NavigationItem = {
  label: string
  href: string
  icon: ReactNode
}

const navigationItems: NavigationItem[] = [
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

export type NavigationProps = {
  activeHref?: string
}

export function Navigation({ activeHref = '/' }: NavigationProps) {
  return (
    <nav
      aria-label="Menu principal"
      className="bg-background fixed inset-x-0 bottom-0 z-30 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="flex items-stretch justify-around">
        {navigationItems.map((item) => {
          const isActive = item.href === activeHref

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`flex flex-col items-center gap-1 py-2 text-[11px] font-semibold tracking-wide uppercase transition-colors ${
                  isActive ? 'text-secondary' : 'text-white'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
