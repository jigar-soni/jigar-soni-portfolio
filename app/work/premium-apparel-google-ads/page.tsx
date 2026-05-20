import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Apparel Brand — Google Ads Scaling',
  description:
    'How fixing a conversion tracking error and rebuilding account structure grew Google Ads revenue 71% year-on-year for a premium women\'s apparel brand.',
}

const timeline = [
  {
    phase: 'Audit',
    heading: 'The numbers looked good. Too good.',
    body: 'Inherited an account running 8–10x ROAS. No obvious red flag — but the conversion data did not add up. Ran a full audit of the tracking setup before touching any campaigns.',
  },
  {
    phase: 'Fix',
    heading: 'Found the double-count. Fixed it.',
    body: 'The conversion setup was recording one purchase twice. Every ROAS figure in the account was inflated. Fixed the tracking in November 2023. Reported ROAS dropped from 10x to 3x immediately — that was the first accurate number the account had produced.',
  },
  {
    phase: 'Build',
    heading: 'Full-funnel structure from the ground up.',
    body: 'Built three campaign layers: a BAU evergreen campaign for consistent high-intent demand, collection-based campaigns timed to product launches, and top-of-funnel visually rich campaigns to bring in net new audiences. Each layer had a distinct job.',
  },
  {
    phase: 'Scale',
    heading: 'Held the structure through the low point.',
    body: 'January 2024 was the worst reported month — 2.11x ROAS as the algorithm recalibrated to accurate conversion data. We held the structure rather than reacting. By April, ROAS had recovered to 5x. Year 2 averaged 4.67x on 40% higher spend.',
  },
]

const milestones = [
  { month: 'Oct 2023', roas: '10.44x', note: 'Pre-fix — inflated', highlight: false },
  { month: 'Nov 2023', roas: '3.32x', note: 'First accurate reading', highlight: false },
  { month: 'Jan 2024', roas: '2.11x', note: 'Algorithm recalibrating', highlight: false },
  { month: 'Apr 2024', roas: '5.05x', note: 'Structure working', highlight: false },
  { month: 'Oct 2024', roas: '6.45x', note: 'Year 2 peak', highlight: true },
  { month: 'Apr 2025', roas: '6.23x', note: 'Sustained performance', highlight: true },
]

export default function PremiumApparelCaseStudy() {
  return (
    <>
      {/* Header */}
      <section className="px-5 pb-14 pt-32 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-ink"
          >
            <span aria-hidden>←</span> All work
          </Link>
          <p className="mt-8 text-[11.5px] uppercase tracking-label text-muted">
            Premium Women's Apparel · Google Ads · Full-Funnel
          </p>
          <h1 className="mt-4 font-display italic text-[2.2rem] font-normal leading-snug tracking-tight text-ink sm:text-[2.8rem]">
            The account showed 10x ROAS. I broke it. Then I built it back.
          </h1>
          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Period</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">Sep 2023 – Jan 2026</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Channel</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">Google Ads</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Company</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">Conversion Lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key numbers */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Results</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">+71%</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Google Ads revenue growth, year-on-year</p>
            </div>
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">₹1.19Cr</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Google Ads revenue in Year 2</p>
            </div>
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">4.67x</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Average ROAS in Year 2, on accurate tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Context</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            A premium brand where dashboard ROAS was never the full story.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-loose text-muted">
            <p>
              A premium sustainable women's western wear brand selling in India. High-quality clothing at an average order value of ₹8,129 — a category where customers don't impulse-buy. They discover on social, browse on mobile, revisit on desktop, search the brand name, then convert. The purchase cycle can run two to four weeks.
            </p>
            <p>
              At this price point, platform ROAS is a partial truth at best. A customer might touch four channels before buying. Attribution captures some of that journey, not all of it. The metrics that actually tell you whether the account is working are MER, CAC payback, and returning customer rate — not the number on the dashboard.
            </p>
            <p>
              I came on board in September 2023 to manage their Google Ads. The dashboard looked healthy. The conversion data did not add up.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">What I did</p>
          <div className="mt-8 space-y-0">
            {timeline.map((item, i) => (
              <div key={item.phase} className="grid grid-cols-[40px_1fr] gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-subtle bg-white shadow-soft">
                    <span className="text-[11px] font-medium text-muted">{i + 1}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-subtle" style={{ minHeight: '2rem' }} />
                  )}
                </div>
                <div className={i < timeline.length - 1 ? 'pb-10' : ''}>
                  <p className="text-[11px] uppercase tracking-label text-muted">{item.phase}</p>
                  <h3 className="mt-2 text-[16px] font-semibold text-ink">{item.heading}</h3>
                  <p className="mt-2 text-[14.5px] leading-loose text-muted">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROAS journey */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">The ROAS journey</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            From inflated to accurate to genuinely strong.
          </h2>
          <p className="mt-4 text-[15px] leading-loose text-muted">
            The drop in November was not underperformance — it was the account becoming honest for the first time.
          </p>
          <div className="mt-8 space-y-3">
            {milestones.map((row) => (
              <div
                key={row.month}
                className={`grid items-center gap-4 rounded-[18px] border px-6 py-5 sm:grid-cols-[140px_1fr_auto] ${
                  row.highlight
                    ? 'border-ink/20 bg-ink text-white'
                    : 'border-subtle bg-white shadow-soft'
                }`}
              >
                <p className={`text-[14px] font-medium ${row.highlight ? 'text-white' : 'text-ink'}`}>{row.month}</p>
                <p className={`text-[13.5px] ${row.highlight ? 'text-white/70' : 'text-muted'}`}>{row.note}</p>
                <p className={`font-display italic text-[1.4rem] font-normal ${row.highlight ? 'text-white' : 'text-ink'}`}>{row.roas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The CLV insight */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Why the dashboard was still lying</p>
            <p className="mt-6 font-display italic text-[1.4rem] font-normal leading-snug text-ink">
              Even accurate ROAS understated the real return.
            </p>
            <p className="mt-5 text-[15.5px] leading-loose text-muted">
              Premium customers don't buy once. The brand's 60-day CLV was ₹13,464 — already 3.9x the CAC of ₹3,408. Payback period: under 60 days. A first-time buyer at ₹8,129 AOV looked marginal on the platform dashboard. Against lifetime value, she was exactly who you wanted to acquire.
            </p>
            <p className="mt-4 text-[15.5px] leading-loose text-muted">
              This is why MER mattered more than ROAS for this account. The platform only sees what it can attribute. The full picture — repeat purchases, cross-device journeys, brand search driven by awareness spend — was always better than what any single dashboard showed.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: '₹8,129', label: 'Average order value' },
                { value: '₹13,464', label: '60-day customer LTV' },
                { value: '<60 days', label: 'CAC payback period' },
              ].map((s) => (
                <div key={s.value} className="rounded-[16px] border border-subtle bg-subtle/20 p-4">
                  <p className="font-display italic text-[1.5rem] font-normal text-ink">{s.value}</p>
                  <p className="mt-1 text-[12px] leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Year comparison */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Year-on-year comparison</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            Revenue grew faster than spend.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="text-[11px] uppercase tracking-label text-muted">Year 1 · Sep 2023 – Aug 2024</p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-[13.5px] text-muted">Google Ads spend</p>
                  <p className="text-[14px] font-semibold text-ink">₹18.2L</p>
                </div>
                <div className="flex items-center justify-between border-t border-subtle pt-3">
                  <p className="text-[13.5px] text-muted">Google Ads revenue</p>
                  <p className="text-[14px] font-semibold text-ink">₹69.5L</p>
                </div>
                <div className="flex items-center justify-between border-t border-subtle pt-3">
                  <p className="text-[13.5px] text-muted">Average ROAS</p>
                  <p className="text-[14px] font-semibold text-ink">~3.8x</p>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] border border-ink/20 bg-ink p-6 shadow-soft">
              <p className="text-[11px] uppercase tracking-label text-white/50">Year 2 · Sep 2024 – Aug 2025</p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-[13.5px] text-white/60">Google Ads spend</p>
                  <p className="text-[14px] font-semibold text-white">₹25.5L <span className="text-[12px] font-normal text-white/50">+40%</span></p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <p className="text-[13.5px] text-white/60">Google Ads revenue</p>
                  <p className="text-[14px] font-semibold text-white">₹1.19Cr <span className="text-[12px] font-normal text-white/50">+71%</span></p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <p className="text-[13.5px] text-white/60">Average ROAS</p>
                  <p className="text-[14px] font-semibold text-white">~4.67x</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted/70">
            Revenue grew 71% while spend grew 40%. Every additional rupee of spend in Year 2 generated more revenue than it did in Year 1.
          </p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">What this shows</p>
            <p className="mt-5 text-[16px] leading-loose text-muted">
              Accurate data is not a given. It has to be earned — and sometimes that means willingly breaking numbers that look good. The 2.11x month was the most important month in this account's history. Everything that came after was built on something real.
            </p>
            <p className="mt-4 text-[16px] leading-loose text-muted">
              For premium brands, the right question is never just "what is the ROAS?" It is whether the account structure matches how customers actually buy, and whether the measurement framework captures the full return — not just what the platform can attribute in a single session.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink underline-offset-4 hover:underline"
            >
              <span aria-hidden>←</span> All work
            </Link>
            <a
              href="mailto:jigarsoni1310@gmail.com"
              className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
