import { useEffect, useId } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Logo de Lhambda con anillos que orbitan y reacción al mouse.
export function OrbitLogo({ className = '' }) {
  const mx = useMotionValue(0), my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-1, 1], [9, -9]), { stiffness: 70, damping: 16 })
  const ry = useSpring(useTransform(mx, [-1, 1], [-13, 13]), { stiffness: 70, damping: 16 })
  useEffect(() => {
    const f = (e) => { mx.set((e.clientX / window.innerWidth) * 2 - 1); my.set((e.clientY / window.innerHeight) * 2 - 1) }
    window.addEventListener('pointermove', f)
    return () => window.removeEventListener('pointermove', f)
  }, [mx, my])
  const rings = [
    { inset: '0%', dur: 70, rev: false, style: 'border-dashed border-white/25' },
    { inset: '11%', dur: 46, rev: true, style: 'border-white/20' },
    { inset: '22%', dur: 30, rev: false, style: 'border-dashed border-accent/60' },
  ]
  return (
    <div className={`relative aspect-square w-full [perspective:1200px] ${className}`}>
      <motion.div style={{ rotateX: rx, rotateY: ry }} className="absolute inset-0 [transform-style:preserve-3d]">
        <div className="absolute inset-[20%] rounded-full bg-accent/25 blur-3xl" />
        {rings.map((r, i) => (
          <div key={i} className={`absolute rounded-full border ${r.style}`} style={{ inset: r.inset, animation: `orbit ${r.dur}s linear infinite ${r.rev ? 'reverse' : ''}` }}>
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-glow shadow-[0_0_16px_4px_rgba(125,211,252,.75)]" />
            {i === 1 && <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/80" />}
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2">
          <motion.img src="/img/lhambda-white.png" alt="Lhambda" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-full drop-shadow-[0_0_32px_rgba(94,140,255,.6)]" />
        </div>
      </motion.div>
    </div>
  )
}

// Capas de un sistema que se apilan en 3D.
export function DiagramSoftware() {
  return (
    <div className="relative mx-auto h-64 w-64 [perspective:900px]" aria-hidden>
      <div className="absolute inset-[14%] [transform-style:preserve-3d] [transform:rotateX(58deg)_rotateZ(-38deg)]">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} animate={{ z: [i * 38, i * 38 + 18, i * 38] }} transition={{ duration: 3.4, repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-2xl border border-white/25 bg-gradient-to-br from-accent/20 to-white/[0.04] p-4 shadow-[0_0_40px_rgba(94,140,255,.15)]">
            <div className="space-y-2">
              <div className="h-1.5 w-2/3 rounded bg-white/35" /><div className="h-1.5 w-1/2 rounded bg-white/20" /><div className="h-1.5 w-3/4 rounded bg-glow/50" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Pantalla de una app que se va completando.
export function DiagramMobile() {
  return (
    <div className="relative mx-auto h-72 w-36 rounded-[2rem] border border-white/25 bg-white/[0.03] p-3 shadow-[0_0_60px_rgba(94,140,255,.18)]" aria-hidden>
      <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/25" />
      <motion.div className="mb-3 h-12 rounded-xl bg-accent/35" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
      {[0, 1, 2].map((i) => (
        <motion.div key={i} className="mb-2 flex items-center gap-2 rounded-xl border border-white/10 p-2" initial={{ x: -24, opacity: 0 }} animate={{ x: [-24, 0, 0, 0], opacity: [0, 1, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 0.35, times: [0, 0.15, 0.85, 1] }}>
          <div className="h-6 w-6 rounded-lg bg-white/15" />
          <div className="flex-1 space-y-1"><div className="h-1.5 w-full rounded bg-white/25" /><div className="h-1.5 w-2/3 rounded bg-white/10" /></div>
        </motion.div>
      ))}
      <div className="absolute inset-x-3 bottom-3 flex justify-around rounded-xl bg-white/[0.06] py-2">
        {[0, 1, 2, 3].map((i) => <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-glow' : 'bg-white/30'}`} />)}
      </div>
      <motion.span className="absolute right-4 top-12 h-2.5 w-2.5 rounded-full bg-glow" animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    </div>
  )
}

// Nodos conectados con señales que viajan.
export function DiagramAI() {
  const sat = [[48, 62], [232, 72], [38, 192], [238, 208], [140, 24], [140, 258]]
  return (
    <svg viewBox="0 0 280 280" className="mx-auto h-64 w-64" aria-hidden>
      {sat.map(([x, y], i) => (
        <g key={i}>
          <line x1="140" y1="140" x2={x} y2={y} stroke="rgba(255,255,255,.14)" />
          <circle r="2.6" fill="#7dd3fc"><animateMotion dur={`${2.4 + i * 0.35}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" path={`M140 140 L${x} ${y}`} /></circle>
          <circle cx={x} cy={y} r="9" fill="#05060a" stroke="rgba(255,255,255,.4)" />
          <circle cx={x} cy={y} r="3" fill="#fff" opacity=".75" />
        </g>
      ))}
      <circle cx="140" cy="140" r="22" fill="#05060a" stroke="#5e8cff" strokeWidth="1.5" />
      <circle cx="140" cy="140" r="22" fill="none" stroke="#5e8cff"><animate attributeName="r" values="22;48" dur="2.8s" repeatCount="indefinite" /><animate attributeName="opacity" values=".6;0" dur="2.8s" repeatCount="indefinite" /></circle>
      <path d="M133 127 L148 154 M141 140 L133 154" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

// Ruta entre dos puntos que se dibuja y se recorre.
export function RouteMap({ className = '' }) {
  const id = useId().replace(/:/g, '')
  const d = 'M70 250 C 180 250, 190 110, 300 140 S 460 230, 530 80'
  return (
    <svg viewBox="0 0 600 340" className={className} aria-hidden>
      <defs><pattern id={`p${id}`} width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,.14)" /></pattern></defs>
      <rect width="600" height="340" fill={`url(#p${id})`} />
      <path id={`r${id}`} d={d} fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="2" strokeDasharray="4 8" />
      <motion.path d={d} fill="none" stroke="#7dd3fc" strokeWidth="2.6" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 6px #7dd3fc)' }}
        initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 7, repeat: Infinity, times: [0, 0.55, 0.9, 1], ease: 'easeInOut' }} />
      <circle r="6" fill="#fff"><animateMotion dur="7s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;0.55;1"><mpath href={`#r${id}`} /></animateMotion></circle>
      {[[70, 250, 'Origen'], [530, 80, 'Destino']].map(([x, y, t]) => (
        <g key={t}>
          <circle cx={x} cy={y} r="7" fill="#05060a" stroke="#fff" strokeWidth="2" />
          <circle cx={x} cy={y} r="7" fill="none" stroke="#7dd3fc"><animate attributeName="r" values="7;26" dur="2.6s" repeatCount="indefinite" /><animate attributeName="opacity" values=".8;0" dur="2.6s" repeatCount="indefinite" /></circle>
          <text x={x} y={y + 30} textAnchor="middle" fontSize="12" fill="#a3a9b8" fontFamily="JetBrains Mono, monospace">{t}</text>
        </g>
      ))}
    </svg>
  )
}

// Pulso de radar para mostrar una ubicación.
export function Radar({ label }) {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center" aria-hidden>
      {[0, 1, 2].map((i) => <span key={i} className="absolute inset-0 animate-radar rounded-full border border-accent/50" style={{ animationDelay: `${i * 1.2}s` }} />)}
      <span className="absolute inset-[28%] rounded-full border border-white/10" />
      <span className="absolute inset-[14%] rounded-full border border-dashed border-white/10" />
      <span className="relative h-3 w-3 rounded-full bg-glow shadow-[0_0_22px_7px_rgba(125,211,252,.75)]" />
      <span className="absolute bottom-[10%] font-mono text-xs text-ink-2">{label}</span>
    </div>
  )
}
