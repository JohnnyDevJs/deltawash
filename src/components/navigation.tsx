import Link from 'next/link'

import { navigationItems } from '@/constants/navigation'

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
                className="flex flex-col items-center gap-1 py-2 text-[11px] font-semibold tracking-wide uppercase"
              >
                <span
                  className={`transition-colors ${
                    isActive ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`transition-colors ${
                    isActive ? 'text-secondary' : 'text-white'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
