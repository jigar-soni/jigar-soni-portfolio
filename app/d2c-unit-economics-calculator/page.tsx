import type { Metadata } from 'next'
import Calculator from './Calculator'

export const metadata: Metadata = {
  title: 'D2C Unit Economics Calculator — LTV, CAC & Contribution Margin',
  description:
    'Free interactive calculator for D2C brands. Model your LTV:CAC ratio, payback period, and contribution margin. Input your AOV, COGS, CAC, and shipping costs for an instant unit economics health check.',
}

export default function Page() {
  return (
    <section className="px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Tools</p>
          <h1 className="mt-4 font-display italic text-[2.4rem] font-normal leading-tight tracking-tight text-ink sm:text-[2.8rem]">
            D2C Unit Economics Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-loose text-muted">
            Model your LTV:CAC ratio, contribution margin, and payback period. Drag the inputs to see how changes to AOV, COGS, CAC, or retention affect the economics of your brand.
          </p>
        </div>

        <Calculator />

        {/* SEO footer */}
        <div className="mt-10 border-t border-subtle pt-8">
          <p className="max-w-2xl text-[13px] leading-relaxed text-muted">
            Built for D2C founders and growth marketers who want to stress-test their unit economics before scaling paid acquisition.
            LTV:CAC ratio, payback period, and contribution margin are the three numbers that determine whether your growth is sustainable — or just expensive.
          </p>
        </div>

      </div>
    </section>
  )
}
