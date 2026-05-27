import type { Metadata } from 'next'
import Calculator from './Calculator'

export const metadata: Metadata = {
  title: 'D2C Unit Economics Calculator — LTV, CAC & Contribution Margin',
  description:
    'Free interactive calculator for D2C brands. Model your LTV:CAC ratio, payback period, and contribution margin. Input your AOV, COGS, CAC, and shipping costs for an instant unit economics health check.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good LTV:CAC ratio for D2C brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A healthy LTV:CAC ratio is 3:1 or higher. This means the lifetime value of a customer is at least three times what you spend to acquire them. Ratios below 2:1 indicate you are destroying value with each acquisition. Most sustainable D2C brands operate between 3:1 and 5:1. Above 5:1 suggests either exceptional retention or underpriced CAC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate payback period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Payback period = (CAC × 12) ÷ (Contribution margin per order × Orders per year). It tells you how many months it takes for a customer\'s repeat purchases to recover the cost of acquiring them. A healthy payback is under 6 months. Longer paybacks tie up working capital and create cash flow risk, especially when scaling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is contribution margin and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contribution margin is what\'s left after you subtract COGS, shipping, and payment fees from your selling price. Unlike ROAS, which measures ad efficiency, contribution margin tells you the actual profit per order before CAC. A brand with high ROAS but low contribution margin cannot scale profitably. Always optimize for contribution margin, not just traffic.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I scale paid acquisition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scale paid acquisition only when: (1) LTV:CAC is 3× or higher, (2) Payback period is under 6 months, (3) You have enough cash flow to sustain the acquisition spend without risking inventory or operations. If any of these conditions are weak, focus on improving contribution margin, retention, or CAC efficiency first. Scaling too early is expensive.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I improve my LTV:CAC ratio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three levers: (1) Increase LTV through retention — email flows, loyalty programs, and repeat purchase incentives compound over time. (2) Lower CAC by improving targeting, creative, or landing page conversion. (3) Increase AOV or contribution margin through pricing, product bundling, or reducing COGS. Most founders overlook retention; it\'s often the highest-leverage move.',
      },
    },
  ],
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'D2C Unit Economics Calculator',
  description: 'Interactive calculator for modeling LTV, CAC, and contribution margin for D2C brands',
  url: 'https://jigarsoni.com/d2c-unit-economics-calculator',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

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

          {/* Explanatory content */}
          <div className="mt-16 border-t border-subtle pt-10">
            <h2 className="font-display italic text-[1.6rem] font-normal tracking-tight text-ink">
              Understanding your unit economics
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-loose text-muted">
              <p>
                Most D2C founders focus on one number: ROAS. It's the most visible metric in the ad account. But ROAS tells you only about advertising efficiency — not whether your business is actually sustainable. The number that matters is whether you're making money on each customer you acquire.
              </p>

              <p>
                That's where LTV:CAC comes in. LTV is the total profit a customer generates over their lifetime with your brand. CAC is what you spend to acquire them. If LTV is ₹3,000 and CAC is ₹1,000, your ratio is 3:1. This means you recover your acquisition cost and make ₹2,000 in profit per customer. That's healthy. Below 2:1 and you're destroying value with each acquisition. Above 5:1 and you've likely found something exceptional — or your CAC calculation is too conservative.
              </p>

              <p>
                The problem most brands face: they chase LTV through acquisition volume without building retention. A customer who buys once contributes their margin minus CAC to the business. The same customer who buys twice is exponentially more valuable. One good email flow or retention initiative can shift your LTV:CAC from marginal to healthy without touching a single campaign.
              </p>

              <p>
                Payback period is equally important and often ignored. It's how many months it takes for a customer's repeat purchases to recover the CAC. If you spend ₹1,000 acquiring a customer and they contribute ₹500 per month in margin, payback is 2 months. Under 6 months is healthy. Over 12 months means you're tying up working capital, creating cash flow risk at scale. This is why many "growing" D2C brands actually run out of cash — they look profitable on paper but can't sustain the cash burn.
              </p>

              <p>
                The three numbers to watch are contribution margin, LTV:CAC, and payback. Contribution margin tells you if the unit is viable. LTV:CAC tells you if growth is profitable. Payback tells you if growth is sustainable. Get these three right, and you can scale confidently. Chase ROAS alone, and you'll optimize yourself into insolvency.
              </p>
            </div>
          </div>

          {/* FAQ section */}
          <div className="mt-16 border-t border-subtle pt-10">
            <h2 className="font-display italic text-[1.6rem] font-normal tracking-tight text-ink">
              Common questions
            </h2>

            <div className="mt-8 space-y-4">
              {faqSchema.mainEntity.map((item: any) => (
                <details
                  key={item.name}
                  className="group rounded-[16px] border border-subtle bg-white p-4 shadow-soft transition-all open:bg-subtle/10"
                >
                  <summary className="cursor-pointer text-[14px] font-semibold text-ink transition-colors group-open:text-ink">
                    {item.name}
                  </summary>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-16 border-t border-subtle pt-8">
            <p className="text-[13px] leading-relaxed text-muted">
              This calculator uses the same framework I apply when auditing D2C brands. The numbers that matter are the ones that determine profitability and sustainability — not vanity metrics. Use this to model your scenarios, understand your leverage points, and make data-backed decisions on when to scale acquisition and when to focus on retention.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
