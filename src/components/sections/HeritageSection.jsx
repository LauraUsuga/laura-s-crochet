function HeritageSection({ story }) {
  return (
    <section className="woven-panel px-7 py-10 md:px-12">
      <p className="inline-block rounded-full bg-rose/25 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-ink">
        Herencia y motivacion
      </p>
      <h2 className="mt-3 text-4xl font-semibold md:text-5xl">{story.title}</h2>
      <blockquote className="mt-6 rounded-2xl border border-line bg-surface/80 px-5 py-5 text-xl font-semibold leading-relaxed text-ink md:text-2xl">
        "{story.quote}"
      </blockquote>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{story.body}</p>
    </section>
  )
}

export default HeritageSection
