import Image from 'next/image'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FadeIn } from '@/components/motion/fade-in'

export type ServiceCard = {
  title: string
  description: string
  logoSrc: string
  buttonLabel: string
  buttonVariant: 'secondary' | 'outline'
  align: 'start' | 'end'
  slug: string
}

const services: ServiceCard[] = [
  {
    title: 'Deep Clean',
    description: 'Casas, ambientes e estofados.',
    logoSrc: '/images/logo-deltawash-deep-clean.svg',
    buttonLabel: 'Acessar Deep Clean',
    buttonVariant: 'secondary',
    align: 'start',
    slug: 'deep-clean',
  },
  {
    title: 'Auto Detailing',
    description: 'Cuidado completo para o seu veículo.',
    logoSrc: '/images/logo-deltawash-auto-detailing.svg',
    buttonLabel: 'Acessar Auto Detailing',
    buttonVariant: 'outline',
    align: 'end',
    slug: 'auto-detailing',
  },
]

export type ServicesProps = {
  className?: string
}

export function Services({ className = '' }: ServicesProps) {
  return (
    <Container
      className={`grid min-h-0 grid-cols-1 items-end gap-12 pb-8 md:mt-auto md:flex-1 md:grid-cols-2 md:gap-8 md:pb-[clamp(0.75rem,2vh,1.5rem)] ${className}`}
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
              alt={`DeltaWash ${service.title}`}
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
