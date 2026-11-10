import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { ParticleField, Reveal, ScrollWords, SpotCard, WordsIn } from '../components/fx'
import { DiagramAI, DiagramMobile, DiagramSoftware, OrbitLogo, RouteMap } from '../components/visuals'
import { Btn, Container, CtaBand, Eyebrow, Marquee, SectionHead, useTitle } from '../components/ui'
import { carpuling, industrias, pasos, servicios } from '../data/contenido'

const visuales = { software: <DiagramSoftware />, mobile: <DiagramMobile />, ia: <DiagramAI /> }

export default function Home() {
  useTitle('Lhambda | Software a medida para empresas')
  return (
    <>
      {/* Portada */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-20">
        <div className="grid-bg absolute inset-0 -z-10" />
        <ParticleField className="-z-10" />
        <div className="absolute -left-40 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[140px]" />
        <Container className="grid items-center gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-xs text-ink-2 backdrop-blur">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-glow" /></span>
              Estudio de software en Concordia, Argentina
            </motion.p>
            <h1 className="text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.4rem]">
              <WordsIn text="Convertimos problemas empresariales en" />{' '}
              <WordsIn text="software." wordClass="text-shine" delay={0.6} />
            </h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2">
              Sistemas a medida, aplicaciones móviles y automatización con inteligencia artificial. Del diagnóstico al producto funcionando.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4">
              <Btn to="/contacto">Empezar un proyecto</Btn>
              <Btn to="/servicios" variant="ghost">Ver qué hacemos</Btn>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <OrbitLogo className="mx-auto max-w-[32rem]" />
          </motion.div>
        </Container>
      </section>

      <Marquee />

      {/* Áreas */}
      <section className="py-28 sm:py-36">
        <Container>
          <SectionHead eyebrow="Qué hacemos" title="Tres áreas, un mismo estándar." text="Diseñamos, construimos y mantenemos el software que tu empresa necesita para trabajar mejor." />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.1} className="h-full">
                <SpotCard className="flex h-full flex-col p-7">
                  <div className="mb-8 grid h-72 place-items-center overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">{visuales[s.id]}</div>
                  <h3 className="text-2xl font-semibold tracking-tight">{s.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-ink-2">{s.resumen}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-2">
                    {s.items.slice(0, 3).map((it) => <li key={it} className="flex items-center gap-2"><Check className="h-4 w-4 text-glow" />{it}</li>)}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link to="/servicios" className="inline-flex items-center gap-1 text-sm font-medium text-white transition hover:text-glow">Conocer más <ArrowUpRight className="h-4 w-4" /></Link>
                  </div>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Manifiesto */}
      <section className="py-24 sm:py-32">
        <Container>
          <Eyebrow>Cómo pensamos</Eyebrow>
          <ScrollWords className="max-w-5xl text-3xl font-semibold leading-[1.2] tracking-tight sm:text-5xl" text="No vendemos horas de programación. Resolvemos problemas del negocio: ordenamos lo que hoy se hace a mano, conectamos lo que no se habla entre sí y construimos el producto que tu equipo y tus clientes van a usar todos los días." />
        </Container>
      </section>

      {/* Rubros */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHead eyebrow="Para quién" title="Soluciones para cada tipo de empresa." text="Conocemos los problemas típicos de cada rubro y partimos de ahí." />
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {industrias.map(({ icon: Icon, nombre, solucion, ancho }, i) => (
              <Reveal key={nombre} delay={(i % 3) * 0.08} className={ancho ? 'md:col-span-2' : ''}>
                <SpotCard className="h-full p-8">
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.04] text-glow"><Icon className="h-5 w-5" /></span>
                  <h3 className="text-xl font-semibold tracking-tight">{nombre}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-2">{solucion}</p>
                </SpotCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10"><Btn to="/soluciones" variant="ghost">Ver todas las soluciones</Btn></Reveal>
        </Container>
      </section>

      {/* Proyecto */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SpotCard className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <Eyebrow>Proyecto destacado</Eyebrow>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{carpuling.titulo}</h2>
                <p className="mt-3 text-lg text-ink-2">{carpuling.resumen}</p>
                <p className="mt-5 leading-relaxed text-ink-2">{carpuling.texto}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {carpuling.stack.map((t) => <span key={t} className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-ink-2">{t}</span>)}
                </div>
                <div className="mt-8"><Btn to="/proyectos" variant="ghost">Ver el proyecto</Btn></div>
              </div>
              <RouteMap className="w-full rounded-2xl border border-white/10 bg-black/30" />
            </SpotCard>
          </Reveal>
        </Container>
      </section>

      {/* Proceso */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHead eyebrow="Cómo trabajamos" title="Un proceso claro, de la idea al lanzamiento." />
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-5">
            {pasos.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.07} className="bg-bg">
                <div className="group h-full p-7 transition hover:bg-white/[0.03]">
                  <span className="font-mono text-sm text-glow">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
