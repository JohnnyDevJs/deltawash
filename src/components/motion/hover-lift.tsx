'use client'

import { motion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

export type HoverLiftProps = ComponentProps<typeof motion.div> & {
  children: ReactNode
  lift?: number
  scale?: number
}

export function HoverLift({
  children,
  lift = -6,
  scale = 1.03,
  ...props
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: lift, scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
