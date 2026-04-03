import { brand, navigation } from '../../ui-system/tokens/theme'
import { NavLink } from 'react-router-dom'

function Header({ isDark, onToggleTheme }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/85 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 md:px-10">
        <NavLink to="/" aria-label={`Ir al inicio de ${brand.name}`}>
          <img
            src="/laura%27s%20crochet.png"
            alt="Logo de Laura's Crochet"
            className="h-16 w-16 object-contain md:h-20 md:w-20"
          />
        </NavLink>

        <div className="flex items-center gap-2 md:gap-3">
          <nav className="flex items-center gap-1 md:gap-2" aria-label="Navegacion principal">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 text-xs font-bold transition md:px-3.5 md:text-sm ${
                    isActive ? 'bg-rose/28 text-ink' : 'text-ink hover:bg-rose/18 hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={onToggleTheme}
            title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="rounded-full border border-line bg-surface p-2 text-ink transition hover:-translate-y-0.5 hover:bg-rose/22 hover:shadow-soft"
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2.5v2.5M12 19v2.5M21.5 12H19M5 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.6 14.8A8.7 8.7 0 1 1 9.2 3.4a7.2 7.2 0 0 0 11.4 11.4Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
