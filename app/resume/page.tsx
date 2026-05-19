import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Experience, education, and certifications — Jigar Soni, Performance Marketing Manager.',
}

const experience = [
  {
    role: 'Performance Marketing Manager',
    company: 'Conversion Lab',
    period: '12/2022 – Present',
    type: 'Agency',
    workMode: 'Remote',
    description:
      'Managing paid media for multiple e-commerce clients across D2C apparel, skincare, FMCG, and lifestyle categories. ₹70L+ cumulative monthly ad spend across Meta and Google. Key results include 7.6x ROAS on Google Ads for a skincare brand and 80% revenue growth for a D2C FMCG brand in 5 months.',
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Beforest',
    period: '10/2021 – 12/2022',
    type: 'In-house',
    workMode: 'On-site · Hyderabad',
    description:
      'Led paid media lead generation for a high-value real estate brand. Generated 10,000+ leads, reduced CPL by 60%, and contributed to closing 28 deals averaging ₹47L each. Also managed email campaigns and supported a full website redesign.',
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Hapup',
    period: '10/2021 – 12/2022',
    type: 'In-house',
    workMode: 'On-site · Hyderabad',
    description:
      "Concurrent role. Developed and executed Meta Ads campaigns for a millet-based D2C children's cereal brand. Managed Amazon Sponsored Ads and provided input on landing page optimisation and product listings.",
  },
  {
    role: 'Digital Marketing Consultant',
    company: 'Freelance',
    period: '06/2020 – 09/2021',
    type: 'Freelance',
    workMode: 'Remote',
    description:
      'Delivered Meta and Google Ads services to SMEs in India and the US across health, fashion, coaching, and services. Worked directly with clients, often as their sole marketing partner.',
  },
  {
    role: 'Account Manager',
    company: 'BellaVix',
    period: '09/2019 – 06/2020',
    type: 'Agency',
    workMode: 'Remote · US-based agency',
    description:
      'Managed Amazon account operations for D2C clients across fashion, health, and supplements. Worked on A+ content, branded storefronts, and marketplace strategy for US-based brands — remotely from India.',
  },
  {
    role: 'Digital Marketing Executive',
    company: 'Conversion Bug',
    period: '05/2017 – 09/2019',
    type: 'Agency',
    workMode: 'On-site · Hyderabad',
    description:
      'Planned and executed Facebook Ads for e-commerce clients. Delivered campaigns for premium brands including Mercedes Benz, KIMS Hospitals, and Toni & Guy. Collaborated with creative teams on audience strategy and ad creative.',
  },
]

const keyNumbers = [
  { value: '₹70L+', label: 'Monthly ad spend managed' },
  { value: '7.6x', label: 'ROAS achieved on Google Ads' },
  { value: '60%', label: 'CPL reduction at Beforest' },
  { value: '8+', label: 'Years in digital marketing' },
]

const certifications = [
  { name: 'Google Analytics Certification', year: '2023' },
  { name: 'Foundations of UX Design', year: '2021' },
  { name: 'Responsive Web Design', year: '2021' },
  { name: 'Google Ads Certification', year: '2020' },
  { name: 'Fundamentals of Digital Marketing', year: '2020' },
]

const typeStyles: Record<string, string> = {
  Agency: 'border-subtle/60 bg-subtle/20 text-muted/80',
  'In-house': 'border-subtle/60 bg-white text-muted/80',
  Freelance: 'border-subtle/60 bg-white text-muted/80',
}

export default function ResumePage() {
  return (
    <>
      {/* Header */}
      <section className="px-5 pb-14 pt-32 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Resume</p>
          <h1 className="mt-5 max-w-2xl font-display italic text-[2.6rem] font-normal leading-tight tracking-tight text-ink sm:text-[3rem]">
            8 years across agencies, brands, and freelance.
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-loose text-muted">
            Performance marketing experience spanning agency work, in-house brand roles, and direct client engagements.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href="mailto:jigarsoni1310@gmail.com"
              className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/jigar-soni/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-subtle bg-white px-5 py-2.5 text-[13px] font-medium text-ink shadow-soft transition hover:border-muted/60"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Key numbers */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">By the numbers</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyNumbers.map((stat) => (
              <div key={stat.value} className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
                <p className="font-display italic text-[2.2rem] font-normal text-ink">{stat.value}</p>
                <p className="mt-2 text-[13px] leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-subtle px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Experience</p>
          <h2 className="mt-5 font-display italic text-[1.8rem] font-normal tracking-tight text-ink">
            Where I have worked.
          </h2>
          <div className="mt-10 space-y-4">
            {experience.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="grid gap-4 rounded-[20px] border border-subtle bg-white p-6 shadow-soft sm:grid-cols-[220px_1fr] sm:gap-8"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-label text-muted">{exp.period}</p>
                  <p className="mt-2 text-[14px] font-semibold text-ink">{exp.company}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${typeStyles[exp.type]}`}>
                      {exp.type}
                    </span>
                    <span className="inline-block rounded-full border border-subtle/60 bg-white px-2.5 py-0.5 text-[11px] font-medium text-muted/80">
                      {exp.workMode}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[15.5px] font-semibold text-ink">{exp.role}</p>
                  <p className="mt-2 text-[13.5px] leading-loose text-muted">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="border-t border-subtle bg-white/50 px-5 py-16 sm:px-8">
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
                {certifications.map((cert) => (
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

      {/* CTA */}
      <section className="border-t border-subtle px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 text-center shadow-soft sm:p-14">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Next step</p>
            <h2 className="mt-4 font-display italic text-[1.8rem] font-normal tracking-tight text-ink">
              Open to the right role.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-loose text-muted">
              Head of Growth or senior performance marketing role at a D2C brand. If that sounds relevant, I would like to hear about it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:jigarsoni1310@gmail.com"
                className="rounded-full bg-ink px-6 py-3.5 text-[13.5px] font-medium text-white transition-opacity hover:opacity-70"
              >
                Get in touch
              </a>
              <Link
                href="/work"
                className="rounded-full border border-subtle px-6 py-3.5 text-[13.5px] font-medium text-ink transition hover:border-muted/60"
              >
                See my work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
