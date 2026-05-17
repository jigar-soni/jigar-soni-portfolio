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

const experience = [
  {
    role: 'Performance Marketing Manager',
    company: 'Conversion Lab',
    period: '12/2022 – Present',
    description:
      'Managing paid media for multiple e-commerce clients across D2C apparel, skincare, FMCG, and lifestyle categories. ₹70L+ cumulative monthly ad spend across Meta and Google. Key results include 7.6x ROAS on Google Ads for a skincare brand and 80% revenue growth for a D2C FMCG brand in 5 months.',
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Beforest',
    period: '10/2021 – 12/2022',
    description:
      'Led paid media lead generation for a high-value real estate brand. Generated 10,000+ leads, reduced CPL by 60%, and contributed to closing 28 deals averaging ₹47L each. Also managed email campaigns and supported a full website redesign.',
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Hapup',
    period: '10/2021 – 12/2022',
    description:
      "Concurrent role. Developed and executed Meta Ads campaigns for a millet-based D2C children's cereal brand. Managed Amazon Sponsored Ads and provided input on landing page optimisation and product listings.",
  },
  {
    role: 'Digital Marketing Consultant',
    company: 'Freelance',
    period: '06/2020 – 09/2021',
    description:
      'Delivered Meta and Google Ads services to SMEs in India and the US across health, fashion, coaching, and services. Worked directly with clients, often as their sole marketing partner.',
  },
  {
    role: 'Account Manager',
    company: 'BellaVix',
    period: '09/2019 – 06/2020',
    description:
      'Managed Amazon account operations for D2C clients across fashion, health, and supplements. Worked on A+ content, branded storefronts, and marketplace strategy for US-based brands — remotely from India.',
  },
  {
    role: 'Digital Marketing Executive',
    company: 'Conversion Bug',
    period: '05/2017 – 09/2019',
    description:
      'Planned and executed Facebook Ads for e-commerce clients. Delivered campaigns for premium brands including Mercedes Benz, KIMS Hospitals, and Toni & Guy. Collaborated with creative teams on audience strategy and ad creative.',
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

      {/* Experience */}
      <section className="border-t border-subtle bg-white/50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Experience</p>
          <h2 className="mt-5 font-display italic text-[1.8rem] font-normal tracking-tight text-ink">
            Experience
          </h2>
          <div className="mt-10 space-y-5">
            {experience.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="grid gap-3 rounded-[20px] border border-subtle bg-white p-6 shadow-soft sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-label text-muted">{exp.period}</p>
                  <p className="mt-2 text-[13.5px] font-medium text-ink">{exp.company}</p>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-ink">{exp.role}</p>
                  <p className="mt-2 text-[13.5px] leading-loose text-muted">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 text-center shadow-soft sm:p-14">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Next step</p>
            <h2 className="mt-4 font-display italic text-[1.8rem] font-normal tracking-tight text-ink">
              Looking for a performance marketer?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-loose text-muted">
              If you're leading a D2C brand and need someone with hands-on paid media experience and a strategic head on their shoulders, I'd like to hear about the role.
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
