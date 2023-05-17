import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  items: { name: string; href: string }[]
  pathname: string
  isOpen: boolean
  handleToggle: () => void
}

export default function NavigationMobile({
  items,
  pathname,
  isOpen,
  handleToggle,
}: Props) {
  return (
    <nav
      className={cn(
        'fixed inset-x-1/4 inset-y-0 right-0 -z-10 bg-primary transition duration-700 ease-in-out',
        `${isOpen ? 'translate-x-0' : 'translate-x-full'}`
      )}
    >
      <div
        className={cn(
          'flex h-full w-full items-center justify-center bg-zinc-800 transition duration-1000 ease-in-out',
          `${isOpen ? 'translate-x-0' : 'translate-x-full'}`
        )}
      >
        <ul
          className={cn(
            'flex flex-col items-center gap-10 text-zinc-400',
            'lg:gap-10'
          )}
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={handleToggle}
                className={cn(
                  'relative cursor-pointer text-2xl font-semibold transition duration-500 ease-in-out',
                  'lg:text-base',
                  'hover:text-primary',
                  `${pathname === item.href ? 'text-primary' : ''}`
                )}
              >
                {item.name}
                <div
                  className={
                    pathname === item.href
                      ? `absolute inset-x-0 -bottom-1.5 h-1 -translate-x-1/2 animate-movex bg-gradient-to-l from-primary`
                      : ''
                  }
                ></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
