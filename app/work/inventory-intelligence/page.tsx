import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inventory Intelligence — ₹12.33 Crore Hidden Revenue',
  description:
    "A 365-day inventory analysis that found ₹12.33 crore in revenue locked inside an ethnicwear brand's out-of-stock products.",
}

const keyNumbers = [
  { value: '₹8.96 Cr', label: 'Revenue actually captured' },
  { value: '₹12.33 Cr', label: 'Revenue lost to stockouts' },
  { value: '141 days', label: 'Avg OOS for top 300 SKUs' },
]

const productLines = [
  { line: 'Mirror Work', skus: '1,121', oос: '165 days', lost: '₹6.87 Cr', priority: 'Critical' },
  { line: 'Hand Embroidered', skus: '6', oос: '286 days', lost: '₹35.72 L', priority: 'Urgent' },
  { line: 'Pure Cotton Hand Embroidered', skus: '6', oос: '296 days', lost: '₹30.61 L', priority: 'Urgent' },
  { line: 'Mirror Work Cotton Kurta', skus: '6', oос: '276 days', lost: '₹25.02 L', priority: 'High' },
]

const scenarios = [
  { label: 'OOS reduced to 30 days', revenue: '₹16.56 Cr', growth: '+196%' },
  { label: 'OOS reduced to 60 days', revenue: '₹15.23 Cr', growth: '+172%' },
  { label: 'OOS reduced to 90 days', revenue: '₹13.93 Cr', growth: '+149%' },
  { label: '100% stock availability', revenue: '₹17.92 Cr', growth: '+220%' },
]

const recommendations = [
  {
    n: '01',
    heading: 'Priority restock: 124 critical SKUs',
    body: 'SKUs with 180+ OOS days representing ₹92L+ in demand. These are known performers — the demand is already proven.',
  },
  {
    n: '02',
    heading: 'Inventory rebalancing',
    body: 'Shift investment from the bottom 5,000 SKUs (contributing 10% of revenue) toward the top 500 (36.5%). The long tail is being overstocked relative to its contribution.',
  },
  {
    n: '03',
    heading: '90-day safety stock on Mirror Work and Hand Embroidered lines',
    body: 'These product lines have the highest demand and the worst availability. They need a structural buffer, not just reactive restocking.',
  },
  {
    n: '04',
    heading: 'Demand forecasting and automated reorder triggers',
    body: 'Manual restocking at this catalog size will always lag. The top 500 SKUs need automated reorder points based on sales velocity.',
  },
]

export default function InventoryIntelligencePage() {
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
            Ethnicwear · Inventory Analysis · Growth Strategy
          </p>
          <h1 className="mt-4 font-display italic text-[2.2rem] font-normal leading-snug tracking-tight text-ink sm:text-[2.8rem]">
            ₹12.33 crore sitting in out-of-stock products. We found it before the competition did.
          </h1>
          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Period</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">Dec 2024 – Dec 2025</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Scope</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">9,745 SKUs · 365-day analysis</p>
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
          <p className="text-[11.5px] uppercase tracking-label text-muted">The numbers</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {keyNumbers.map((stat) => (
              <div key={stat.value} className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
                <p className="font-display italic text-[2.2rem] font-normal text-ink">{stat.value}</p>
                <p className="mt-2 text-[13px] leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Context</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            The campaigns were fine. The problem was elsewhere.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-loose text-muted">
            <p>
              While managing paid media for this ethnicwear brand, I kept running into the same wall. Campaigns were performing — traffic was coming in, intent was there — but conversion was not following. The usual suspects checked out: creative was solid, targeting was refined, landing pages were clean.
            </p>
            <p>
              The problem was upstream. The products people were clicking on were not available.
            </p>
            <p>
              I commissioned a full 365-day inventory analysis across the brand's entire catalog — 9,745 SKUs — to quantify what we were actually dealing with.
            </p>
          </div>
        </div>
      </section>

      {/* What the data showed */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">What the data showed</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            Best-selling products. Worst availability.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-loose text-muted">
            <p>
              The brand had generated ₹8.96 crore in revenue over the year. That sounds reasonable until you look at availability.
            </p>
            <p>
              The top 300 SKUs — the ones driving the bulk of actual revenue — were out of stock for an average of 141 days. That is 39% of the year. 41% of those top-performing SKUs were unavailable for more than 180 days.
            </p>
            <p>
              The pattern that stood out most: the brand's best products suffered the most. Top 50–200 SKUs had the highest OOS rates (130–152 days average). The slow-moving bottom 5,000 SKUs were better stocked than the products customers actually wanted. Only 40 of the top 300 SKUs — 13% — maintained full availability across the year.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { value: '41%', label: 'Of top 300 SKUs out of stock 180+ days' },
              { value: '13%', label: 'Of top 300 SKUs fully available all year' },
              { value: '₹1.03L', label: 'Avg daily revenue lost to stockouts' },
            ].map((s) => (
              <div key={s.value} className="rounded-[18px] border border-subtle bg-white p-5 shadow-soft">
                <p className="font-display italic text-[1.8rem] font-normal text-ink">{s.value}</p>
                <p className="mt-1.5 text-[12.5px] leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product lines table */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">By product line</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            Where the revenue was locked.
          </h2>
          <div className="mt-8 space-y-3">
            {productLines.map((row) => (
              <div
                key={row.line}
                className="rounded-[18px] border border-subtle bg-white p-5 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{row.line}</p>
                    <p className="mt-1 text-[13px] text-muted">{row.skus} SKUs · {row.oос} avg OOS</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-display italic text-[1.3rem] font-normal text-ink">{row.lost}</p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-label text-muted">lost revenue</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted/70">
            Mirror Work alone — 1,121 SKUs generating ₹2.46 Cr — had ₹6.87 Cr sitting unrealised.
          </p>
        </div>
      </section>

      {/* The real insight */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">What this meant for paid media</p>
            <p className="mt-6 font-display italic text-[1.4rem] font-normal leading-snug text-ink">
              Stockouts don't announce themselves in the ad account.
            </p>
            <p className="mt-5 text-[15.5px] leading-loose text-muted">
              They show up as unexplained dips in ROAS, lower-than-expected conversion rates, and a widening gap between traffic quality and outcomes — all of which point you toward the wrong problems. You optimise bids, refresh creative, tighten audiences. The number still does not move. The ceiling is not in the campaign. It is in the warehouse.
            </p>
            <p className="mt-4 text-[15.5px] leading-loose text-muted">
              Attribution made this invisible. Conversions looked low, so the instinct was to fix targeting or test new creatives. The actual lever was inventory. This is why performance marketing has to extend beyond the ad account.
            </p>
          </div>
        </div>
      </section>

      {/* Scenario projections */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">The opportunity</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            Revenue projections by OOS target.
          </h2>
          <p className="mt-4 text-[15px] leading-loose text-muted">
            Modelled on current sales velocity during in-stock periods. ROI on fixing inventory: ₹2.54 returned for every ₹1 invested in restocking.
          </p>
          <div className="mt-8 space-y-3">
            {scenarios.map((s, i) => (
              <div
                key={s.label}
                className={`grid items-center gap-4 rounded-[18px] border px-6 py-5 sm:grid-cols-[1fr_auto_auto] ${i === scenarios.length - 1 ? 'border-ink/20 bg-ink text-white' : 'border-subtle bg-white shadow-soft'}`}
              >
                <p className={`text-[14px] ${i === scenarios.length - 1 ? 'text-white/70' : 'text-muted'}`}>{s.label}</p>
                <p className={`font-display italic text-[1.4rem] font-normal ${i === scenarios.length - 1 ? 'text-white' : 'text-ink'}`}>{s.revenue}</p>
                <p className={`text-[13px] font-medium ${i === scenarios.length - 1 ? 'text-white/70' : 'text-muted'}`}>{s.growth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Recommended actions</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            A 90-day path to capturing lost revenue.
          </h2>
          <div className="mt-8 space-y-4">
            {recommendations.map((r) => (
              <div key={r.n} className="grid gap-4 rounded-[20px] border border-subtle bg-white p-6 shadow-soft sm:grid-cols-[56px_1fr]">
                <span className="font-display italic text-[2rem] font-normal leading-none text-subtle select-none">
                  {r.n}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-ink">{r.heading}</p>
                  <p className="mt-2 text-[13.5px] leading-loose text-muted">{r.body}</p>
                </div>
              </div>
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
              Performance marketing does not start and end at the ad account. If the product is not available, the campaign cannot convert — and the data will point you toward the wrong problems. This analysis came from spending enough time with the business to ask why campaigns were not converting the way they should have been.
            </p>
            <p className="mt-4 text-[16px] leading-loose text-muted">
              Growth problems are rarely where they first appear.
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
