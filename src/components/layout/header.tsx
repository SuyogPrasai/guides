import Link from 'next/link'

import Image from 'next/image'
import { Nav } from './navigation'


export default function Navbar() {


  return (
    <header className="bg-transparent">
      <div className="container mx-auto flex h-22 items-center justify-around px-4 lg:px-12 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-40 w-40 mt-3">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

          <Nav />

        <div >

        </div>
      </div>
    </header>
  )
}
