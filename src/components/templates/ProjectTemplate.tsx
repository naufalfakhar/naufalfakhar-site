import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import Live from '@/components/icons/Live'
import Github from '@/components/icons/Github'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  tech: string[]
  live: string
  repos?: string
  image: string | StaticImageData
  alt: string
}

export default function ProjectTemplate({
  title,
  tech,
  live,
  repos,
  image,
  alt,
}: Props) {
  return (
    <div className='group relative z-0 aspect-[3/4] w-full overflow-hidden rounded-2xl lg:aspect-video'>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes='(min-width: 1024px) 50vw, 100vw'
        className='!relative object-cover transition duration-1000 group-hover:scale-110'
      />
      <div className='absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/80 text-white opacity-0 transition duration-1000 group-hover:opacity-100 lg:gap-5'>
        <h3 className='text-xl font-bold uppercase lg:text-2xl'>{title}</h3>
        <h4 className='lg:text-xl'>{tech.join(' | ')}</h4>
        <div className='flex flex-row items-center gap-4'>
          <Link
            href={live}
            target='_blank'
            className={cn(
              'flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm capitalize text-black transition-colors duration-300',
              'hover:bg-primary',
              'lg:px-6 lg:py-4 lg:text-base'
            )}
          >
            live preview
            <Live className='w-4' />
          </Link>
          {repos && (
            <Link
              href={repos}
              target='_blank'
              className={cn(
                'flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm capitalize text-black transition-colors duration-300',
                'hover:bg-primary',
                'lg:px-6 lg:py-4 lg:text-base'
              )}
            >
              view source
              <Github className='w-4' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
