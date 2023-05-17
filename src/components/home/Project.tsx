import ProjectTemplate from '@/components/templates/ProjectTemplate'
import Button from '@/components/atoms/Button'
import Link from 'next/link'
import RightArrow from '@/components/icons/RightArrow'

export default function Projects() {
  return (
    <section className='flex min-h-screen items-center justify-center bg-black py-16 lg:h-min lg:py-32'>
      <div className='container flex flex-col gap-14'>
        <h2 className='text-center text-3xl font-semibold uppercase text-primary lg:text-start lg:text-4xl'>
          Projects
        </h2>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          <ProjectTemplate
            title='space tourism'
            tech={['React', 'Vite', 'TailwindCSS']}
            live='https://nau-space-tourism.vercel.app/'
            image={'/space.png'}
            alt='Space Tourism'
          />
          <ProjectTemplate
            title='ERC site'
            tech={['React', 'Next', 'TailwindCSS']}
            live='https://erc-site.vercel.app/'
            image={'/erc-site.png'}
            alt='ERC site'
          />
        </div>
        <Link href='/projects' className='w-fit self-center lg:self-start'>
          <Button>
            More Projects
            <RightArrow className='w-4' />
          </Button>
        </Link>
      </div>
    </section>
  )
}
