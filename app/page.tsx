'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notes } from './data/notes'
import TiltCard from './components/TiltCard'

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const stats = [
  { value: '₹70L+', label: 'Monthly ad spend' },
  { value: '5+', label: 'Brand categories' },
  { value: '8+', label: 'Years experience' },
]

const capabilities = [
  'Meta Ads',
  'Google Ads',
  'GA4 & GTM',
  'Meta CAPI',
  'Amazon Ads',
  'Retention Strategy',
  'Lead Generation',
  'CRO & Analytics',
  'Media Planning',
  'Budget Allocation',
]

const featuredNotes = notes.slice(0, 3)

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
  })
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-20 pt-36 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
            <div>
              <motion.p
                variants={fade}
                initial="hidden"
                animate="show"
                custom={0}
                className="text-[11.5px] uppercase tracking-label text-muted"
              >
                Growth Marketer · D2C Specialist
              </motion.p>
              <motion.h1
                variants={fade}
                initial="hidden"
                animate="show"
                custom={1}
                className="mt-5 font-display italic text-[2.8rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[3.4rem]"
              >
                8 years in D2C paid media. I run Meta Ads, Google Ads, and growth strategy for apparel, skincare, and lifestyle brands.
              </motion.h1>
              <motion.p
                variants={fade}
                initial="hidden"
                animate="show"
                custom={2}
                className="mt-6 max-w-lg text-[16px] leading-loose text-muted"
              >
                Currently managing ₹70L+ in monthly ad spend across Meta and Google at Conversion Lab. My work spans media buying, retention, and the business fundamentals behind both.
              </motion.p>
              <motion.div
                variants={fade}
                initial="hidden"
                animate="show"
                custom={3}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/work"
                  className="rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-white transition-opacity hover:opacity-70"
                >
                  View work
                </Link>
                <a
                  href="mailto:jigarsoni1310@gmail.com"
                  className="rounded-full border border-subtle bg-white px-5 py-2.5 text-[13.5px] font-medium text-ink shadow-soft transition hover:border-muted/60"
                >
                  Get in touch
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-[28px] border border-subtle bg-white p-7 shadow-card"
            >
              <div className="flex h-52 items-center justify-center rounded-[20px] bg-subtle/30">
                <p className="text-[11.5px] uppercase tracking-label text-muted/60">Portrait</p>
              </div>
              <div className="mt-6 grid grid-cols-3 divide-x divide-subtle overflow-hidden rounded-2xl border border-subtle">
                {stats.map((stat) => (
                  <div key={stat.value} className="bg-white px-4 py-4">
                    <p className="text-[1.3rem] font-semibold text-ink">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-snug text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities marquee */}
      <div className="overflow-hidden border-y border-subtle bg-white/50 py-3.5 select-none">
        <div className="flex w-max animate-marquee">
          {[...capabilities, ...capabilities].map((c, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-4 pr-10 text-[12.5px] whitespace-nowrap text-muted"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-warm/80" />
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* About teaser */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <p className="text-[11.5px] uppercase tracking-label text-muted">About</p>
              <h2 className="mt-5 font-display italic text-[1.9rem] font-normal leading-snug tracking-tight text-ink">
                8 years in D2C performance marketing.
              </h2>
              <p className="mt-5 text-[15px] leading-loose text-muted">
                I'm from Gujarat and have spent my career working in paid media for D2C brands across apparel, skincare, wellness and lifestyle. It started at an agency, moved through freelance, and now I manage a portfolio of brands at scale.
              </p>
              <p className="mt-4 text-[15px] leading-loose text-muted">
                I care about the business behind the campaigns — margins, retention, and whether the spend is actually working — not just the dashboard numbers.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink underline-offset-4 hover:underline"
              >
                More about me <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="rounded-[24px] border border-subtle bg-white p-7 shadow-soft">
              <p className="text-[11.5px] uppercase tracking-label text-muted">What I work on</p>
              <ul className="mt-6 space-y-4">
                {[
                  'Meta Ads strategy and campaign management',
                  'Google Ads for D2C brands',
                  'Customer acquisition at scale',
                  'Retention and lifecycle marketing',
                  'Growth planning for e-commerce brands',
                  'Media planning and budget allocation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] leading-snug text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-subtle bg-white/50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11.5px] uppercase tracking-label text-muted">Work</p>
              <h2 className="mt-4 font-display italic text-[1.9rem] font-normal tracking-tight text-ink">
                Some of what I've worked on.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink sm:flex"
            >
              All work <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-10 space-y-5">
            {/* Featured case study — full width */}
            <TiltCard className="group rounded-[24px] border border-subtle bg-white shadow-soft transition-shadow hover:shadow-card">
              <Link href="/work/skincare-national-expansion" className="block p-7 sm:p-9">
                <p className="text-[11px] uppercase tracking-label text-muted">Skincare · Google Ads · Geographic Expansion</p>
                <h3 className="mt-4 max-w-2xl text-[1.2rem] font-semibold leading-snug text-ink sm:text-[1.35rem]">
                  +39% non-TN revenue growth for a skincare brand through Google Ads restructuring
                </h3>
                <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-muted">
                  A TN-based skincare brand with strong home-market performance but stalled national growth. Rebuilt the account with state-level segmentation — Karnataka delivered 8.05x ROAS, Bihar went from 0.67x to 3.44x, UP from 1.58x to 3.52x. Non-TN revenue hit ₹2.77 crore.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  {['+39% non-TN revenue', '8.05x ROAS (Karnataka)', '₹2.77Cr non-TN revenue'].map((stat) => (
                    <span key={stat} className="rounded-full border border-subtle/60 bg-subtle/20 px-3.5 py-1.5 text-[12px] text-muted/80">
                      {stat}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[12.5px] font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  Read case study →
                </p>
              </Link>
            </TiltCard>

            {/* Secondary cards */}
            <div className="grid gap-5 lg:grid-cols-2">
              {[
                {
                  tag: 'Ethnicwear · Customer Acquisition',
                  title: 'Scaling an ethnicwear brand through creative strategy',
                  desc: 'Balanced catalogue growth with creative refresh cycles, scaled spend while maintaining efficiency, and aligned campaigns with category-specific buying rhythms.',
                },
                {
                  tag: 'Multi-Brand · Paid Media Operations',
                  title: '₹60 lakh monthly portfolio across D2C categories',
                  desc: 'Managed budgets, performance cadence, and account-level optimization frameworks across apparel, skincare, and lifestyle brands.',
                },
              ].map((item) => (
                <TiltCard
                  key={item.title}
                  className="group rounded-[24px] border border-subtle bg-white shadow-soft transition-shadow hover:shadow-card"
                >
                  <Link href="/work" className="block p-7">
                    <p className="text-[11px] uppercase tracking-label text-muted">{item.tag}</p>
                    <h3 className="mt-4 text-[1.05rem] font-semibold leading-snug text-ink">{item.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{item.desc}</p>
                    <p className="mt-5 text-[12.5px] font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100">
                      Read more →
                    </p>
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/work" className="text-[13px] text-muted hover:text-ink">
              See all work →
            </Link>
          </div>
        </div>
      </section>

      {/* Recent notes */}
      <section className="border-t border-subtle px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11.5px] uppercase tracking-label text-muted">Notes</p>
              <h2 className="mt-4 font-display italic text-[1.9rem] font-normal tracking-tight text-ink">
                What I think about.
              </h2>
            </div>
            <Link
              href="/notes"
              className="hidden items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink sm:flex"
            >
              All notes <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featuredNotes.map((note) => (
              <TiltCard
                key={note.slug}
                className="group rounded-[20px] border border-subtle bg-white shadow-soft transition-shadow hover:shadow-card"
              >
                <Link href={`/notes/${note.slug}`} className="block p-6">
                  <p className="text-[11px] uppercase tracking-label text-muted">{note.category}</p>
                  <h3 className="mt-3 text-[15px] font-semibold leading-snug text-ink">{note.title}</h3>
                  <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-muted">{note.excerpt}</p>
                  <p className="mt-4 text-[11.5px] text-muted/60">{formatDate(note.date)}</p>
                </Link>
              </TiltCard>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/notes" className="text-[13px] text-muted hover:text-ink">
              Read all notes →
            </Link>
          </div>
        </div>
      </section>

      {/* Finds teaser */}
      <section className="border-t border-subtle bg-white/50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-lg">
              <p className="text-[11.5px] uppercase tracking-label text-muted">Finds</p>
              <h2 className="mt-4 font-display italic text-[1.9rem] font-normal tracking-tight text-ink">
                Things I keep coming back to.
              </h2>
              <p className="mt-4 text-[15px] leading-loose text-muted">
                Websites, writing, videos, and tools I've found genuinely useful or interesting. Updated when something earns a permanent spot.
              </p>
            </div>
            <Link
              href="/favorites"
              className="self-start shrink-0 rounded-full border border-subtle bg-white px-6 py-3 text-[13.5px] font-medium text-ink shadow-soft transition hover:border-muted/60 sm:self-auto"
            >
              Browse finds →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-subtle px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[11.5px] uppercase tracking-label text-muted">Contact</p>
              <h2 className="mt-4 font-display italic text-[2.4rem] font-normal tracking-tight text-ink sm:text-[2.8rem]">
                Open to the right role.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-loose text-muted">
                If you're looking for a performance marketer with hands-on D2C experience and the business thinking to match, I'd like to hear about the opportunity.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="mailto:jigarsoni1310@gmail.com"
                className="rounded-full bg-ink px-6 py-3.5 text-center text-[13.5px] font-medium text-white transition-opacity hover:opacity-70"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/jigarsoni"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-subtle bg-white px-6 py-3.5 text-center text-[13.5px] font-medium text-ink shadow-soft transition hover:border-muted/60"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
