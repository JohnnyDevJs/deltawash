import Image from 'next/image'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import type { HeroSlide } from '@/components/hero-banner'
import { HeroBanner } from '@/components/hero-banner'
import { Navigation } from '@/components/navigation'
import { Services } from '@/components/services'

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
    <div className="group/page relative flex min-h-dvh flex-col pb-[4.5rem] md:h-dvh md:overflow-hidden md:pb-0">
      <Image
        src="/images/bg-homepage-deltawash.png"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 0px, 100vw"
        className="-z-10 hidden object-cover object-bottom md:block"
      />

      <Image
        src="/images/bg-homepage-mobile-deltawash.png"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 0px, 100vw"
        className="-z-10 object-cover object-bottom md:hidden"
      />

      <div
        aria-hidden
        className="from-background via-background/68 to-background/82 pointer-events-none absolute inset-0 -z-10 bg-linear-to-b via-55% md:hidden"
      />

      <div
        aria-hidden
        className="from-primary/85 via-primary/55 to-primary/70 md:from-primary md:via-primary md:to-primary pointer-events-none absolute inset-0 z-[-5] origin-left scale-x-0 bg-linear-to-b via-55% transition-transform duration-700 ease-out group-has-[[data-service=auto-detailing]_button:hover]/page:scale-x-100 md:-z-20"
      />

      <Header activeHref="/" />

      <main className="flex min-h-0 flex-1 flex-col pt-[calc(1.5rem+2.5rem+2rem)] md:pt-0">
        <Container className="shrink-0 pb-[clamp(1rem,3vh,2.5rem)]">
          <HeroBanner slides={heroSlides} />
        </Container>

        <Services />
      </main>

      <Footer />

      <Navigation activeHref="/" />
    </div>
  )
}
