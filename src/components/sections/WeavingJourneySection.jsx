function WeavingJourneySection({ moments }) {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-semibold md:text-5xl">Del Hilo a la pieza final</h2>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <article className="woven-panel p-4 md:p-5">
          <div className="h-full rounded-2xl border border-line bg-gradient-to-br from-blush/70 via-surface to-surface p-3 md:p-4">
            <div className="flex h-full items-center justify-center">
              <video
                className="aspect-[9/16] h-full w-auto max-h-[34rem] rounded-xl border border-line bg-surface object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Video del proceso de tejido"
              >
                <source src="/proceso.mp4" type="video/mp4" />
                Tu navegador no soporta la reproduccion de video.
              </video>
            </div>
          </div>
        </article>

        <div className="grid h-full gap-4 sm:grid-cols-2 sm:grid-rows-2">
          {moments.map((moment) => (
            <article key={moment.title} className="group relative h-full min-h-[14rem] overflow-hidden rounded-2xl border border-line bg-surface shadow-soft sm:min-h-0">
              {moment.video ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={moment.title}
                >
                  <source src={moment.video} type="video/mp4" />
                  Tu navegador no soporta la reproduccion de video.
                </video>
              ) : moment.image ? (
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blush/80 via-surface to-rose/15" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-xl font-semibold text-white">{moment.title}</h3>
                {moment.description ? <p className="mt-1 text-sm leading-relaxed text-white/90">{moment.description}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeavingJourneySection
