import { Reveal, SpotCard } from '../components/fx'
import { Container, CtaBand, PageHero, useTitle } from '../components/ui'
import { industrias } from '../data/contenido'

export default function Soluciones() {
  useTitle('Soluciones por rubro | Lhambda')
  return (
    <>
      <PageHero eyebrow="Soluciones" title="Software pensado para tu rubro." text="Cada industria tiene sus propios cuellos de botella. Partimos de ahí para proponerte algo concreto, no genérico." />
      <section className="pb-16 sm:pb-24">
        <Container className="space-y-6">
          {industrias.map(({ icon: Icon, nombre, reto, solucion }, i) => (
            <Reveal key={nombre} delay={0.05}>
              <SpotCard className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr_1.1fr] lg:items-start">
                <div className="flex items-center gap-4 lg:block">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/[0.04] text-glow"><Icon className="h-6 w-6" /></span>
                  <h2 className="text-2xl font-semibold tracking-tight lg:mt-6">{nombre}</h2>
                </div>
                <div>
                  <p className="font-mono text-xs text-ink-3">El reto</p>
                  <p className="mt-2 leading-relaxed text-ink-2">{reto}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-glow">Lo que construimos</p>
                  <p className="mt-2 leading-relaxed text-ink-2">{solucion}</p>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand title="¿Tu rubro no está en la lista?" text="Contanos qué hacés a mano hoy. Si se puede automatizar o convertir en producto, te lo decimos." />
    </>
  )
}
