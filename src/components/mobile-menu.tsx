'use client'

import Link from 'next/link'
import { Dialog } from 'radix-ui'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

import { Social } from '@/components/social'

type NavItem = {
  label: string
  href: string
}

export type MobileMenuProps = {
  navItems: NavItem[]
  activeHref: string
}

export function MobileMenu({ navItems, activeHref }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger
        aria-label="Abrir menu"
        className="hover:text-secondary text-white transition-colors md:hidden"
      >
        <LuMenu className="size-8" strokeWidth={2.5} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-background/80 fixed inset-0 z-40 backdrop-blur-sm data-[state=closed]:animate-[overlay-fade-out_200ms_ease-in] data-[state=open]:animate-[overlay-fade-in_200ms_ease-out] md:hidden" />
        <Dialog.Content className="bg-background fixed inset-y-0 right-0 z-50 flex w-4/5 max-w-xs flex-col gap-10 p-8 shadow-2xl data-[state=closed]:animate-[panel-slide-out_250ms_ease-in] data-[state=open]:animate-[panel-slide-in_250ms_ease-out] md:hidden">
          <div className="flex items-center justify-end">
            <Dialog.Close
              aria-label="Fechar menu"
              className="hover:text-secondary text-white transition-colors"
            >
              <LuX className="size-7" strokeWidth={2.5} />
            </Dialog.Close>
          </div>

          <Dialog.Title className="sr-only">Menu principal</Dialog.Title>

          <nav aria-label="Menu principal">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = item.href === activeHref

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`inline-block border-b-3 pb-1 text-base font-semibold text-white transition-colors ${
                        isActive ? 'border-secondary' : 'border-transparent'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Social />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
