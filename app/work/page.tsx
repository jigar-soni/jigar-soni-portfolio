import type { Metadata } from 'next'
import Link from 'next/link'
import WorkCaseStudies, { type CaseStudy } from '../components/WorkCaseStudies'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies and performance marketing work across D2C brands, e-commerce, and lead generation.',
}

const caseStudies: CaseStudy[] = [
  {
    id: 'inventory-intelligence',
    tag: 'Ethnicwear · Inventory Analysis · Growth Strategy',
    category: 'Growth Strategy',
    context: 'Agency · Client work',
    activeClient: true,
    title: '₹12.33 crore sitting in out-of-stock products. We found it before the competition did.',
    summary:
      "While managing paid media for this ethnicwear brand, conversion was consistently underperforming despite strong traffic. Creative, targeting, and landing pages all checked out. The problem was upstream — the best-selling products weren't available. I commissioned a 365-day inventory analysis across 9,745 SKUs to quantify the damage.",
    details: [
      '₹12.33 Cr in estimated revenue lost to stockouts over 365 days',
      'Top 300 SKUs were out of stock for an average of 141 days (39% of the year)',
      '41% of top 300 SKUs unavailable for 180+ days — more than half the year',
      'Only 13% of top 300 SKUs maintained full availability',
      'Modelled ₹17.92 Cr revenue potential with full stock availability (+220%)',
    ],
    note: 'Conversion Lab · Dec 2024 – Dec 2025',
    caseStudyLink: '/work/inventory-intelligence',
  },
  {
    id: 'premium-apparel',
    tag: "Premium Women's Apparel · Google Ads · Full-Funnel",
    category: 'Paid Acquisition & Scaling',
    context: 'Agency · Client work',
    title: 'The account showed 10x ROAS. I broke it. Then I built it back.',
    summary:
      "Inherited a Google Ads account reporting 8–10x ROAS. Found a double-counting error in conversion tracking — every number in the account was inflated. Fixed the tracking, watched the numbers drop, then rebuilt with a full-funnel structure. Year 2 delivered 71% revenue growth on 40% more spend.",
    details: [
      'Identified and fixed conversion double-counting — first accurate ROAS reading was 3.32x',
      'Google Ads revenue grew 71% year-on-year (₹69.5L → ₹1.19Cr)',
      'Spend grew only 40% — efficiency improved as the account scaled',
      'Average ROAS improved from ~3.8x (Y1) to 4.67x (Y2) on accurate tracking',
      '60-day CLV of ₹13,464 against CAC of ₹3,408 — payback period under 60 days',
    ],
    note: 'Conversion Lab · Sep 2023 – Jan 2026',
    caseStudyLink: '/work/premium-apparel-google-ads',
  },
  {
    id: 'fmcg-revenue',
    tag: 'D2C FMCG · Revenue Growth · Meta & Google Ads',
    category: 'Paid Acquisition & Scaling',
    context: 'Agency · Client work',
    activeClient: true,
    title: '₹30L to ₹54L monthly revenue in 5 months for a D2C FMCG brand',
    summary:
      'At Conversion Lab, I managed paid acquisition and full-funnel growth for a D2C FMCG brand. The brief was to scale revenue while keeping margins healthy.',
    details: [
      'Scaled monthly revenue from ₹30L to ₹54L (80% growth) within 5 months',
      'Managed both Meta Ads and Google Ads with coordinated budget allocation across the funnel',
      'Set up GA4, Meta CAPI, and Conversion Tracking for cleaner attribution',
      'Led integration of Shopflo and Gokwik to improve checkout conversion',
      'Worked closely on abandoned cart recovery using Contlo',
    ],
    note: 'Conversion Lab · 2022–Present',
  },
  {
    id: 'skincare-roas',
    tag: 'Skincare · Google Ads · Geographic Expansion',
    category: 'GEO Lift',
    context: 'Agency · Client work',
    activeClient: true,
    title: '+39% non-TN revenue growth for a skincare brand through Google Ads restructuring',
    summary:
      "A TN-based skincare brand with strong home-market performance but stalled national growth. The problem wasn't ad spend — it was that national campaigns had no geographic visibility, so underperforming states were dragging down results from high-potential ones.",
    details: [
      'Non-Tamil Nadu Google Ads revenue grew 39% year-on-year to ₹2.77 crore',
      'Karnataka delivered 8.05x ROAS after state-level campaign restructuring',
      'Bihar improved from 0.67x to 3.44x ROAS year-on-year',
      'Uttar Pradesh improved from 1.58x to 3.52x ROAS year-on-year',
      'Rebuilt account structure with state-level segmentation across shopping, search, and PMAX',
    ],
    note: 'Conversion Lab · Jan 2024 – Jan 2026',
    caseStudyLink: '/work/skincare-national-expansion',
  },
  {
    id: 'beforest-realestate',
    tag: 'Real Estate · Lead Generation · Meta & Google Ads',
    category: 'Paid Acquisition & Scaling',
    context: 'In-house role',
    title: '10,000+ leads and 60% lower CPL for a high-value real estate brand',
    summary:
      'Beforest was a different kind of brief — high-ticket real estate with long sales cycles. The challenge was generating quality leads efficiently enough to make the economics work.',
    details: [
      'Generated 10,000+ leads through Meta and Google Ads campaigns',
      'Reduced CPL by 60% through audience refinement and landing page alignment',
      'Helped facilitate closure of 28 high-value deals averaging ₹47 lakh each',
      'Executed email campaigns alongside paid to nurture leads through longer cycles',
      'Onboarded an SEO consultant and supported a full website redesign',
    ],
    note: 'Beforest, Hyderabad · Oct 2021 – Dec 2022',
  },
  {
    id: 'agency',
    tag: 'Agency · Multi-Industry · Facebook Ads',
    category: 'Paid Acquisition & Scaling',
    context: 'Agency · Client work',
    title: 'Campaign delivery for Mercedes Benz, KIMS Hospitals & Toni & Guy',
    summary:
      'Early-career agency experience managing digital campaigns for premium brands across automotive, healthcare, and lifestyle — where disciplined process and structured reporting mattered as much as results.',
    details: [
      'Managed Facebook Ads campaigns for a regional Mercedes Benz presence',
      'Coordinated digital campaign delivery for KIMS Hospitals',
      'Executed organic and paid social strategy for Toni & Guy India',
      'Developed structured reporting and client communication workflows',
    ],
    note: 'Conversion Bug, Hyderabad · 2017–2019',
  },
]

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="px-5 pb-14 pt-32 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Work</p>
          <h1 className="mt-5 max-w-2xl font-display italic text-[2.6rem] font-normal leading-tight tracking-tight text-ink sm:text-[3rem]">
            What I've worked on.
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-loose text-muted">
            Selected case studies across D2C, e-commerce, and lead generation. Real work, real context, real numbers.
          </p>
        </div>
      </section>

      {/* Case studies with category filter */}
      <WorkCaseStudies caseStudies={caseStudies} />

      {/* CTA */}
      <section className="border-t border-subtle px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 text-center shadow-soft sm:p-14">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Get in touch</p>
            <h2 className="mt-4 font-display italic text-[1.8rem] font-normal tracking-tight text-ink">
              If there's a conversation worth having.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-loose text-muted">
              If you're building something in D2C and think there's something worth talking about — a project, a collab, or just an interesting problem — reach out.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:jigarsoni1310@gmail.com"
                className="rounded-full bg-ink px-6 py-3.5 text-[13.5px] font-medium text-white transition-opacity hover:opacity-70"
              >
                Get in touch
              </a>
              <Link
                href="/about"
                className="rounded-full border border-subtle px-6 py-3.5 text-[13.5px] font-medium text-ink transition hover:border-muted/60"
              >
                More about me
              </Link>
              <Link
                href="/resume"
                className="rounded-full border border-subtle px-6 py-3.5 text-[13.5px] font-medium text-ink transition hover:border-muted/60"
              >
                View resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
