import { cn } from '@/lib/utils'
import React from 'react'
import Education from '@/components/icons/Education'
import AboutTemplate from '@/components/templates/AboutTemplate'

export default function EducationTemplate() {
  return (
    <ul
      className={cn(
        'group relative flex flex-col items-center justify-center gap-20 pt-8 font-semibold text-white',
        'transition duration-300 after:absolute after:inset-y-2.5 after:left-1/2 after:top-10 after:-z-0 after:w-0.5 after:-translate-x-1/2 after:bg-gradient-to-t after:from-black after:to-primary after:to-25% lg:after:inset-y-8 lg:after:to-white lg:hover:after:to-primary'
      )}
    >
      <li className='relative z-10 flex flex-col items-center justify-center'>
        <div className='absolute bottom-full left-1/2 w-max -translate-x-1/2 pb-4 uppercase'>
          education
        </div>
        <div className='group flex h-14 w-14 items-center justify-center rounded-full bg-primary fill-current transition duration-300 ease-in-out lg:h-16 lg:w-16 lg:bg-zinc-700 lg:text-zinc-500 lg:group-hover:bg-primary'>
          <Education className='w-1/2 text-zinc-700 transition duration-300 lg:text-inherit lg:group-hover:text-zinc-700' />
        </div>
      </li>
      <li className='pointer-events-none relative z-10 flex h-3 w-3 flex-col items-center justify-center rounded-full bg-zinc-400 transition duration-300 group-hover:bg-primary lg:h-6 lg:w-6'>
        <AboutTemplate
          title='PLN Institute of Technology'
          period={['2018', '2022']}
        />
      </li>
    </ul>
  )
}
