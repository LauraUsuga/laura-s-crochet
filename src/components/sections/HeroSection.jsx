function HeroSection() {
  return (
    <section className="woven-panel animate-fadeUp px-7 py-10 md:px-12 md:py-14">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] md:block">
        <img
          src="/fotohero.jpg"
          alt="Detalle de una pieza tejida a mano"
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-center"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.12) 14%, rgba(0, 0, 0, 0.62) 32%, black 52%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.12) 14%, rgba(0, 0, 0, 0.62) 32%, black 52%)',
          }}
        />
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-surface via-surface/80 to-transparent blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-l from-cream/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-stretch">
        <div>
          <p className="mb-3 inline-block rounded-full bg-rose/25 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-ink">
            Presentacion de marca
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[0.95] text-ink md:text-7xl">
            Creaciones tejidas que cuentan historias.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Laura&apos;s Crochet es un espacio dedicado al crochet artesanal: amigurumis con personalidad, prendas
            cuidadas y llaveros hechos a mano para momentos especiales.
          </p>
          <a
            href="/contacto"
            className="mt-7 inline-flex rounded-full border border-rose bg-rose px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:bg-rose/85"
          >
            Pedir por WhatsApp
          </a>
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  )
}

export default HeroSection
