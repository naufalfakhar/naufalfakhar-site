import { cn } from '@/lib/utils'

const ButtonVariant = ['primary', 'secondary'] as const

type Props = {
  type?: 'button' | 'submit' | 'reset'
  variant?: (typeof ButtonVariant)[number]
  className?: string
  children: React.ReactNode
}

export default function Button({
  type = 'button',
  variant = 'primary',
  className,
  children,
}: Props) {
  return (
    <button
      type={type}
      className={cn(className, [
        variant === 'primary' && [
          'relative z-0 box-border flex h-14 items-center justify-center gap-2 bg-primary px-3 py-2 text-sm font-semibold text-black transition-colors',
          'lg:px-6 lg:py-4 lg:text-base',
          'before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300',
          'hover:shadow-[8px_8px] hover:shadow-zinc-400 hover:transition hover:duration-[1200ms] hover:ease-in-out before:hover:scale-x-100',
        ],
        variant === 'secondary' && [
          'relative z-0 box-border flex h-14 items-center justify-center gap-2 border border-primary bg-black px-3 py-2 text-sm font-semibold text-primary transition-colors',
          'lg:px-6 lg:py-4 lg:text-base',
          'before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300',
          'hover:text-black hover:shadow-[8px_8px] hover:shadow-zinc-600 hover:transition hover:duration-[1200ms] hover:ease-in-out before:hover:scale-x-100',
        ],
      ])}
    >
      {children}
    </button>
  )
}
