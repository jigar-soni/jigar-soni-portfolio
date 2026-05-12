import type { Metadata } from 'next'
import Link from 'next/link'
import { notes } from '../data/notes'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Thoughts on growth marketing, paid media, strategy, and business.',
}

const categories = Array.from(new Set(notes.map((n) => n.category)))

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

export default function NotesPage() {
  return (
    <>
      <section className="px-5 pb-14 pt-32 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Notes</p>
          <h1 className="mt-5 max-w-2xl font-display italic text-[2.6rem] font-normal leading-tight tracking-tight text-ink sm:text-[3rem]">
            What I think about.
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-loose text-muted">
            Notes on things I've observed working in D2C paid media. Not a newsletter — just things worth writing down.
          </p>
        </div>
      </section>

      <section className="border-t border-subtle px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
            {/* Topics sidebar */}
            <div className="lg:sticky lg:top-24 self-start">
              <p className="text-[11px] uppercase tracking-label text-muted">Topics</p>
              <ul className="mt-4 space-y-2.5">
                {categories.map((cat) => (
                  <li key={cat} className="text-[14px] text-muted">
                    {cat}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-subtle pt-8">
                <p className="text-[11px] uppercase tracking-label text-muted">Total</p>
                <p className="mt-2 text-[14px] text-muted">{notes.length} notes</p>
              </div>
            </div>

            {/* Notes list */}
            <div className="space-y-4">
              {notes.map((note) => (
                <Link
                  key={note.slug}
                  href={`/notes/${note.slug}`}
                  className="group block rounded-[20px] border border-subtle bg-white p-6 shadow-soft transition hover:border-muted/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-label text-muted">{note.category}</p>
                      <h2 className="mt-2.5 text-[16px] font-semibold leading-snug text-ink group-hover:underline underline-offset-4">
                        {note.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-muted">
                        {note.excerpt}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-[13px] text-muted/50 transition-colors group-hover:text-ink">
                      →
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <p className="text-[11.5px] text-muted/60">{formatDate(note.date)}</p>
                    <span className="h-1 w-1 rounded-full bg-subtle" />
                    <p className="text-[11.5px] text-muted/60">{readingTime(note.body)} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
