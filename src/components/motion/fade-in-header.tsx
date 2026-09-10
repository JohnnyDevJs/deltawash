'use client'

import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'
import { useRef } from 'react'

const SCROLL_NOISE = 8
const REVEAL_OFFSET = 24

export type FadeInHeaderProps = ComponentProps<typeof motion.header> & {
  children: ReactNode
}

export function FadeInHeader({ children, ...props }: FadeInHeaderProps) {
  const { scrollY } = useScroll()
  const backgroundOpacity = useSpring(0, { stiffness: 200, damping: 30 })
  const lastSettledY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (current <= REVEAL_OFFSET) {
      lastSettledY.current = current
      backgroundOpacity.set(0)
      return
    }

    const delta = current - lastSettledY.current

    if (Math.abs(delta) < SCROLL_NOISE) {
      return
    }

    lastSettledY.current = current
    backgroundOpacity.set(delta > 0 ? 1 : 0)
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
        className="bg-background pointer-events-none absolute inset-0 md:hidden"
      />
      <div className="relative">{children}</div>
    </motion.header>
  )
}
