import { useState } from 'react'
import { AtSign, Mail, MessageCircle } from 'lucide-react'
import { Reveal, SpotCard } from '../components/fx'
import { Btn, Container, PageHero, useTitle } from '../components/ui'
import { contact, mailto, wa } from '../data/contenido'

const campo = 'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-ink-3 outline-none transition focus:border-glow/60 focus:bg-white/[0.06]'

export default function Contacto() {
  useTitle('Contacto | Lhambda')
  const [f, setF] = useState({ nombre: '', empresa: '', mensaje: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const quien = f.nombre ? `Hola, soy ${f.nombre}${f.empresa ? ` de ${f.empresa}` : ''}. ` : 'Hola. '
  const texto = `${quien}${f.mensaje || 'Quiero consultar por un desarrollo.'}`
  const info = [
    { icon: MessageCircle, titulo: 'WhatsApp', valor: contact.phone, href: wa('Hola, quiero consultar por un desarrollo.') },
    { icon: Mail, titulo: 'Email', valor: contact.email, href: `mailto:${contact.email}` },
    { icon: AtSign, titulo: 'Instagram', valor: contact.instagramUser, href: contact.instagram },
  ]
  return (
    <>
      <PageHero eyebrow="Contacto" title="Hablemos de tu proyecto." text="Contanos qué querés construir. Elegí el medio que prefieras y seguimos por ahí." />
      <section className="pb-28">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <SpotCard className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight">Contanos tu idea</h2>
              <div className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-ink-2">Tu nombre<input className={`${campo} mt-2`} value={f.nombre} onChange={set('nombre')} autoComplete="name" /></label>
                  <label className="block text-sm text-ink-2">Empresa<input className={`${campo} mt-2`} value={f.empresa} onChange={set('empresa')} autoComplete="organization" /></label>
                </div>
                <label className="block text-sm text-ink-2">¿Qué querés construir?<textarea rows={5} className={`${campo} mt-2 resize-none`} value={f.mensaje} onChange={set('mensaje')} placeholder="Por ejemplo: un sistema para gestionar turnos y avisar por WhatsApp." /></label>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Btn href={wa(texto)}>Enviar por WhatsApp</Btn>
                <Btn variant="ghost" href={mailto('Consulta desde el sitio', texto)}>Enviar por mail</Btn>
              </div>
              <p className="mt-5 text-sm text-ink-3">Se abre tu WhatsApp o tu correo con el mensaje listo para enviar.</p>
            </SpotCard>
          </Reveal>
          <div className="space-y-4">
            {info.map(({ icon: Icon, titulo, valor, href }, i) => (
              <Reveal key={titulo} delay={i * 0.07}>
                <SpotCard as={href ? 'a' : 'div'} {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})} className="flex items-center gap-5 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/[0.04] text-glow"><Icon className="h-5 w-5" /></span>
                  <span><span className="block font-mono text-xs text-ink-3">{titulo}</span><span className="mt-1 block text-ink">{valor}</span></span>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
