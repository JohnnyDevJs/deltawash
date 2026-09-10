import Image from 'next/image'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FadeIn } from '@/components/motion/fade-in'
import { services } from '@/constants/service'

export type ServiceProps = {
  className?: string
}

export function Service({ className = '' }: ServiceProps) {
  return (
    <Container
      className={`grid min-h-0 grid-cols-1 items-end gap-8 pb-8 md:mt-auto md:flex-1 md:grid-cols-2 md:gap-6 md:pb-[clamp(0.75rem,2vh,1.5rem)] ${className}`}
    >
      {services.map((service, index) => (
        <FadeIn
          key={service.slug}
          delay={0.45 + index * 0.15}
          className={`flex flex-col items-center ${
            service.align === 'start' ? 'md:items-start' : 'md:items-end'
          }`}
        >
          <div
            data-service={service.slug}
            className="group flex min-h-0 flex-col items-center gap-[clamp(0.75rem,2vh,1.5rem)]"
          >
            <Image
              src={service.logoSrc}
              alt={`Deltawash ${service.title}`}
              width={288}
              height={288}
              priority
              className="w-36 transition-transform duration-500 ease-out group-has-[button:hover]:-translate-y-2 group-has-[button:hover]:scale-105 sm:w-44 md:h-[clamp(5.5rem,25vh,18rem)] md:w-auto"
            />
            <p className="text-center text-[clamp(0.875rem,1.9vh,1.25rem)] font-medium text-white">
              {service.description}
            </p>
            <Button variant={service.buttonVariant}>
              {service.buttonLabel}
            </Button>
          </div>
        </FadeIn>
      ))}
    </Container>
  )
}
