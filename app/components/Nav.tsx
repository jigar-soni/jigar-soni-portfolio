'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/resume', label: 'Resume' },
  { href: '/notes', label: 'Notes' },
  { href: '/favorites', label: 'Finds' },
  { href: '/d2c-unit-economics-calculator', label: 'Tools' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream/95 backdrop-blur-md border-b border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-[60px] items-center justify-between">
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-tight text-ink transition-opacity hover:opacity-70"
          >
            Jigar Soni
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[13.5px] transition-colors duration-150 ${
                  pathname === href
                    ? 'text-ink font-medium'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:jigarsoni1310@gmail.com"
              className="ml-2 rounded-full bg-ink px-4 py-2 text-[12.5px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Get in touch
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block h-px w-5 bg-ink transition-all duration-200 origin-center ${
                open ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-all duration-200 ${
                open ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-all duration-200 origin-center ${
                open ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-80 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-1 border-t border-subtle pt-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-2.5 text-[15px] transition-colors ${
                  pathname === href ? 'text-ink font-medium' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:jigarsoni1310@gmail.com"
              className="mt-4 rounded-full bg-ink py-3 text-center text-[13.5px] font-medium text-white"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
