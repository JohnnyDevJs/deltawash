'use client'

import { Tooltip } from 'radix-ui'

import { socialLinks } from '@/constants/social'

export type SocialProps = {
  className?: string
}

export function Social({ className = '' }: SocialProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <ul className={`flex items-center gap-2 ${className}`}>
        {socialLinks.map((social) => (
          <li key={social.label}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="border-secondary hover:bg-secondary hover:text-background flex size-9 items-center justify-center rounded-full border-2 text-lg text-white transition-all duration-500"
                >
                  {social.icon}
                </a>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Content
                  side="bottom"
                  sideOffset={8}
                  className="bg-secondary text-background z-50 rounded-md px-3 py-1.5 text-sm font-semibold shadow-lg select-none data-[state=closed]:animate-[tooltip-fade-out_150ms_ease-in] data-[state=delayed-open]:animate-[tooltip-fade-in_150ms_ease-out]"
                >
                  {social.label}
                  <Tooltip.Arrow className="fill-secondary" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </li>
        ))}
      </ul>
    </Tooltip.Provider>
  )
}
