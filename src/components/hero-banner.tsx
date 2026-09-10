'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
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
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 160], [1, 0])
  const y = useTransform(scrollY, [0, 160], [0, -24])

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
    <motion.div
      style={{ opacity, y }}
      className="relative grid text-center [grid-template-areas:'slide']"
    >
      <div
        aria-hidden
        className="invisible grid [grid-area:slide] [grid-template-areas:'measure']"
      >
        {slides.map((slide) => (
          <div key={slide.title} className="[grid-area:measure]">
            <p className="m-auto max-w-[22ch] text-3xl leading-[1.12] font-extrabold tracking-tight text-balance md:text-[clamp(2rem,5vh,4.5rem)]">
              {slide.title}
            </p>
            <p className="mx-auto mt-[clamp(0.75rem,1.5vh,1.25rem)] max-w-[21.7em] text-base font-medium md:text-[clamp(1rem,2.1vh,1.375rem)]">
              {slide.description}
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          exit={{ opacity: 0, y: -16 }}
          className="[grid-area:slide]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="m-auto max-w-[22ch] text-3xl leading-[1.12] font-extrabold tracking-tight text-balance text-white md:text-[clamp(2rem,5vh,4.5rem)]"
          >
            {activeSlide.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-[clamp(0.75rem,1.5vh,1.25rem)] max-w-[21.7em] text-base font-medium text-white md:text-[clamp(1rem,2.1vh,1.375rem)]"
          >
            {activeSlide.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      <span aria-live="polite" className="sr-only">
        {activeSlide.title}. {activeSlide.description}
      </span>
    </motion.div>
  )
}
