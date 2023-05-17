import React from 'react'
import Link from 'next/link'
import Github from './icons/Github'
import Gmail from './icons/Gmail'
import Linkedin from './icons/Linkedin'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-0 z-10 flex w-full items-center bg-transparent'>
      <div className='container mx-auto flex max-w-lg flex-col items-center justify-center gap-10 py-10 text-zinc-500'>
        <div className='flex w-full items-center justify-center gap-5'>
          <Link
            href='https://github.com/naufalfakhar'
            target='_blank'
            className='flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 fill-current text-zinc-500 transition duration-300 ease-in-out hover:bg-primary hover:text-zinc-700'
          >
            <Github className='w-5' />
          </Link>
          <Link
            href='mailto:direct.anaufal@gmail.com'
            target='_blank'
            className='flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 fill-current text-zinc-500 transition duration-300 ease-in-out hover:bg-primary hover:text-zinc-700'
          >
            <Gmail className='w-5' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/naufalfakhar/'
            target='_blank'
            className='flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 fill-current text-zinc-500 transition duration-300 ease-in-out hover:bg-primary hover:text-zinc-700'
          >
            <Linkedin className='w-5' />
          </Link>
        </div>
        <p className='flex text-[10px] lg:text-xs'>
          © 2023&nbsp;
          <span className=''>Ahmad Naufal Alfakhar</span>
          .&nbsp;All rights reserved.
        </p>
      </div>
    </footer>
  )
}
