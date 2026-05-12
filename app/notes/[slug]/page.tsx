import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { notes } from '../../data/notes'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = notes.find((n) => n.slug === params.slug)
  if (!note) return {}
  return { title: note.title, description: note.excerpt }
}

export async function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }))
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function readingTime(body: string[]): number {
  return Math.ceil(body.join(' ').split(/\s+/).length / 200)
}

export default function NotePage({ params }: Props) {
  const note = notes.find((n) => n.slug === params.slug)
  if (!note) notFound()

  const currentIndex = notes.findIndex((n) => n.slug === params.slug)
  const prev = notes[currentIndex + 1]
  const next = notes[currentIndex - 1]

  return (
    <>
      <section className="px-5 pb-10 pt-32 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-ink"
          >
            <span aria-hidden>←</span> All notes
          </Link>
          <p className="mt-8 text-[11.5px] uppercase tracking-label text-muted">{note.category}</p>
          <h1 className="mt-4 font-display italic text-[2rem] font-normal leading-snug tracking-tight text-ink sm:text-[2.4rem]">
            {note.title}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <p className="text-[13px] text-muted/70">{formatDate(note.date)}</p>
            <span className="h-1 w-1 rounded-full bg-subtle" />
            <p className="text-[13px] text-muted/70">{readingTime(note.body)} min read</p>
          </div>
        </div>
      </section>

      <section className="border-t border-subtle px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {note.body.map((paragraph, i) => (
              <p key={i} className="text-[16px] leading-loose text-ink/85">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-16 border-t border-subtle pt-10">
            <div className="flex items-start justify-between gap-8">
              {next ? (
                <Link href={`/notes/${next.slug}`} className="group max-w-[45%]">
                  <p className="text-[11px] uppercase tracking-label text-muted">Previous</p>
                  <p className="mt-2 text-[14px] font-medium text-ink group-hover:underline underline-offset-4">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {prev ? (
                <Link href={`/notes/${prev.slug}`} className="group max-w-[45%] text-right">
                  <p className="text-[11px] uppercase tracking-label text-muted">Next</p>
                  <p className="mt-2 text-[14px] font-medium text-ink group-hover:underline underline-offset-4">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/notes"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink underline-offset-4 hover:underline"
            >
              <span aria-hidden>←</span> Back to all notes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
