'use client'

import { useState } from 'react'
import Link from 'next/link'
import TiltCard from './TiltCard'

export type CaseStudy = {
  id: string
  tag: string
  category: string
  activeClient?: boolean
  title: string
  summary: string
  details: string[]
  note: string
  caseStudyLink?: string
}

export default function WorkCaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = useState<string | null>(null)

  const categories = Array.from(new Set(caseStudies.map((c) => c.category)))
  const filtered = active ? caseStudies.filter((c) => c.category === active) : caseStudies

  return (
    <section className="border-t border-subtle px-5 py-4 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 py-10">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition ${
              !active
                ? 'bg-ink text-white'
                : 'border border-subtle bg-white text-muted hover:border-muted/60'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition ${
                active === cat
                  ? 'bg-ink text-white'
                  : 'border border-subtle bg-white text-muted hover:border-muted/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case studies */}
        {filtered.map((item, index) => (
          <article
            key={item.id}
            className="grid gap-6 border-b border-subtle py-14 last:border-none lg:grid-cols-[80px_1fr]"
          >
            <div className="hidden pt-1 lg:block">
              <span className="select-none font-display italic text-[3.5rem] font-normal leading-none text-subtle">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-subtle/60 bg-subtle/20 px-3 py-1 text-[11px] font-medium text-muted/80">
                  {item.category}
                </span>
                {item.activeClient && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-warm/40 bg-warm/10 px-3 py-1 text-[11px] font-medium text-warm">
                    <span className="h-1.5 w-1.5 rounded-full bg-warm" />
                    Active engagement
                  </span>
                )}
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-label text-muted">{item.tag}</p>
              <h2 className="mt-3 text-[1.3rem] font-semibold leading-snug text-ink sm:text-[1.4rem]">
                {item.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[14.5px] leading-loose text-muted">{item.summary}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {item.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warm" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-full border border-subtle/60 bg-subtle/20 px-4 py-2">
                  <p className="text-[12px] text-muted/80">{item.note}</p>
                </div>
                {item.caseStudyLink && (
                  <Link
                    href={item.caseStudyLink}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-white px-4 py-2 text-[12px] font-medium text-ink shadow-soft transition hover:border-ink/50"
                  >
                    Full case study <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
