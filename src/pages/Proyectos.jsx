import { Check } from 'lucide-react'
import { Reveal, SpotCard } from '../components/fx'
import { RouteMap } from '../components/visuals'
import { Btn, Container, CtaBand, Eyebrow, PageHero, SectionHead, useTitle } from '../components/ui'
import { carpuling } from '../data/contenido'

export default function Proyectos() {
  useTitle('Proyectos | Lhambda')
  return (
    <>
      <PageHero eyebrow="Proyectos" title="Lo que construimos." text="Productos reales, de la idea a las tiendas de aplicaciones." />
      <section className="pb-16 sm:pb-24">
        <Container>
          <Reveal>
            <SpotCard className="p-6 sm:p-10">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <Eyebrow>Movilidad</Eyebrow>
                  <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">{carpuling.titulo}</h2>
                  <p className="mt-4 text-xl text-ink-2">{carpuling.resumen}</p>
                  <p className="mt-6 leading-relaxed text-ink-2">{carpuling.texto}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {carpuling.stack.map((t) => <span key={t} className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-ink-2">{t}</span>)}
                  </div>
                </div>
                <RouteMap className="w-full rounded-2xl border border-white/10 bg-black/30" />
              </div>
            </SpotCard>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHead eyebrow="Qué construimos" title="Una plataforma completa, no solo una app." text="Detrás de lo que ve el usuario hay un servidor, un panel de control y mucha lógica de negocio." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {carpuling.capacidades.map((c, i) => (
              <Reveal key={c} delay={(i % 3) * 0.07}>
                <SpotCard className="flex items-center gap-4 p-6">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-glow/40 text-glow"><Check className="h-4 w-4" /></span>
                  <span className="text-ink-2">{c}</span>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <SpotCard className="p-10 text-center sm:p-16">
              <p className="font-mono text-xs text-glow">El próximo</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Tu proyecto.</h2>
              <p className="mx-auto mt-4 max-w-xl text-ink-2">Contanos qué necesitás resolver. Diseñamos la solución y la construimos con vos.</p>
              <div className="mt-8"><Btn to="/contacto">Empezar</Btn></div>
            </SpotCard>
          </Reveal>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
