import Footer from '@/components/Footer'
import ProjectTemplate from '@/components/templates/ProjectTemplate'

export default function Page() {
  return (
    <section className='relative min-h-screen overflow-auto bg-black py-40 text-white'>
      <div className='container flex flex-col gap-14'>
        <h2 className='text-center text-3xl font-semibold uppercase text-primary lg:text-4xl'>
          My Projects
        </h2>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          <ProjectTemplate
            title='space tourism'
            tech={['React', 'Vite', 'TailwindCSS']}
            live='https://nau-space-tourism.vercel.app/'
            repos='https://github.com/naufalfakhar/nau-space-tourism'
            image={'/space.png'}
            alt='Space Tourism'
          />
          <ProjectTemplate
            title='ERC site'
            tech={['React', 'Next', 'TailwindCSS']}
            live='https://erc-site.vercel.app/'
            repos='https://github.com/naufalfakhar/erc-site'
            image={'/erc-site.png'}
            alt='ERC site'
          />
        </div>
      </div>
      <Footer />
    </section>
  )
}
