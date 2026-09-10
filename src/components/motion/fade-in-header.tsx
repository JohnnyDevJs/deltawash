'use client'

import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'
import { useRef } from 'react'

const REVEAL_OFFSET = 24
const REVEAL_DELTA = 8
const HIDE_DELTA = 64

export type FadeInHeaderProps = ComponentProps<typeof motion.header> & {
  children: ReactNode
}

export function FadeInHeader({ children, ...props }: FadeInHeaderProps) {
  const { scrollY } = useScroll()
  const backgroundOpacity = useSpring(0, { stiffness: 200, damping: 30 })
  const anchorY = useRef(0)
  const isRevealed = useRef(false)

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (current <= REVEAL_OFFSET) {
      anchorY.current = current
      isRevealed.current = false
      backgroundOpacity.set(0)
      return
    }

    const delta = current - anchorY.current

    if (delta > 0) {
      anchorY.current = current

      if (!isRevealed.current && delta >= REVEAL_DELTA) {
        isRevealed.current = true
        backgroundOpacity.set(1)
      }

      return
    }

    if (!isRevealed.current) {
      anchorY.current = current
      return
    }

    if (-delta >= HIDE_DELTA) {
      anchorY.current = current
      isRevealed.current = false
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
        className="bg-background pointer-events-none absolute inset-0 md:hidden"
      />
      <div className="relative">{children}</div>
    </motion.header>
  )
}
