import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/container'
import { MobileMenu } from '@/components/mobile-menu'
import { FadeInHeader } from '@/components/motion/fade-in-header'
import { Social } from '@/components/social'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
]

export type HeaderProps = {
  activeHref?: string
}

export function Header({ activeHref = '/' }: HeaderProps) {
  return (
    <FadeInHeader className="w-full shrink-0 py-[clamp(1.25rem,3vh,2.5rem)]">
      <Container className="flex items-center justify-between gap-8">
        <Link href="/" aria-label="DeltaWash Advanced Cleaning">
          <Image
            src="/images/logo-deltawash-light.svg"
            alt="DeltaWash Advanced Cleaning"
            width={197}
            height={68}
            priority
            className="h-[clamp(3rem,7vh,4rem)] w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          <nav aria-label="Menu principal">
            <ul className="flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => {
                const isActive = item.href === activeHref

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`hover:text-secondary border-b-3 pb-1 text-base font-semibold transition-colors duration-500 ${
                        isActive
                          ? 'border-secondary text-white'
                          : 'border-transparent text-white'
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
        </div>

        <MobileMenu navItems={navItems} activeHref={activeHref} />
      </Container>
    </FadeInHeader>
  )
}
