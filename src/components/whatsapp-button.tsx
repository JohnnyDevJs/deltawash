'use client'

import { Tooltip } from 'radix-ui'
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
    <div className="group/wa fixed right-5 bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] z-40 inline-flex md:bottom-6">
      <span
        aria-hidden
        className="bg-whatsapp pointer-events-none absolute -inset-4 rounded-full opacity-60 motion-safe:animate-[whatsapp-pulse_1.8s_ease-out_infinite]"
      />
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="bg-whatsapp relative inline-flex items-center rounded-full border-2 border-white p-3 text-white shadow-lg motion-safe:animate-[whatsapp-bounce_3s_ease-in-out_infinite]"
            >
              <span className="text-3xl text-white">
                <FaWhatsapp />
              </span>
            </a>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content
              side="left"
              sideOffset={12}
              className="bg-whatsapp z-50 rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-lg select-none data-[state=closed]:animate-[tooltip-fade-out_150ms_ease-in] data-[state=delayed-open]:animate-[tooltip-fade-in_150ms_ease-out]"
            >
              Fale conosco pelo WhatsApp
              <Tooltip.Arrow className="fill-whatsapp" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  )
}
