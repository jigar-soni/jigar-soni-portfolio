import type { Metadata } from 'next'
import favoritesData from '../data/favorites.json'

export const metadata: Metadata = {
  title: 'Finds',
  description:
    'A curated list of websites, writing, videos, books and tools that I genuinely enjoy and return to.',
}

function getFaviconUrl(url: string) {
  try {
    const domain = new URL(url).hostname
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
  } catch {
    return null
  }
}

export default function FavoritesPage() {
  return (
    <>
      <section className="px-5 pb-14 pt-32 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Finds</p>
          <h1 className="mt-5 max-w-2xl text-[2.5rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2.8rem]">
            Things I genuinely enjoy and return to.
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-loose text-muted">
            A running list of websites, writing, videos, and tools that have earned a permanent spot. Updated whenever something is worth sharing.
          </p>
        </div>
      </section>

      <section className="border-t border-subtle px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
            {/* Categories sidebar */}
            <div className="lg:sticky lg:top-24 self-start">
              <p className="text-[11px] uppercase tracking-label text-muted">Categories</p>
              <ul className="mt-4 space-y-2.5">
                {favoritesData.categories.map((cat) => (
                  <li key={cat.name} className="text-[14px] text-muted">
                    {cat.name}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-subtle pt-8">
                <p className="text-[11px] uppercase tracking-label text-muted">Total</p>
                <p className="mt-2 text-[14px] text-muted">
                  {favoritesData.categories.reduce((acc, c) => acc + c.items.length, 0)} finds
                </p>
              </div>
            </div>

            {/* Finds list */}
            <div className="space-y-14">
              {favoritesData.categories.map((category) => (
                <div key={category.name}>
                  <p className="mb-5 text-[11px] uppercase tracking-label text-muted">
                    {category.name}
                  </p>
                  <ul className="space-y-3">
                    {category.items.map((item) => {
                      const favicon = getFaviconUrl(item.url)
                      return (
                        <li key={item.url}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-4 rounded-[18px] border border-subtle bg-white p-5 shadow-soft transition hover:border-muted/50"
                          >
                            {favicon && (
                              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-subtle/60 bg-subtle/30">
                                <img
                                  src={favicon}
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="h-5 w-5 object-contain"
                                />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="text-[15px] font-semibold text-ink group-hover:underline underline-offset-4">
                                {item.title}
                              </p>
                              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                                {item.note}
                              </p>
                            </div>
                            <span className="mt-1 shrink-0 text-[13px] text-muted/40 transition-colors group-hover:text-ink">
                              ↗
                            </span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
