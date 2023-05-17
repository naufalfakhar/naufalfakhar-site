import React from 'react'
import {
  JavaScript,
  TypeScript,
  Bootstrap,
  TailwindCSS,
  ReactJs,
  NextJs,
  HTML5,
  CSS3,
} from '@/components/Tech'
import { cn } from '@/lib/utils'

export default function Skill() {
  return (
    <section
      className={cn(
        'pointer-events-none flex min-h-screen items-center justify-center bg-primary text-zinc-800 transition duration-1000 ease-in-out lg:h-min lg:py-32',
        'hover:bg-black hover:text-primary'
      )}
    >
      <div className='group container flex flex-col gap-14 uppercase'>
        <div className='flex w-full flex-col items-center gap-4 text-3xl font-semibold leading-normal lg:flex-row lg:justify-between lg:text-4xl'>
          <h2>Skills</h2>
          <h4 className='hidden animate-torch select-none whitespace-nowrap bg-gradient-to-r from-primary via-black to-primary bg-[length:50%_100%] bg-clip-text bg-no-repeat font-bold  text-transparent group-hover:via-primary lg:block lg:text-4xl'>
            hover the icon
          </h4>
        </div>
        <div className='[&>*]:pathstyle grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-y-10 [&>*]:mx-auto [&>*]:w-16 [&>*]:py-4'>
          <HTML5 className='group-hover:text-[#E34F26]' />
          <CSS3 className='group-hover:text-[#1572B6]' />
          <JavaScript className='group-hover:text-[#F7DF1E]' />
          <TypeScript className='group-hover:text-[#3178C6]' />
          <Bootstrap className='group-hover:text-[#7952B3]' />
          <TailwindCSS className='group-hover:text-[#06B6D4]' />
          <ReactJs className='group-hover:text-[#61DAFB]' />
          <NextJs className='group-hover:text-white' />
        </div>
        <h4 className='animate-torch select-none whitespace-nowrap bg-gradient-to-r from-primary via-black to-primary bg-[length:50%_100%] bg-clip-text bg-no-repeat text-center text-2xl font-bold  text-transparent group-hover:via-primary lg:hidden'>
          tap the icon
        </h4>
      </div>
    </section>
  )
}
