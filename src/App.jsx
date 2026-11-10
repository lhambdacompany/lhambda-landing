import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CursorGlow } from './components/fx'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Soluciones from './pages/Soluciones'
import Proyectos from './pages/Proyectos'
import Proceso from './pages/Proceso'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

export default function App() {
  const location = useLocation()
  return (
    <>
      <CursorGlow />
      <Navbar />
      {/* barra de luz que cruza la parte de arriba en cada cambio de página */}
      <motion.div key={`barra-${location.pathname}`} aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent to-glow shadow-[0_0_12px_#7dd3fc]" initial={{ scaleX: 0, opacity: 1 }} animate={{ scaleX: 1, opacity: [1, 1, 0] }} transition={{ duration: 1, ease: 'easeOut' }} />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div key={location.pathname} initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -16, filter: 'blur(10px)' }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
          <main>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/soluciones" element={<Soluciones />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/proceso" element={<Proceso />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
