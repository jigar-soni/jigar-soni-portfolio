import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Children's Literary Festival — Event Lead Generation",
  description:
    'How Meta Ads and Google Ads drove an estimated 11,000+ registrations for a free-entry children\'s literary festival at ₹18–23 per registered person.',
}

const timeline = [
  {
    phase: 'Strategy',
    heading: 'Built the acquisition strategy.',
    body: 'Owned media strategy, campaign setup and creative direction across Meta Ads and Google Ads. Lead generation carried the registrations, while awareness, Reels engagement and broader audience testing did the work of discovery and reach. Each campaign was judged against its own objective — a ThruPlay and a form fill are not the same currency.',
  },
  {
    phase: 'Search',
    heading: 'Gave Search a different job.',
    body: 'Meta generated demand. Google Search captured the people already looking for the festival and sent that high-intent traffic straight to the registration page. It was the smallest line in the budget and the most qualified traffic in the account.',
  },
  {
    phase: 'Measurement',
    heading: 'Looked beyond cost per lead.',
    body: 'Reconciled registrations across the Meta lead forms and the direct registration platform, accounting for duplicate sign-ups and for the multiple attendees a single form often represented. That reconciliation is what turned a lead count into a registration count.',
  },
]

const campaigns = [
  { name: 'Leads — main', job: 'Registration volume', spend: '₹1,17,253', result: '2,097 leads', rate: '₹56 / lead' },
  { name: 'Leads — broad', job: 'Late-stage scale', spend: '₹34,201', result: '466 leads', rate: '₹73 / lead' },
  { name: 'Awareness', job: 'Top-of-funnel reach', spend: '₹51,123', result: '41,479 views', rate: '₹1.23 / view' },
  { name: 'Engagement — Reels', job: 'Attention at scale', spend: '₹55,508', result: '2.91L ThruPlays', rate: '₹0.19 / play' },
  { name: 'Google Search', job: 'Intent capture', spend: '₹5,462', result: '1,245 clicks', rate: '₹4.09 / click' },
]

const signals = [
  { value: '32.8%', label: 'Google Search click-through rate — roughly one in three people who saw the ad clicked it' },
  { value: '86%', label: 'Share of Meta form leads that came through Instagram placements' },
  { value: '91%', label: "Registrants who completed the child's age-group field on the form" },
]

export default function LiteraryFestivalCaseStudy() {
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
            Events · Lead Generation · Meta &amp; Google Ads
          </p>
          <h1 className="mt-4 font-display italic text-[2.2rem] font-normal leading-snug tracking-tight text-ink sm:text-[2.8rem]">
            11K+ registrations. ₹18–23 per registered person. One connected funnel.
          </h1>
          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Period</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">~7-week pre-event campaign</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Channels</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">Meta Ads · Google Ads</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-label text-muted">Engagement</p>
              <p className="mt-1.5 text-[14px] font-medium text-ink">Freelance</p>
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
              <p className="font-display italic text-[2.2rem] font-normal text-ink">11K–12.7K</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Consolidated registrations, estimated after de-duplication</p>
            </div>
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">₹18–23</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Estimated Meta cost per registered person</p>
            </div>
            <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
              <p className="font-display italic text-[2.2rem] font-normal text-ink">~80%</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">Registrations from outside the existing community</p>
            </div>
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-muted/70">
            Figures come from an anonymised pre-event campaign report. Registration totals and cost per registered
            person are estimates and are labelled as such throughout. The report was prepared before the event, so
            actual attendance was not available — no attendance figure is claimed here.
          </p>
        </div>
      </section>

      {/* Context */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Context</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            The problem wasn't just generating leads.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-loose text-muted">
            <p>
              A free-entry children's literary festival needed to attract thousands of families from beyond its
              existing community. I built and ran the paid acquisition strategy across Meta Ads and Google Ads.
            </p>
            <p>
              For a free event, registrations are easy to overcount as success. One parent could register several
              family members on a single form, and someone who registered wasn't necessarily going to attend. Volume
              on its own would have said very little about whether the campaign was working.
            </p>
            <p>
              So the brief came down to two things running at once: acquire registrations efficiently, and reach
              families who did not already know the festival — then measure both in a unit that actually meant
              something.
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

      {/* Campaign structure */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">How the budget worked</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            Five campaigns, five different jobs.
          </h2>
          <p className="mt-4 text-[15px] leading-loose text-muted">
            Four Meta campaigns and one Google Search campaign, each measured against what it was there to do rather
            than against each other.
          </p>
          <div className="mt-8 space-y-3">
            {campaigns.map((c) => (
              <div
                key={c.name}
                className="grid gap-3 rounded-[18px] border border-subtle bg-white px-6 py-5 shadow-soft sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
              >
                <div>
                  <p className="text-[14px] font-medium text-ink">{c.name}</p>
                  <p className="mt-1 text-[13px] text-muted">{c.job}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1 sm:justify-end">
                  <p className="text-[13px] text-muted/80">{c.spend}</p>
                  <p className="text-[13.5px] font-medium text-ink">{c.result}</p>
                  <p className="font-display italic text-[1.15rem] font-normal text-ink">{c.rate}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted/70">
            Blended Meta cost per lead across both lead campaigns came in at roughly ₹59, against a planned ₹35–55 —
            on plan for a free event, and the starting point for the number that mattered more.
          </p>
        </div>
      </section>

      {/* The measurement shift */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">What made the difference</p>
            <p className="mt-6 font-display italic text-[1.4rem] font-normal leading-snug text-ink">
              Changing the unit of measurement.
            </p>
            <p className="mt-5 text-[15.5px] leading-loose text-muted">
              A ₹59 lead does not sound especially efficient until you account for the family members that lead
              represents. Parents registered children and other adults on the same form. Reconciled against the
              registration platform and de-duplicated, the estimated acquisition cost worked out to ₹18–23 per
              registered person.
            </p>
            <p className="mt-4 text-[15.5px] leading-loose text-muted">
              The second shift was making the two platforms play different positions instead of competing for the
              same credit. Meta generated demand from a standing start; Search captured the intent that demand
              created. Approximately four in five registrations came from outside the organiser's existing community,
              which suggests the campaign was reaching beyond the audience the festival already had.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: '2,563', label: 'Meta form leads' },
                { value: '~₹59', label: 'Blended Meta cost per lead' },
                { value: '₹18–23', label: 'Estimated cost per registered person' },
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

      {/* Signals */}
      <section className="border-t border-subtle px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Supporting signals</p>
          <h2 className="mt-5 font-display italic text-[1.7rem] font-normal tracking-tight text-ink">
            The form told us who was actually coming.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {signals.map((s) => (
              <div key={s.value} className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
                <p className="font-display italic text-[1.8rem] font-normal text-ink">{s.value}</p>
                <p className="mt-2 text-[13px] leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted/70">
            Search was not creating demand — it was removing steps between an intent that already existed and the
            registration form. The age-group completion rate mattered for a different reason: it suggested the forms
            were being filled in by parents with a real event in mind, not by stray clicks.
          </p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="border-t border-subtle bg-white/50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-12">
            <p className="text-[11.5px] uppercase tracking-label text-muted">What this shows</p>
            <p className="mt-5 text-[16px] leading-loose text-muted">
              For a free event, cost per lead is the wrong denominator. The number worth optimising is the cost of
              getting one person registered, and that only becomes visible once you reconcile the ad platform against
              the registration platform and count the people each form represents.
            </p>
            <p className="mt-4 text-[16px] leading-loose text-muted">
              The other half of it is giving each platform a job it is actually good at. Meta built demand where none
              existed; Search picked up the intent cheaply once it did. Run that way — and measured per registered
              person rather than per lead — an estimated 11,000-plus registrations came in at a cost a free event
              could justify.
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-muted/70">
              Freelance engagement. My role: media strategy, campaign setup and creative direction across Meta Ads
              and Google Ads. Client and event identifiers withheld.
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
