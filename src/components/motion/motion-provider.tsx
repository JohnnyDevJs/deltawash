'use client'

import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

export type MotionProviderProps = {
  children: ReactNode
}

export function MotionProvider({ children }: MotionProviderProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
