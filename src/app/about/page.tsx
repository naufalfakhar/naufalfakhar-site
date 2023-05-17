import Footer from '@/components/Footer'
import EducationTemplate from '@/components/templates/EducationTemplate'
import ExperienceTemplate from '@/components/templates/ExperienceTemplate'

export default function Page() {
  return (
    <section className='relative min-h-screen overflow-auto bg-black pb-48 pt-40 text-white'>
      <div className='container flex flex-col items-center gap-20'>
        <h2 className='text-center text-3xl font-semibold uppercase text-primary lg:text-4xl'>
          About Me
        </h2>
        <ExperienceTemplate />
        <EducationTemplate />
      </div>
      <Footer />
    </section>
  )
}
