import { useEffect, useState } from 'react'

const THEME_KEY = 'lauras-crochet-theme'

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const stored = localStorage.getItem(THEME_KEY)

    if (stored === 'dark') {
      return true
    }

    if (stored === 'light') {
      return false
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light')
  }, [isDark])

  return {
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev),
  }
}
