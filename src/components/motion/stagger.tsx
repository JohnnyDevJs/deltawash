'use client'

import { motion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

export type StaggerProps = ComponentProps<typeof motion.div> & {
  children: ReactNode
  delay?: number
  stagger?: number
}

export function Stagger({
  children,
  delay = 0.1,
  stagger = 0.12,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { delayChildren: delay, staggerChildren: stagger },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export type StaggerItemProps = ComponentProps<typeof motion.div> & {
  children: ReactNode
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
