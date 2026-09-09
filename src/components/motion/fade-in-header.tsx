'use client'

import { motion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

export type FadeInHeaderProps = ComponentProps<typeof motion.header> & {
  children: ReactNode
}

export function FadeInHeader({ children, ...props }: FadeInHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.header>
  )
}
