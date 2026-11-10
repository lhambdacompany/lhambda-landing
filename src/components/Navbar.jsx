import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/contenido'
import { Container } from './ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-white/[0.08] bg-bg/70 backdrop-blur-xl' : 'border-b border-transparent'}`}>
        <Container className="flex h-[4.5rem] items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Lhambda, inicio">
            <img src="/img/lhambda-white.png" alt="" width="34" height="34" className="h-8 w-8 object-contain" />
            <span className="text-lg font-semibold tracking-tight">Lhambda</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `relative rounded-full px-4 py-2 text-sm transition ${isActive ? 'text-white' : 'text-ink-2 hover:text-white'}`}>
                {({ isActive }) => (<>{n.name}{isActive && <motion.span layoutId="nav-activo" className="absolute inset-0 -z-10 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}</>)}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contacto" className="btn-glow hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 md:inline-block">Contacto</Link>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/15 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-bg/95 pt-24 backdrop-blur-xl md:hidden">
            <Container>
              <ul className="space-y-1">
                {[...nav, { name: 'Contacto', to: '/contacto' }].map((n, i) => (
                  <motion.li key={n.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i }}>
                    <Link to={n.to} className="block border-b border-white/10 py-5 text-3xl font-semibold tracking-tight">{n.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
