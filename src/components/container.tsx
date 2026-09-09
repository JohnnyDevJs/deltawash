import type { ComponentProps, ReactNode } from 'react'

export type ContainerProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Container({
  children,
  className = '',
  ...props
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`} {...props}>
      {children}
    </div>
  )
}
