import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'

// Red de partículas que se conectan y se apartan del mouse.
export function ParticleField({ className = '', interactive = true }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, raf = 0, on = true, pts = []
    const m = { x: -999, y: -999 }
    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = c.clientWidth; h = c.clientHeight
      c.width = w * dpr; c.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.round(Math.min(95, (w * h) / 15000))
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.3 + 0.4 }))
    }
    const frame = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx; p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
          const dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy)
          if (interactive && d < 150 && d > 0) { p.x += (dx / d) * 0.9; p.y += (dy / d) * 0.9 }
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fillStyle = 'rgba(220,232,255,.75)'; ctx.fill()
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 125) {
            ctx.strokeStyle = `rgba(110,160,255,${(1 - d / 125) * 0.3})`
            ctx.lineWidth = 0.7
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      if (on && !reduce) raf = requestAnimationFrame(frame)
    }
    const move = (e) => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top }
    const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; cancelAnimationFrame(raf); if (on) frame() })
    size(); frame(); io.observe(c)
    window.addEventListener('resize', size)
    window.addEventListener('pointermove', move)
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', size); window.removeEventListener('pointermove', move) }
  }, [interactive])
  return <canvas ref={ref} aria-hidden className={`absolute inset-0 h-full w-full ${className}`} />
}

// Resplandor suave que sigue al cursor (solo con mouse).
export function CursorGlow() {
  const x = useMotionValue(-600), y = useMotionValue(-600)
  const sx = useSpring(x, { stiffness: 90, damping: 22 }), sy = useSpring(y, { stiffness: 90, damping: 22 })
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const move = (e) => { x.set(e.clientX - 320); y.set(e.clientY - 320) }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])
  return <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-0 h-[640px] w-[640px] rounded-full bg-accent/[0.09] blur-[110px]" />
}

// Tarjeta con foco de luz que sigue al mouse.
export function SpotCard({ className = '', children, as: Tag = 'div', ...rest }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return <Tag onMouseMove={move} className={`card-spot ${className}`} {...rest}>{children}</Tag>
}

export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

// Palabras que se encienden a medida que se hace scroll.
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">{children}</motion.span>
}
export function ScrollWords({ text, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>)}
    </p>
  )
}

// Título que entra palabra por palabra.
export function WordsIn({ text, className = '', wordClass = '', delay = 0 }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {text.split(' ').map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.14em] align-bottom">
            <motion.span className={`inline-block ${wordClass}`} initial={{ y: '115%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.85, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}>
              {w}&nbsp;
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  )
}
