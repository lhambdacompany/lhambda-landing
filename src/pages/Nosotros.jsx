import { Reveal, ScrollWords, SpotCard } from '../components/fx'
import { Radar } from '../components/visuals'
import { Container, CtaBand, Eyebrow, PageHero, SectionHead, useTitle } from '../components/ui'
import { contact, principios } from '../data/contenido'

export default function Nosotros() {
  useTitle('Nosotros | Lhambda')
  return (
    <>
      <PageHero eyebrow="Nosotros" title="Un estudio de software con los pies en la tierra." text="Lhambda nació para hacer software que se usa todos los días: sistemas que ordenan un negocio, apps que la gente abre desde el celular, automatizaciones que ahorran horas." />
      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>Qué nos mueve</Eyebrow>
          <ScrollWords className="max-w-5xl text-3xl font-semibold leading-[1.2] tracking-tight sm:text-5xl" text="Creemos que el buen software es el que desaparece: tu equipo hace su trabajo, tus clientes reciben respuesta y nadie piensa en la tecnología que hay detrás." />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHead eyebrow="Cómo lo hacemos" title="Principios de trabajo." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {principios.map((p, i) => (
              <Reveal key={p.titulo} delay={(i % 2) * 0.08} className="h-full">
                <SpotCard className="h-full p-8">
                  <h3 className="text-2xl font-semibold tracking-tight">{p.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-ink-2">{p.texto}</p>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Base en Concordia, trabajo en todo el país.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-2">Trabajamos de forma remota con empresas de distintas ciudades, con videollamadas y avances periódicos. La distancia no cambia la forma de trabajar.</p>
          </Reveal>
          <Reveal delay={0.1}><Radar label={contact.place} /></Reveal>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
