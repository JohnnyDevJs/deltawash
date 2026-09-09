import type { ReactNode } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'

type SocialLink = {
  label: string
  href: string
  icon: ReactNode
}

const socialLinks: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: <FaFacebookF className="size-5 text-white" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: <FaInstagram className="size-5 text-white" />,
  },
]

export type SocialProps = {
  className?: string
}

export function Social({ className = '' }: SocialProps) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="border-secondary text-secondary hover:bg-secondary hover:text-background flex size-9 items-center justify-center rounded-lg border-2 text-lg transition-all duration-500"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
