import { FaWhatsapp } from 'react-icons/fa6'

const WHATSAPP_NUMBER = '5511999999999'
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os serviços.'

export type WhatsAppButtonProps = {
  phone?: string
  message?: string
}

export function WhatsAppButton({
  phone = WHATSAPP_NUMBER,
  message = WHATSAPP_MESSAGE,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group bg-whatsapp fixed right-5 bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] z-40 inline-flex items-center gap-0 rounded-full border-2 border-white p-3 text-sm font-bold text-white shadow-lg transition-[gap,padding] duration-300 ease-out hover:gap-2 hover:pr-5 focus-visible:gap-2 focus-visible:pr-5 motion-safe:animate-[whatsapp-bounce_3s_ease-in-out_infinite] md:bottom-6"
    >
      <span className="text-3xl text-white">
        <FaWhatsapp />
      </span>
      <span className="grid grid-cols-[0fr] overflow-hidden transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
        <span className="overflow-hidden whitespace-nowrap">WhatsApp</span>
      </span>
    </a>
  )
}
