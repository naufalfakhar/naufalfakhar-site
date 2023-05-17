import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = { items: { name: string; href: string }[]; pathname: string }

export default function Navigation({ items, pathname }: Props) {
  return (
    <nav className='container hidden items-center justify-center py-16 lg:flex'>
      <ul className={cn('flex gap-5 text-zinc-400', 'lg:gap-10')}>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={cn(
                'relative cursor-pointer text-sm font-semibold transition duration-500 ease-in-out',
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
    </nav>
  )
}
