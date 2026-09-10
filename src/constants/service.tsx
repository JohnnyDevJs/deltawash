export type ServiceItem = {
  title: string
  description: string
  logoSrc: string
  buttonLabel: string
  buttonVariant: 'secondary' | 'outline'
  align: 'start' | 'end'
  slug: string
}

export const services: ServiceItem[] = [
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
