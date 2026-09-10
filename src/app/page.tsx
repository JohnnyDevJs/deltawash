import Image from 'next/image'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import type { HeroSlide } from '@/components/hero-banner'
import { HeroBanner } from '@/components/hero-banner'
import { FadeIn } from '@/components/motion/fade-in'

type ServiceCard = {
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

const heroSlides: HeroSlide[] = [
  {
    title: 'Do seu espaço ao seu carro, cuidado em cada detalhe.',
    description:
      'Deep Clean e Auto Detailing com o padrão de excelência DeltaWash.',
  },
  {
    title: 'Excelência que transforma ambientes e veículos.',
    description:
      'Limpeza profunda e estética automotiva com atenção, qualidade e cuidado em cada detalhe.',
  },
  {
    title: 'Cuidado completo, dentro e fora de casa.',
    description:
      'Soluções especializadas que renovam seus espaços e valorizam cada detalhe do seu veículo.',
  },
]

export default function Home() {
  return (
    <div className="group/page relative flex min-h-dvh flex-col md:h-dvh md:overflow-hidden">
      <Image
        src="/images/bg-homepage-deltawash.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 hidden object-cover object-bottom md:block"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,var(--background-variant)_0%,var(--background)_75%)] md:hidden"
      />

      <div
        aria-hidden
        className="bg-primary pointer-events-none absolute inset-0 -z-20 origin-left scale-x-0 transition-transform duration-700 ease-out group-has-[[data-service=auto-detailing]_button:hover]/page:scale-x-100"
      />

      <Header activeHref="/" />

      <main className="flex min-h-0 flex-1 flex-col pt-[calc(1.5rem+clamp(3rem,7vh,4rem)+2rem)] md:pt-0">
        <Container className="shrink-0 pb-[clamp(1rem,3vh,2.5rem)]">
          <HeroBanner slides={heroSlides} />
        </Container>

        <Container className="grid min-h-0 grid-cols-1 items-end gap-12 pb-8 md:mt-auto md:flex-1 md:grid-cols-2 md:gap-8 md:pb-[clamp(0.75rem,2vh,1.5rem)]">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
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
                  className="w-48 transition-transform duration-500 ease-out group-has-[button:hover]:-translate-y-2 group-has-[button:hover]:scale-105 sm:w-56 md:h-[clamp(5.5rem,25vh,18rem)] md:w-auto"
                />
                <p className="text-[clamp(0.875rem,1.9vh,1.25rem)] font-medium text-white">
                  {service.description}
                </p>
                <Button variant={service.buttonVariant}>
                  {service.buttonLabel}
                </Button>
              </div>
            </FadeIn>
          ))}
        </Container>
      </main>

      <Footer />
    </div>
  )
}
