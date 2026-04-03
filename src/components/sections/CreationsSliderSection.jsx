import { useEffect, useState } from 'react'

function CreationsSliderSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!items.length) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [items.length])

  if (!items.length) {
    return null
  }

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="inline-block rounded-full bg-rose/25 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-ink">
            Creaciones destacadas
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-line bg-blush/35 px-4 py-6 md:px-8 md:py-8">
        <div className="relative min-h-[38rem] md:min-h-[30rem]">
          {items.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <article
                key={item.name}
                className={`absolute inset-0 overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-soft transition-all duration-700 md:p-8 ${
                  isActive
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none translate-y-4 scale-95 opacity-0'
                }`}
                aria-hidden={!isActive}
              >
                <div className="grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center">
                  <div className="h-64 overflow-hidden rounded-2xl bg-blush/35 md:h-full md:min-h-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-rose">{item.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink md:text-3xl">{item.name}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{item.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-rose' : 'w-2.5 bg-line hover:bg-muted'
                }`}
                aria-label={`Ver ${item.name}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevious}
              className="rounded-full border border-line bg-surface p-2 text-ink transition hover:bg-rose/22"
              aria-label="Creacion anterior"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m14.5 5-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full border border-line bg-surface p-2 text-ink transition hover:bg-rose/22"
              aria-label="Siguiente creacion"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9.5 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreationsSliderSection
