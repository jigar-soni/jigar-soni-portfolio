import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Jigar Soni — performance marketer and D2C growth specialist from Gujarat, India.',
}

const interests = [
  {
    name: 'Fitness',
    note: 'A consistent practice that sharpens focus and discipline outside of work.',
  },
  {
    name: 'Chess',
    note: 'Strategy, patience, and pattern recognition — the thinking frameworks transfer directly to growth work.',
  },
  {
    name: 'Traditional Craftsmanship',
    note: 'A deep appreciation for Indian handloom, textile craft, and the slow work behind premium products.',
  },
  {
    name: 'Business Strategy',
    note: 'Reading widely on how companies are built, scaled, and sustained over long periods.',
  },
  {
    name: 'E-commerce',
    note: 'The structural mechanics of how brands are built and grown online — still endlessly interesting.',
  },
]

const keyNumbers = [
  { value: '₹70L+', label: 'Monthly ad spend managed' },
  { value: '7.6x', label: 'ROAS achieved on Google Ads' },
  { value: '60%', label: 'CPL reduction at Beforest' },
  { value: '8+', label: 'Years in digital marketing' },
]

const currently = [
  { label: 'Reading', value: 'The Mom Test — Rob Fitzpatrick' },
  { label: 'Thinking about', value: 'How D2C brands build real pricing power' },
  { label: 'Playing', value: 'Chess (still losing to 1500s, still learning)' },
  { label: 'Looking for', value: 'Head of Growth or similar role at a D2C brand' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-14 pt-32 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-20">
            <div>
              <p className="text-[11.5px] uppercase tracking-label text-muted">About</p>
              <h1 className="mt-5 font-display italic text-[2.6rem] font-normal leading-tight tracking-tight text-ink sm:text-[3rem]">
                I'm Jigar Soni, a performance marketer from Gujarat.
              </h1>
              <div className="mt-8 space-y-5 text-[16px] leading-loose text-muted">
                <p>
                  I've spent 8 years in digital marketing across agencies, marketplaces, and in-house growth work. My background covers D2C e-commerce, FMCG, real estate lead generation, Amazon, and SME work across India and the US — not just one channel or one category.
                </p>
                <p>
                  Currently at Conversion Lab as Performance Marketing Manager, handling ₹70L+ in monthly ad spend across Meta and Google for multiple e-commerce clients. My day-to-day is campaign management and optimisation, but I've always been involved in the broader decisions — budget allocation, retention, creative direction, and whether the unit economics actually make sense.
                </p>
                <p>
                  I care about the business behind the campaigns. There's a meaningful difference between a marketer who manages ad accounts and one who understands why a brand grows or plateaus — I've tried to be the second kind.
                </p>
                <p>
                  My next step is a Head of Growth type role, where the scope goes beyond a single channel and into strategy, retention, and cross-functional growth.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[28px] border border-subtle bg-white p-7 shadow-soft">
                <div className="flex h-52 items-center justify-center rounded-[20px] bg-subtle/30">
                  <p className="text-[11.5px] uppercase tracking-label text-muted/60">Portrait</p>
                </div>
                <p className="mt-6 text-[15px] font-semibold text-ink">Jigar Soni</p>
                <p className="mt-1 text-[13px] text-muted">Performance Marketer · Gujarat, India</p>
                <div className="mt-5 flex gap-3">
                  <a
                    href="mailto:jigarsoni1310@gmail.com"
                    className="rounded-full bg-ink px-4 py-2 text-[12.5px] font-medium text-white transition-opacity hover:opacity-70"
                  >
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jigar-soni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-subtle px-4 py-2 text-[12.5px] font-medium text-ink transition hover:border-muted/60"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] border border-subtle bg-white p-6 shadow-soft">
                <p className="text-[11.5px] uppercase tracking-label text-muted">Key numbers</p>
                <div className="mt-5 divide-y divide-subtle">
                  {keyNumbers.map((stat) => (
                    <div
                      key={stat.value}
                      className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                    >
                      <p className="text-[13px] text-muted">{stat.label}</p>
                      <p className="text-[15px] font-semibold text-ink">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="border-t border-subtle bg-white/50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Currently</p>
          <h2 className="mt-5 font-display italic text-[1.8rem] font-normal tracking-tight text-ink">
            Right now.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {currently.map((item) => (
              <div key={item.label} className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
                <p className="text-[11px] uppercase tracking-label text-muted">{item.label}</p>
                <p className="mt-3 text-[14px] font-medium leading-snug text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="border-t border-subtle px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Interests</p>
          <h2 className="mt-5 font-display italic text-[1.8rem] font-normal tracking-tight text-ink">
            Outside of work.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((item) => (
              <div key={item.name} className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
                <p className="text-[15px] font-semibold text-ink">{item.name}</p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direction */}
      <section className="border-t border-subtle bg-white/50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-14">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Looking ahead</p>
            <h2 className="mt-4 max-w-lg font-display italic text-[1.6rem] font-normal tracking-tight text-ink">
              What I'm looking for.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-loose text-muted">
              I want to move into a Head of Growth or senior growth role — where the job is to lead acquisition, retention, and strategy together, not just manage one channel.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-loose text-muted">
              The kind of company I want to work with takes growth seriously, has a product worth caring about, and is at a stage where the right hire makes a real difference. Preferably D2C or e-commerce, but I'm open to conversations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:jigarsoni1310@gmail.com"
                className="rounded-full bg-ink px-6 py-3.5 text-center text-[13.5px] font-medium text-white transition-opacity hover:opacity-70"
              >
                Get in touch
              </a>
              <Link
                href="/work"
                className="rounded-full border border-subtle px-6 py-3.5 text-center text-[13.5px] font-medium text-ink transition hover:border-muted/60"
              >
                See my work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="border-t border-subtle px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-[11.5px] uppercase tracking-label text-muted">Education</p>
              <div className="mt-6 rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
                <p className="text-[15px] font-semibold text-ink">Bachelor of Commerce</p>
                <p className="mt-1 text-[13.5px] text-muted">J B Thacker Commerce College, Bhuj</p>
                <p className="mt-1 text-[12px] text-muted/70">2011 – 2014</p>
              </div>
            </div>

            <div>
              <p className="text-[11.5px] uppercase tracking-label text-muted">Certifications</p>
              <ul className="mt-6 space-y-3">
                {[
                  { name: 'Google Analytics Certification', year: '2023' },
                  { name: 'Foundations of UX Design', year: '2021' },
                  { name: 'Responsive Web Design', year: '2021' },
                  { name: 'Google Ads Certification', year: '2020' },
                  { name: 'Fundamentals of Digital Marketing', year: '2020' },
                ].map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between rounded-[16px] border border-subtle bg-white px-5 py-3.5 shadow-soft"
                  >
                    <p className="text-[13.5px] text-ink">{cert.name}</p>
                    <p className="text-[12px] text-muted/70">{cert.year}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
