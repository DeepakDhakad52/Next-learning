import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Navbar />
        {children}</body>
    </html>
  )
}

const Navbar = () => {
  const li_style = 'mx-4';
  return (
    <nav >
      <ul className='flex p-4 justify-center shadow' >
        <li className={li_style}><Link href={'/'}>Home</Link></li>
        <li className={li_style}><Link href={'/about'}>About</Link></li>
        <li className={li_style}><Link href={'/contact'}>Contact</Link></li>       
      </ul>
    </nav>
  )
}