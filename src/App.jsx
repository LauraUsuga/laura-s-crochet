import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import PageShell from './components/layout/PageShell'
import { useTheme } from './hooks/useTheme'
import { Navigate, Route, Routes } from 'react-router-dom'
import CollectionsPage from './pages/CollectionsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProcessPage from './pages/ProcessPage'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <PageShell
      header={<Header isDark={isDark} onToggleTheme={toggleTheme} />}
      footer={<Footer />}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colecciones" element={<CollectionsPage />} />
        <Route path="/proceso-de-compra" element={<ProcessPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageShell>
  )
}

export default App
