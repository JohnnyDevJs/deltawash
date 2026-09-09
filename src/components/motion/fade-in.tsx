'use client'

import { motion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

const directionOffset = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
} as const

export type FadeInProps = ComponentProps<typeof motion.div> & {
  children: ReactNode
  direction?: keyof typeof directionOffset
  delay?: number
  duration?: number
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  ...props
}: FadeInProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
