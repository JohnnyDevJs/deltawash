import { Container } from '@/components/container'
import { FadeInFooter } from '@/components/motion/fade-in-footer'

export type FooterProps = {
  companyName?: string
  companySlogan?: string
}

export function Footer({
  companyName = 'DeltaWash',
  companySlogan = 'Advanced Cleaning',
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <FadeInFooter className="w-full shrink-0 pb-[clamp(0.75rem,2vh,1.5rem)]">
      <Container>
        <p className="text-center text-[12px] text-white">
          © {currentYear} {companyName} - {companySlogan}. Todos os direitos
          reservados.
        </p>
      </Container>
    </FadeInFooter>
  )
}
