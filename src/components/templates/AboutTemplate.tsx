import { cn } from '@/lib/utils'

const AboutVariant = ['left', 'right'] as const

type Props = {
  className?: string
  variant?: (typeof AboutVariant)[number]
  position?: string
  title: string
  period: string[]
  description?: string
}

export default function AboutTemplate({
  position,
  title,
  period,
  description,
  className,
  variant = 'right',
}: Props) {
  return (
    <div
      className={cn(
        className,
        [
          variant === 'left' && ['right-full pr-2 text-right lg:pr-4'],
          variant === 'right' && ['left-full pl-2 lg:pl-4'],
        ],
        'absolute flex w-36 flex-col text-sm lg:w-max lg:text-base'
      )}
    >
      <h2
        className={cn(
          'capitalize text-primary transition duration-300 group-hover:text-primary lg:text-inherit'
        )}
      >
        {position}
      </h2>
      <h4>{title}</h4>
      <h4>{period.join(' - ')}</h4>
      <p>{description}</p>
    </div>
  )
}
