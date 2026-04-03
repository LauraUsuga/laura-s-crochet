function ContactSection() {
  return (
    <section
      id="contacto"
      className="rounded-3xl border border-line bg-gradient-to-r from-blush/72 via-surface to-surface px-7 py-10 md:px-12"
    >
      <h2 className="text-4xl font-semibold md:text-5xl">Hablemos de tu idea</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Esta pagina es de presentacion, asi que puedes usarla como vitrina de tu trabajo, mostrar colecciones y
        redirigir a tus canales de contacto o redes sociales.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#"
          className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-ink"
        >
          Instagram
        </a>
        <a
          href="#"
          className="rounded-full border border-rose bg-rose px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-rose/85"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </section>
  )
}

export default ContactSection
