import { Container, CtaBand, Accordion, PageHero, SectionHead, Timeline, useTitle } from '../components/ui'
import { faqs, pasos } from '../data/contenido'

export default function Proceso() {
  useTitle('Proceso | Lhambda')
  return (
    <>
      <PageHero eyebrow="Proceso" title="Cómo trabajamos, paso a paso." text="Un camino claro desde la primera charla hasta el producto funcionando, y después." />
      <section className="py-16 sm:py-24">
        <Container><Timeline steps={pasos} /></Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos." />
          <Accordion items={faqs} />
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
