import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-white text-xl font-bold">
           StudentManager
          </Link>
        </div>
        <div>
          <Link href="/login" className="text-white mr-4">
            Login
          </Link>
          <Link href="/signup" className="text-white">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  )
}
