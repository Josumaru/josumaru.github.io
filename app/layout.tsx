"use client"
import { useEffect } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import AOS from "aos"
import "aos/dist/aos.css"
const inter = Open_Sans({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Joko Supriyanto',
//   description: 'Portfolio Websites',
// }

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
