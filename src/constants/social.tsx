import type { ReactNode } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'

export type SocialLink = {
  label: string
  href: string
  icon: ReactNode
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Siga-nos Facebook',
    href: 'https://www.facebook.com/',
    icon: <FaFacebookF className="size-5" />,
  },
  {
    label: 'Siga-nos no Instagram',
    href: 'https://www.instagram.com/',
    icon: <FaInstagram className="size-5" />,
  },
]
