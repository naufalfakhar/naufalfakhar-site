import Footer from '@/components/Footer'
import Button from '@/components/atoms/Button'

export default function Contact() {
  return (
    <section className='relative flex h-screen min-h-screen items-center justify-center overflow-auto bg-black text-white '>
      <div className='container flex flex-col items-center gap-10 lg:gap-20'>
        <h2 className='text-center text-3xl font-semibold uppercase text-primary lg:text-4xl'>
          Contact Me
        </h2>
        <form
          target='_blank'
          action='https://formsubmit.co/direct.anaufal@gmail.com'
          method='POST'
          className='flex flex-col gap-4'
        >
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                className='border-2 border-zinc-700 bg-zinc-700 px-4 py-2 focus:border-primary focus:outline-none'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                className='border-2 border-zinc-700 bg-zinc-700 px-4 py-2 focus:border-primary focus:outline-none'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              cols={30}
              rows={10}
              className='border-2 border-zinc-700 bg-zinc-700 px-4 py-2 focus:border-primary focus:outline-none'
            />
          </div>
          <Button variant='secondary' type='submit'>
            Send
          </Button>
        </form>
      </div>
      <Footer />
    </section>
  )
}
