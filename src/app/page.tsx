import Image from 'next/image'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

type ServiceCard = {
  title: string
  description: string
  logoSrc: string
  buttonLabel: string
  buttonVariant: 'secondary' | 'outline'
  align: 'start' | 'end'
}

const services: ServiceCard[] = [
  {
    title: 'Deep Clean',
    description: 'Casas, ambientes e estofados.',
    logoSrc: '/images/logo-deltawash-deep-clean.svg',
    buttonLabel: 'Acessar Deep Clean',
    buttonVariant: 'secondary',
    align: 'start',
  },
  {
    title: 'Auto Detailing',
    description: 'Cuidado completo para o seu veículo.',
    logoSrc: '/images/logo-deltawash-auto-detailing.svg',
    buttonLabel: 'Acessar Auto Detailing',
    buttonVariant: 'outline',
    align: 'end',
  },
]

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col md:h-dvh md:overflow-hidden">
      <Image
        src="/images/bg-homepage-deltawash.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-bottom"
      />

      <Header activeHref="/" />

      <main className="flex min-h-0 flex-1 flex-col">
        <Container className="shrink-0 pb-[clamp(1rem,3vh,2.5rem)] text-center">
          <h1 className="m-auto max-w-[22ch] text-[clamp(2rem,5vh,4.5rem)] leading-[1.12] font-extrabold tracking-tight text-balance text-white">
            Do seu espaço ao seu carro, cuidado em cada detalhe.
          </h1>
          <p className="mx-auto mt-[clamp(0.75rem,1.5vh,1.25rem)] max-w-[21.7em] text-[clamp(1rem,2.1vh,1.375rem)] font-medium text-white">
            Deep Clean e Auto Detailing com o padrão de excelência DeltaWash.
          </p>
        </Container>

        <Container className="grid min-h-0 grid-cols-1 items-end gap-12 pb-8 md:mt-auto md:flex-1 md:grid-cols-2 md:gap-8 md:pb-[clamp(0.75rem,2vh,1.5rem)]">
          {services.map((service) => (
            <div
              key={service.title}
              className={`flex flex-col items-center ${
                service.align === 'start' ? 'md:items-start' : 'md:items-end'
              }`}
            >
              <div className="group flex min-h-0 flex-col items-center gap-[clamp(0.75rem,2vh,1.5rem)]">
                <Image
                  src={service.logoSrc}
                  alt={`DeltaWash ${service.title}`}
                  width={288}
                  height={288}
                  priority
                  className="w-48 transition-transform duration-500 group-hover:-translate-y-1 sm:w-56 md:h-[clamp(5.5rem,25vh,18rem)] md:w-auto"
                />
                <p className="text-[clamp(0.875rem,1.9vh,1.25rem)] font-medium text-white">
                  {service.description}
                </p>
                <Button variant={service.buttonVariant}>
                  {service.buttonLabel}
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </main>

      <Footer />
    </div>
  )
}
