'use client'
import * as React from 'react'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Button from '@/components/atoms/Button'
import MeteorRow from '@/components/background/MeteorRow'
import MeteorRowMobile from '@/components/background/MeteorRowMobile'
import MeteorCol from '@/components/background/MeteorCol'
import MeteorColMobile from '@/components/background/MeteorColMobile'
import RightArrow from '@/components/icons/RightArrow'
import Docs from '@/components/icons/Docs'

export default function Hero() {
  const [random, setRandom] = React.useState(0)
  const [randomMobile, setRandomMobile] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRandom(Math.floor(Math.random() * 12) + 1)
      setRandomMobile(Math.floor(Math.random() * 6) + 1)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='relative z-0 flex h-screen items-center justify-center overflow-hidden bg-black'>
      <MeteorRow random={random} />
      <MeteorRowMobile random={randomMobile} />
      <Content />
      <MeteorCol random={random} />
      <MeteorColMobile random={randomMobile} />
    </div>
  )
}

function Content() {
  const [text] = useTypewriter({
    words: ['frontend web dev.', 'also an', 'electrical engineer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 75,
    delaySpeed: 1500,
  })

  return (
    <section className='z-10 flex h-full items-center justify-center bg-transparent'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='flex flex-col items-center justify-center text-6xl font-bold capitalize text-white lg:text-8xl'>
          ahmad
          <span className='text-primary'>naufal</span>
          alfakhar
        </h1>
        <div className='flex w-full items-center justify-between'>
          <div className='h-[2px] w-1/12 bg-zinc-400'></div>
          <p className='w-10/12 text-xl text-zinc-400 lg:text-4xl'>
            {text}
            <Cursor cursorColor='#A9F927' />
          </p>
        </div>
        <div className='flex w-full items-center justify-around'>
          <Link href='/contact'>
            <Button variant='primary'>
              Contact me
              <RightArrow className='w-4' />
            </Button>
          </Link>
          <Link
            href='https://docs.google.com/document/d/1dEK0z7cC4qUkmj9a3vU8WJUILAKwgs4Z_gThOh12Z2Q/edit?usp=sharing'
            target='_blank'
          >
            <Button variant='secondary'>
              Resume
              <Docs className='w-4' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
