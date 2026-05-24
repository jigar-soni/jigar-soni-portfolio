import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Now',
  description: "What Jigar Soni is focused on right now.",
}

export default function NowPage() {
  return (
    <section className="px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span> About
        </Link>

        <div className="mt-10">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Now</p>
          <h1 className="mt-4 font-display italic text-[2.4rem] font-normal leading-tight tracking-tight text-ink sm:text-[2.8rem]">
            What I'm up to.
          </h1>
          <p className="mt-4 text-[13px] text-muted/60">Last updated May 2026 · Gujarat, India</p>
        </div>

        <div className="mt-14 space-y-12">
          <div>
            <p className="text-[11.5px] uppercase tracking-label text-muted">Work</p>
            <p className="mt-5 text-[16px] leading-loose text-ink/80">
              At Conversion Lab, managing paid media across a handful of D2C brands. A couple of accounts are in a good place right now — the work is less about fixing and more about pushing. Figuring out how far you can scale without breaking what is already working is a more interesting problem than it sounds.
            </p>
          </div>

          <div className="border-t border-subtle pt-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Reading</p>
            <p className="mt-5 text-[16px] leading-loose text-ink/80">
              <span className="font-medium text-ink">Click Here</span> — still making my way through it.
            </p>
          </div>

          <div className="border-t border-subtle pt-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Planning</p>
            <p className="mt-5 text-[16px] leading-loose text-ink/80">
              A trek to Madhyamaheshwar in September with friends. Looking forward to it.
            </p>
          </div>

          <div className="border-t border-subtle pt-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Health</p>
            <p className="mt-5 text-[16px] leading-loose text-ink/80">
              Trying to be consistent at the gym. More cardio than I would like, but working on it.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-subtle pt-8">
          <p className="text-[13px] leading-relaxed text-muted">
            This is a{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4"
            >
              /now page
            </a>
            . Updated occasionally when things change.
          </p>
        </div>
      </div>
    </section>
  )
}
