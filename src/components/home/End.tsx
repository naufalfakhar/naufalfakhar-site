import Link from 'next/link'
import React from 'react'
import Button from '@/components/atoms/Button'
import MeteorRow from '@/components/background/MeteorRow'
import MeteorRowMobile from '@/components/background/MeteorRowMobile'
import MeteorCol from '@/components/background/MeteorCol'
import MeteorColMobile from '@/components/background/MeteorColMobile'
import Footer from '@/components/Footer'
import RightArrow from '@/components/icons/RightArrow'

export default function End() {
  const [random, setRandom] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(
      () => setRandom(Math.floor(Math.random() * 12) + 1),
      3000
    )

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='relative z-0 flex h-screen items-center justify-center overflow-hidden bg-black uppercase'>
      <MeteorRow random={random} />
      <MeteorRowMobile random={random} />
      <Content />
      <MeteorCol random={random} />
      <MeteorColMobile random={random} />
    </div>
  )
}

function Content() {
  return (
    <section className='relative flex h-full items-center justify-center bg-transparent'>
      <div className='container flex max-w-5xl flex-col items-center gap-16'>
        <h2 className='flex flex-col items-center text-center text-5xl font-semibold text-white lg:text-8xl'>
          if you interested <span>to work with me</span>
        </h2>
        <Link href='/contact'>
          <Button className='buttonA'>
            Let&apos;s talk about it
            <RightArrow className='w-4' />
          </Button>
        </Link>
      </div>
      <Footer />
    </section>
  )
}
