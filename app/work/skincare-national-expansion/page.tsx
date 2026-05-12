import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Skincare Brand — National Expansion via Google Ads',
  description:
    "How geographic restructuring on Google Ads grew a TN-based skincare brand's non-Tamil Nadu revenue by 39% year-on-year.",
}

const stateData = [
  { state: 'Karnataka', period: '2025', roas: '8.05x', note: 'Highest ROAS of any state' },
  { state: 'Bihar', period: 'YoY', roas: '0.67x → 3.44x', note: '5x efficiency improvement' },
  { state: 'Uttar Pradesh', period: 'YoY', roas: '1.58x → 3.52x', note: 'More than doubled ROAS' },
]

const timeline = [
  {
    phase: 'Audit',
    heading: 'Diagnosing the problem',
    body: "The brand had strong Tamil Nadu performance — it was a known name there. Outside TN, ad spend existed but wasn't working. ROAS was erratic across states, campaigns weren't structured by geography, and there was no way to tell which markets were scalable versus wasteful.",
  },
  {
    phase: 'Strategy',
    heading: 'Restructuring by geography',
    body: 'Rather than running national campaigns and hoping for the best, I rebuilt the account with state-level segmentation. Each high-potential state got its own campaign structure, budget, and bid strategy — so performance could be read and optimised independently.',
  },
  {
    phase: 'Execution',
    heading: 'Finding the markets that worked',
    body: 'With state-level visibility, patterns emerged quickly. Karnataka responded exceptionally well — 8.05x ROAS in 2025. Bihar and UP, which had previously shown poor returns, began improving as budgets were redirected toward the ad types and audiences that were converting in those markets.',
  },
  {
    phase: 'Scale',
    heading: 'Compounding returns',
    body: 'Over the full year-on-year comparison (Jan 2024–Jan 2025 vs Jan 2025–Jan 2026), non-TN revenue grew 39%, reaching ₹2.77 crore. The brand went from being regionally dependent to having a genuinely diversified national revenue base through Google Ads.',
  },
]

const screenshots = [
  {
    file: '/case-studies/skincare/overview-2024-2025.png',
    caption: 'Account overview: Jan 2024 – Jan 2025 (baseline year)',
  },
  {
    file: '/case-studies/skincare/overview-2025-2026.png',
    caption: 'Account overview: Jan 2025 – Jan 2026 (growth year)',
  },
  {
    file: '/case-studies/skincare/state-breakdown-1.png',
    caption: 'State-level performance — Karnataka, Bihar, Uttar Pradesh',
  },
  {
    file: '/case-studies/skincare/state-breakdown-2.png',
    caption: 'State-level performance — extended view',
  },
]

export default function SkincareCaseStudy() {
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
            Skincare · Google Ads · Geographic Expansion
          </p>
          <h1 className="mt-4 font-display italic text-[2.2rem] font-normal leading-snug tracking-tight text-ink sm:text-[2.8rem]">
            Growing a TN-based skincare brand's national revenue by 39% through Google Ads restructuring.
          </h1>
          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Period</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">Jan 2024 – Jan 2026</p>
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
              <p className="font-display italic text-[2.2rem] font-normal text-ink">+39%</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Non-TN revenue growth, year-on-year</p>
            </div>
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">₹2.77Cr</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Non-TN Google Ads revenue in year 2</p>
            </div>
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">8.05x</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">ROAS achieved in Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Context</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            A strong brand, stuck in one state.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-loose text-muted">
            <p>
              This is a skincare brand based in Tamil Nadu. In TN, it had an established customer base and reasonable brand recognition. Outside TN, it had a Google Ads account with national reach — but the numbers outside the home state weren't moving.
            </p>
            <p>
              Non-Tamil Nadu markets were getting ad spend but returning inconsistent ROAS. Some states were clearly underperforming. Others had potential that wasn't being captured. The account structure didn't allow you to tell the difference — everything was running together with no way to isolate what was working where.
            </p>
            <p>
              The objective was clear: grow national revenue without burning budget on markets that weren't ready. That required understanding which states had real demand, and building a structure that could find and scale them.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Approach</p>
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

      {/* State performance */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">State-level results</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            Markets that moved.
          </h2>
          <p className="mt-4 text-[15px] leading-loose text-muted">
            Once campaigns were restructured by geography, the performance gaps became legible — and actionable.
          </p>
          <div className="mt-8 space-y-3">
            {stateData.map((row) => (
              <div
                key={row.state}
                className="grid items-center gap-4 rounded-[18px] border border-subtle bg-white px-6 py-5 shadow-soft sm:grid-cols-[160px_1fr_auto]"
              >
                <p className="text-[15px] font-semibold text-ink">{row.state}</p>
                <p className="text-[13.5px] text-muted">{row.note}</p>
                <p className="font-display italic text-[1.3rem] font-normal text-ink">{row.roas}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-muted/70">
            Bihar and UP data reflects year-on-year ROAS comparison (Jan 2024–Jan 2025 vs Jan 2025–Jan 2026). Karnataka figure is for the Jan 2025–Jan 2026 period.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Data</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            Account data, from Google Ads.
          </h2>
          <p className="mt-4 text-[15px] leading-loose text-muted">
            Year-on-year comparisons showing account-level performance and state breakdown for non-TN markets.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {screenshots.map((shot) => (
              <figure key={shot.file} className="overflow-hidden rounded-[20px] border border-subtle bg-white shadow-soft">
                <div className="relative aspect-[4/3] w-full bg-subtle/20">
                  <Image
                    src={shot.file}
                    alt={shot.caption}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="px-5 py-3.5 text-[12px] text-muted/70">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">What this shows</p>
            <p className="mt-5 text-[16px] leading-loose text-muted">
              National campaigns don't build national presence on their own — they just spread budget thin. When you can see state-level performance independently, you find that a few markets are carrying the results and many are dragging them down.
            </p>
            <p className="mt-4 text-[16px] leading-loose text-muted">
              The 39% non-TN growth wasn't from increasing total spend. It was from understanding where the demand already existed, building a structure that could capture it, and reallocating away from states that weren't converting. Geographic segmentation is an operational decision as much as a campaign decision.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
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
