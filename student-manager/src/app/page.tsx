import { Inter } from 'next/font/google'
import React from 'react'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
    </>
     
  )
}
