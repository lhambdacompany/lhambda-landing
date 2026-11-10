import { Link } from 'react-router-dom'
import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react'
import { contact, nav, wa } from '../data/contenido'
import { Container } from './ui'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] pb-10 pt-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/img/lhambda-white.png" alt="" width="34" height="34" className="h-8 w-8 object-contain" />
              <span className="text-xl font-semibold tracking-tight">Lhambda</span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-2">Estudio de software. Sistemas a medida, aplicaciones móviles y automatización con inteligencia artificial.</p>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs text-ink-3">Sitio</p>
            <ul className="space-y-3 text-ink-2">
              {[{ name: 'Inicio', to: '/' }, ...nav, { name: 'Contacto', to: '/contacto' }].map((n) => (
                <li key={n.to}><Link to={n.to} className="transition hover:text-white">{n.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs text-ink-3">Contacto</p>
            <ul className="space-y-3 text-ink-2">
              <li><a className="inline-flex items-center gap-2 transition hover:text-white" href={wa('Hola, quiero consultar por un desarrollo.')} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" />WhatsApp</a></li>
              <li><a className="inline-flex items-center gap-2 transition hover:text-white" href={`mailto:${contact.email}`}><Mail className="h-4 w-4" />{contact.email}</a></li>
              <li><a className="inline-flex items-center gap-2 transition hover:text-white" href={contact.instagram} target="_blank" rel="noreferrer"><AtSign className="h-4 w-4" />{contact.instagramUser}</a></li>
              <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{contact.place}</li>
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-white/[0.08] pt-6 text-sm text-ink-3">© 2026 Lhambda. Todos los derechos reservados.</p>
      </Container>
    </footer>
  )
}
