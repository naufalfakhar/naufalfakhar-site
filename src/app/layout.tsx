import Header from '@/components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Ahmad Naufal Alfakhar',
  description: 'Ahmad Naufal Alfakhar personal portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
