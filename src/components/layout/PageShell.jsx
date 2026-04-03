function PageShell({ children, header, footer }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-rose/18 via-blush/18 to-transparent" />
      {header}
      <main className="mx-auto w-full max-w-6xl space-y-14 px-6 pb-16 pt-28 md:px-10 md:pt-32">{children}</main>
      {footer}
    </div>
  )
}

export default PageShell
