function CollectionsSection({ items }) {
  return (
    <section id="colecciones" className="space-y-6">
      <h2 className="text-4xl font-semibold md:text-5xl">Colecciones principales</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-3xl border border-line bg-blush/55 p-6 shadow-soft"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{item.note}</p>
            <h3 className="mt-2 text-3xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CollectionsSection
