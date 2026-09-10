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
  }, [slides.length, interval, activeIndex])

  const activeSlide = slides[activeIndex]

  const goToNext = () =>
    setActiveIndex((current) => (current + 1) % slides.length)

  const goToPrevious = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)

  return (
    <motion.div style={{ opacity, y }} className="relative">
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            exit={{ opacity: 0, y: -16 }}
            drag={slides.length > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) {
                goToNext()
                return
              }

              if (info.offset.x > 60) {
                goToPrevious()
              }
            }}
            className="cursor-grab touch-pan-y active:cursor-grabbing md:cursor-default"
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
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-[clamp(0.75rem,1.5vh,1.25rem)] max-w-[21.7em] text-base font-medium text-white md:text-[clamp(1rem,2.1vh,1.375rem)]"
            >
              {activeSlide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <span aria-live="polite" className="sr-only">
          {activeSlide.title}. {activeSlide.description}
        </span>
      </div>

      {slides.length > 1 ? (
        <div className="mt-[clamp(0.5rem,1.5vh,1rem)] flex items-center justify-center gap-2">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para o slide ${index + 1}`}
                aria-current={isActive ? 'true' : undefined}
                className={`h-2.5 cursor-pointer rounded-full transition-all duration-500 ease-out ${
                  isActive
                    ? 'bg-primary group-has-[[data-service=auto-detailing]_button:hover]/page:bg-background w-8'
                    : 'w-2.5 bg-white'
                }`}
              />
            )
          })}
        </div>
      ) : null}
    </motion.div>
  )
}
