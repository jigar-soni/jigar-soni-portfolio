import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-subtle px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[15px] font-semibold text-ink">Jigar Soni</p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted">
              Performance marketer helping D2C brands scale through paid media and growth strategy.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="mailto:jigarsoni1310@gmail.com"
                className="text-[13px] text-muted transition-colors hover:text-ink"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/jigar-soni/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-muted transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-label text-muted/60">Pages</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/work" className="text-[13px] text-muted transition-colors hover:text-ink">Work</Link>
              <Link href="/resume" className="text-[13px] text-muted transition-colors hover:text-ink">Resume</Link>
              <Link href="/notes" className="text-[13px] text-muted transition-colors hover:text-ink">Notes</Link>
              <Link href="/favorites" className="text-[13px] text-muted transition-colors hover:text-ink">Finds</Link>
              <Link href="/about" className="text-[13px] text-muted transition-colors hover:text-ink">About</Link>
              <Link href="/now" className="text-[13px] text-muted transition-colors hover:text-ink">Now</Link>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-subtle/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-muted/60">© {year} Jigar Soni. All rights reserved.</p>
          <p className="text-[11.5px] text-muted/60">Gujarat, India</p>
        </div>
      </div>
    </footer>
  )
}
