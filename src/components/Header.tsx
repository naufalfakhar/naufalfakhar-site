'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Navigation from '@/components/Navigation'
import XMark from './icons/XMark'
import Hamburger from './icons/Hamburger'
import NavigationMobile from './NavigationMobile'

export default function Header() {
  const navItems: { name: string; href: string }[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ]

  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const handleToggle = () => setShowMobileMenu(!showMobileMenu)
  const pathname = usePathname()

  return (
    <header className='absolute left-0 top-0 z-20 w-full overflow-x-hidden'>
      <Navigation items={navItems} pathname={pathname} />
      <div className='container mt-10 flex items-center justify-end md:hidden'>
        {showMobileMenu ? (
          <button type='button' onClick={handleToggle}>
            <XMark className='w-8 text-primary' />
          </button>
        ) : (
          <button type='button' onClick={handleToggle}>
            <Hamburger className='w-8 text-primary' />
          </button>
        )}
      </div>

      <NavigationMobile
        items={navItems}
        pathname={pathname}
        isOpen={showMobileMenu}
        handleToggle={handleToggle}
      />
    </header>
  )
}
