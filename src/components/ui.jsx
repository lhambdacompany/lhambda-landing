import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import { ParticleField, Reveal, WordsIn } from './fx'
import { contact, tech, wa } from '../data/contenido'

export const useTitle = (t) => useEffect(() => { document.title = t }, [t])

export const Container = ({ className = '', children }) => (
  <div className={`relative mx-auto w-full max-w-[76rem] px-5 sm:px-8 ${className}`}>{children}</div>
)

export function Btn({ to, href, variant = 'primary', children, className = '' }) {
  const base = 'group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition'
  const look = variant === 'primary' ? 'btn-glow bg-white text-black hover:bg-white/90' : 'border border-white/20 text-white hover:border-glow/60 hover:bg-white/5'
  const inner = <>{children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
  const cls = `${base} ${look} ${className}`
  return to
    ? <Link to={to} className={cls}>{inner}</Link>
    : <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{inner}</a>
}

export const Eyebrow = ({ children }) => (
  <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs text-glow"><span className="h-px w-6 bg-glow/60" />{children}</p>
)

export function SectionHead({ eyebrow, title, text, center = false }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-ink-2">{text}</p>}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div className="grid-bg absolute inset-0 -z-10" />
      <ParticleField className="-z-10 opacity-70" />
      <div className="absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"><WordsIn text={title} /></h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{text}</motion.p>
      </Container>
    </section>
  )
}

export function Marquee() {
  const items = [...tech, ...tech]
  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] py-7 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-14">
        {items.map((t, i) => <span key={i} className="whitespace-nowrap text-xl font-medium text-ink-3 transition hover:text-white sm:text-2xl">{t}</span>)}
      </div>
    </div>
  )
}

export function CtaBand({ title = '¿Tenés un proceso que merece ser software?', text = 'Contanos qué querés construir. Lo analizamos y te proponemos el camino.' }) {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      <div className="grid-bg absolute inset-0 -z-10" />
      <ParticleField className="-z-10 opacity-60" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-2">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Btn to="/contacto">Contanos tu idea</Btn>
            <Btn variant="ghost" href={wa('Hola, vi el sitio de Lhambda y quiero consultar por un desarrollo.')}>Escribir por WhatsApp</Btn>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((it, i) => (
        <div key={it.q}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition hover:text-glow">
            {it.q}
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="shrink-0 text-ink-2"><Plus className="h-5 w-5" /></motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                <p className="max-w-2xl pb-6 leading-relaxed text-ink-2">{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

// Línea de tiempo que se va encendiendo con el scroll.
export function Timeline({ steps }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[19px] top-0 h-full w-px bg-white/10 md:left-1/2" />
      <motion.div style={{ height: h }} className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-accent to-glow shadow-[0_0_14px_#7dd3fc] md:left-1/2" />
      <ol className="space-y-14">
        {steps.map((s, i) => (
          <li key={s.titulo} className="relative grid gap-4 pl-14 md:grid-cols-2 md:gap-24 md:pl-0">
            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-glow/50 bg-bg font-mono text-sm text-glow shadow-[0_0_20px_rgba(125,211,252,.25)] md:left-1/2 md:-translate-x-1/2">{i + 1}</span>
            <Reveal className={i % 2 ? 'md:col-start-2' : 'md:text-right'}>
              <h3 className="text-2xl font-semibold">{s.titulo}</h3>
              <p className="mt-2 leading-relaxed text-ink-2">{s.texto}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}

export { contact }
