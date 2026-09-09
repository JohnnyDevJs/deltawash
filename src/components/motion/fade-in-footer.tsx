'use client'

import { motion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

export type FadeInFooterProps = ComponentProps<typeof motion.footer> & {
  children: ReactNode
}

export function FadeInFooter({ children, ...props }: FadeInFooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.footer>
  )
}
