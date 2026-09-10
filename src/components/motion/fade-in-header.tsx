'use client'

import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

export type FadeInHeaderProps = ComponentProps<typeof motion.header> & {
  children: ReactNode
}

export function FadeInHeader({ children, ...props }: FadeInHeaderProps) {
  const { scrollY } = useScroll()
  const backgroundOpacity = useSpring(0, { stiffness: 200, damping: 30 })

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0

    if (current > previous && current > 16) {
      backgroundOpacity.set(1)
      return
    }

    if (current < previous) {
      backgroundOpacity.set(0)
    }
  })

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      <motion.div
        aria-hidden
        style={{ opacity: backgroundOpacity }}
        className="bg-background pointer-events-none absolute inset-0 -z-10 md:hidden"
      />
      {children}
    </motion.header>
  )
}
