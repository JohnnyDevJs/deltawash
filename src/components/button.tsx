import type { ComponentProps, ReactNode } from 'react'
import { LuArrowRight } from 'react-icons/lu'

const variantStyles = {
  primary:
    'bg-primary text-white hover:bg-primary-variant active:bg-primary-dark',
  secondary:
    'bg-secondary text-background hover:bg-secondary-variant active:bg-secondary-dark',
  outline: 'bg-white  text-background hover:bg-white/90 active:bg-white/90',
} as const

export type ButtonProps = ComponentProps<'button'> & {
  variant?: keyof typeof variantStyles
  icon?: ReactNode
  children: ReactNode
}

export function Button({
  variant = 'primary',
  icon = <LuArrowRight strokeWidth={3} />,
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`group inline-flex cursor-pointer items-center justify-center gap-4 rounded-full px-10 py-4 text-base font-bold tracking-tight transition-all duration-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon ? (
        <span className="text-xl transition-all group-hover:translate-x-1">
          {icon}
        </span>
      ) : null}
    </button>
  )
}
