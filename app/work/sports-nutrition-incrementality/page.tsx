import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sports Nutrition Brand — Scaling Google Ads Incrementally',
  description:
    'Scaling Google Ads 8× in a month for a D2C sports-nutrition brand: ₹85L of additional store sales on ₹7.9L of additional spend, a 10.7× marginal return, with organic revenue flat.',
}

const timeline = [
  {
    phase: 'Diagnosis',
    heading: 'Google was a rounding error nobody could defend.',
    body: 'The account was Meta-led by a wide margin — ₹16.4L on Meta against ₹0.5L on Google, roughly 3% of paid spend. The reported RoAS on that small Google budget was 6.5×, the weakest line in the account. The honest question was not whether Google looked efficient, but whether it was adding demand or quietly harvesting searches the brand would have won anyway.',
  },
  {
    phase: 'Scale',
    heading: 'Put 46% of the new budget into the unproven channel.',
    body: 'Total paid spend grew 47% month-on-month, from ₹17.0L to ₹24.9L. Of that ₹7.9L of new money, ₹3.6L went to Google — taking it from ₹0.5L to ₹4.1L, an 8.2× increase, while Meta continued to scale 26% in parallel. Google went from 3% of paid spend to 16%.',
  },
  {
    phase: 'Measurement',
    heading: 'Judged the move on store sales, not platform claims.',
    body: 'Platform-reported revenue could not answer the question, because both platforms claim the same orders. The test was whether the deduplicated top line moved by more than the extra spend cost, and whether non-paid revenue stayed where it was. Both were measured on store sales, not on dashboards.',
  },
  {
    phase: 'Next',
    heading: 'Named the test that would actually settle it.',
    body: 'Correlational evidence is not causal proof, however good it looks. The recommendation at the end of the review was a geo-holdout on Google — suppress the channel in matched regions and measure the difference in store sales — because that is the only way to convert a strong inference into something you can bank on.',
  },
]

const channels = [
  {
    name: 'Meta',
    spendJun: '₹16.4L',
    spendJul: '₹20.7L',
    revJun: '₹239.3L',
    revJul: '₹294.6L',
    roasJun: '14.6×',
    roasJul: '14.2×',
  },
  {
    name: 'Google',
    spendJun: '₹0.5L',
    spendJul: '₹4.1L',
    revJun: '₹3.4L',
    revJul: '₹36.1L',
    roasJun: '6.5×',
    roasJul: '8.7×',
  },
  {
    name: 'Total paid media',
    spendJun: '₹17.0L',
    spendJul: '₹24.9L',
    revJun: '₹242.7L',
    revJul: '₹330.7L',
    roasJun: '14.3×',
    roasJul: '13.3×',
    total: true,
  },
]

const evidence = [
  {
    value: '10.7×',
    heading: 'The marginal return, measured on deduplicated sales',
    body: 'Store sales rose ₹85L on ₹7.9L of additional spend. This is the number that matters, because it is the actual top line rather than the sum of two platforms each claiming the same orders.',
  },
  {
    value: 'Flat',
    heading: 'Non-paid revenue did not move',
    body: 'Roughly ₹2.5Cr in both months. If the new Google spend were simply intercepting brand searches that would have converted anyway, non-paid revenue should have fallen by close to what Google gained. It fell by about ₹3L.',
  },
  {
    value: '14.2×',
    heading: "Meta's efficiency held while it also scaled",
    body: 'Meta RoAS moved 14.6× to 14.2× on 26% more spend. Adding a second channel at nearly half the incremental budget did not come at the expense of the channel that was already working.',
  },
]

export default function SportsNutritionCaseStudy() {
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
            Sports Nutrition · Google Ads · Incrementality
          </p>
          <h1 className="mt-4 font-display italic text-[2.2rem] font-normal leading-snug tracking-tight text-ink sm:text-[2.8rem]">
            Google Ads went from 3% of spend to 16%. The business grew ₹85L and organic never moved.
          </h1>
          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Period</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">June – July 2026</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Channels</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">Meta Ads · Google Ads</p>
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
              <p className="font-display italic text-[2.2rem] font-normal text-ink">+₹85L</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Additional store sales month-on-month, ₹4.97Cr → ₹5.82Cr (+17%)</p>
            </div>
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">10.7×</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Marginal return on every additional ₹1 of spend</p>
            </div>
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">8.2×</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Google Ads spend increase, ₹0.5L → ₹4.1L in one month</p>
            </div>
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-muted/70">
            Client anonymised. Figures are from a single month-on-month performance review of a D2C sports-nutrition
            brand. Marginal MER is calculated as the change in store sales divided by the change in total paid spend.
          </p>
        </div>
      </section>

      {/* Context */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Context</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            A brand big enough that growth could come from anywhere.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-loose text-muted">
            <p>
              A D2C sports-nutrition brand doing roughly ₹5Cr a month in store sales, with a whey-led catalogue and a
              paid account that was overwhelmingly Meta. At that size, a good month can come from media, from base
              demand, from a product push, or from nothing in particular — and the dashboard will happily take credit
              for all four.
            </p>
            <p>
              Google was the open question. At ₹0.5L a month it was too small to matter and too small to judge. The
              case for scaling it was obvious on paper; the case against it was the one that always applies to search
              on a brand with existing demand, which is that you may simply be paying for orders you already had.
            </p>
            <p>
              So the month was run as a test with a budget attached: scale the unproven channel hard, keep the proven
              one scaling too, and then measure the result somewhere the platforms could not mark their own homework.
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

      {/* Channel detail */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Channel detail</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            What each channel spent, and what each claimed.
          </h2>
          <p className="mt-4 text-[15px] leading-loose text-muted">
            Revenue here is what each platform reported on its own basis and attribution window. The two are not
            additive, and neither is the truth — they are two claims about the same set of orders.
          </p>
          <div className="mt-8 space-y-3">
            {channels.map((c) => (
              <div
                key={c.name}
                className={`rounded-[18px] border px-6 py-5 ${
                  c.total ? 'border-ink/20 bg-ink text-white' : 'border-subtle bg-white shadow-soft'
                }`}
              >
                <p className={`text-[14px] font-medium ${c.total ? 'text-white' : 'text-ink'}`}>{c.name}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: 'Spend', from: c.spendJun, to: c.spendJul },
                    { label: 'Reported revenue', from: c.revJun, to: c.revJul },
                    { label: 'Reported RoAS', from: c.roasJun, to: c.roasJul },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className={`text-[11px] uppercase tracking-label ${c.total ? 'text-white/50' : 'text-muted'}`}>
                        {m.label}
                      </p>
                      <p className={`mt-1.5 text-[14px] font-medium ${c.total ? 'text-white' : 'text-ink'}`}>
                        {m.from} <span className={c.total ? 'text-white/40' : 'text-muted/60'}>→</span> {m.to}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted/70">
            Blended MER fell from 29.3× to 23.4× across the two months — the expected dilution when you add budget to
            a channel reporting a lower return than the one you already have. The marginal return was the number that
            justified doing it anyway.
          </p>
        </div>
      </section>

      {/* The double-count */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Why the dashboards could not answer this</p>
            <p className="mt-6 font-display italic text-[1.4rem] font-normal leading-snug text-ink">
              The platforms claimed ₹88L of growth. The business grew ₹85L.
            </p>
            <p className="mt-5 text-[15.5px] leading-loose text-muted">
              Meta reported ₹55.3L more revenue than the previous month. Google reported ₹32.7L more. Added together
              that is ₹88L of claimed growth against ₹85L of actual, deduplicated growth in store sales — two
              platforms each taking credit for very nearly all of a gain they produced together.
            </p>
            <p className="mt-4 text-[15.5px] leading-loose text-muted">
              This is why "Google delivered ₹36.1L at 8.7×" is not a finding. It is a claim, measured by the party
              being evaluated. The only defensible version of the question is what happened to the top line, and what
              happened to everything that was not paid.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: '+₹88L', label: 'Growth claimed by the two platforms combined' },
                { value: '+₹85L', label: 'Actual growth in deduplicated store sales' },
                { value: '₹7.9L', label: 'Additional spend that produced it' },
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

      {/* The evidence */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">The case for incrementality</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            Three things that had to be true. All three were.
          </h2>
          <div className="mt-8 space-y-4">
            {evidence.map((e) => (
              <div key={e.value} className="grid gap-4 rounded-[20px] border border-subtle bg-white p-6 shadow-soft sm:grid-cols-[90px_1fr]">
                <span className="font-display italic text-[1.9rem] font-normal leading-none text-ink">{e.value}</span>
                <div>
                  <p className="text-[15px] font-semibold text-ink">{e.heading}</p>
                  <p className="mt-2 text-[13.5px] leading-loose text-muted">{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does not prove */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">What it does not prove</p>
            <p className="mt-6 font-display italic text-[1.4rem] font-normal leading-snug text-ink">
              Strong evidence is not causal proof, and the difference is worth money.
            </p>
            <p className="mt-5 text-[15.5px] leading-loose text-muted">
              Both channels scaled in the same month, so the 10.7× marginal return belongs to the pair of them, not
              to Google alone. A single month-on-month comparison also cannot separate media from seasonality, pricing
              or a product push — and most of the net-sales growth was concentrated in a handful of hero SKUs, which
              is consistent with the media working and equally consistent with those SKUs simply selling well.
            </p>
            <p className="mt-4 text-[15.5px] leading-loose text-muted">
              What the evidence does establish is that the growth was paid-led rather than base demand, and that
              scaling Google did not visibly cannibalise either Meta or non-paid revenue. The recommendation was a
              geo-holdout on Google: suppress it in matched regions, read the difference in store sales, and replace
              a strong inference with a causal number.
            </p>
          </div>
        </div>
      </section>

      {/* Where the growth sat */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Where the growth actually sat</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            One sub-category carried almost all of it.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: '95%', label: 'Of net-sales growth came from six SKUs in a single sub-category' },
              { value: '79%', label: 'Share of total revenue from that sub-category in the second month' },
              { value: '+52%', label: 'Unit growth on the top-selling SKU, which alone added ₹30.7L' },
            ].map((s) => (
              <div key={s.value} className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
                <p className="font-display italic text-[1.8rem] font-normal text-ink">{s.value}</p>
                <p className="mt-2 text-[13px] leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted/70">
            Net sales grew 17% while units grew 9.4%, so roughly half the growth came from value per order rather than
            volume. Concentration like this is useful to know before you read a good month as proof that the media is
            working everywhere — it was working on a narrow front. Product-level figures sit on a store net-sales
            basis, which excludes non-store channels and so differs from the store sales figure above; both grew 17%.
          </p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">What this shows</p>
            <p className="mt-5 text-[16px] leading-loose text-muted">
              Scaling a channel is the easy half. The hard half is being able to say, afterwards, whether the business
              is better off — and platform-reported revenue cannot tell you, because every platform reports on a basis
              designed to flatter it.
            </p>
            <p className="mt-4 text-[16px] leading-loose text-muted">
              Marginal MER against deduplicated store sales, with non-paid revenue watched as a control, is the
              cheapest honest read available without running a test. It was enough to justify holding the new Google
              budget and enough to say what the next experiment should be. It was not enough to call it proven, and
              saying so is part of the job.
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-muted/70">
              Agency client work at Conversion Lab. Brand, sub-brand and product names withheld.
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
