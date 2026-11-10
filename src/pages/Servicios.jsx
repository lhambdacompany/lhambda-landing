import { Check } from 'lucide-react'
import { Reveal, SpotCard } from '../components/fx'
import { DiagramAI, DiagramMobile, DiagramSoftware } from '../components/visuals'
import { Container, CtaBand, Eyebrow, PageHero, SectionHead, useTitle } from '../components/ui'
import { planes, servicios } from '../data/contenido'

const visuales = { software: <DiagramSoftware />, mobile: <DiagramMobile />, ia: <DiagramAI /> }
const etiquetas = { software: 'Software', mobile: 'Mobile', ia: 'Automatización' }

export default function Servicios() {
  useTitle('Servicios | Lhambda')
  return (
    <>
      <PageHero eyebrow="Servicios" title="Software, móvil y automatización." text="Tres áreas que se combinan según lo que tu empresa necesita. Cada proyecto se diseña a medida." />
      {servicios.map((s, i) => (
        <section key={s.id} id={s.id} className="py-16 sm:py-24">
          <Container className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className={i % 2 ? 'lg:order-2' : ''}>
              <Eyebrow>{etiquetas[s.id]}</Eyebrow>
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">{s.titulo}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{s.texto}</p>
              <ul className="mt-8 space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 border-b border-white/[0.07] pb-3 text-ink-2"><Check className="h-4 w-4 shrink-0 text-glow" />{it}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className={i % 2 ? 'lg:order-1' : ''}>
              <SpotCard className="grid h-[26rem] place-items-center">
                <div className="grid-bg absolute inset-0" />
                <div className="relative scale-125">{visuales[s.id]}</div>
              </SpotCard>
            </Reveal>
          </Container>
        </section>
      ))}

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHead eyebrow="Después del lanzamiento" title="Mantenimiento y evolución." text="Un sistema vivo necesita cuidado. Elegís cuánto acompañamiento querés y presupuestamos a medida." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {planes.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 0.1} className="h-full">
                <SpotCard className={`h-full p-8 ${p.destacado ? 'border-glow/40 bg-accent/[0.06]' : ''}`}>
                  <h3 className="text-2xl font-semibold">{p.nombre}</h3>
                  <p className="mt-2 text-ink-2">{p.texto}</p>
                  <ul className="mt-6 space-y-3 text-sm text-ink-2">
                    {p.items.map((it) => <li key={it} className="flex items-center gap-2"><Check className="h-4 w-4 text-glow" />{it}</li>)}
                  </ul>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
