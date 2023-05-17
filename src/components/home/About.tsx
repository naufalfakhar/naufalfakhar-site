import Link from 'next/link'
import Button from '@/components/atoms/Button'
import RightArrow from '@/components/icons/RightArrow'

export default function About() {
  return (
    <section className='flex min-h-screen items-center justify-center bg-black lg:h-min lg:py-32'>
      <div className='container flex flex-col gap-14 font-semibold'>
        <h2 className='text-center text-3xl uppercase text-primary lg:text-start lg:text-4xl'>
          About me
        </h2>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl text-white lg:text-6xl lg:leading-normal'>
            Hello! I&apos;m <span className='text-primary'>Naufal</span>
          </h1>
          <p className='text-2xl leading-normal text-zinc-400 lg:text-4xl lg:leading-loose'>
            I am an electrical engineer majoring in industrial electronics, I
            really like to code. I&apos;m currently learning
          </p>
        </div>
        <Link href='/about' className='max-w-fit self-center lg:self-start'>
          <Button>
            More about me
            <RightArrow className='w-4' />
          </Button>
        </Link>
      </div>
    </section>
  )
}
