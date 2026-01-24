'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Contacts', href: '/contacts' },
]

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            ✳
          </div>
          <span className="text-base tracking-tight">shadcn/studio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex">
          <Button size="sm" className="px-6">
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72">
            <div className="flex h-full flex-col">
              {/* Mobile Header */}
              <div className="mb-8 flex items-center gap-2 font-semibold">
                <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  ✳
                </div>
                shadcn/studio
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Action */}
              <div className="mt-auto pt-6">
                <Button className="w-full">Login</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
