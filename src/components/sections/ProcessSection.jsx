function ProcessSection({ steps }) {
  return (
    <section id="proceso" className="woven-panel px-7 py-10 md:px-12">
      <h2 className="text-4xl font-semibold md:text-5xl">Como nace cada creacion</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-2xl border border-line bg-surface/85 p-5">
            <p className="text-sm font-extrabold text-rose">0{index + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProcessSection
