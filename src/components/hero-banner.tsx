'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export type HeroSlide = {
  title: string
  description: string
}

export type HeroBannerProps = {
  slides: HeroSlide[]
  interval?: number
}

export function HeroBanner({ slides, interval = 7000 }: HeroBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) {
      return
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [slides.length, interval])

  const activeSlide = slides[activeIndex]

  return (
    <div className="relative text-center">
      <AnimatePresence mode="wait">
        <motion.div key={activeIndex} exit={{ opacity: 0, y: -16 }}>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="m-auto max-w-[22ch] text-[clamp(2rem,5vh,4.5rem)] leading-[1.12] font-extrabold tracking-tight text-balance text-white"
          >
            {activeSlide.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-[clamp(0.75rem,1.5vh,1.25rem)] max-w-[21.7em] text-[clamp(1rem,2.1vh,1.375rem)] font-medium text-white"
          >
            {activeSlide.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      <span aria-live="polite" className="sr-only">
        {activeSlide.title}. {activeSlide.description}
      </span>
    </div>
  )
}
