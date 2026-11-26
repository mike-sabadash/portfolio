import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// w/h of each trimmed logo file; height is derived so every mark has a similar optical area
const clients = [
  { name: 'National Lottery', src: './logos/national-lottery.svg', r: 3.76 },
  { name: 'Toyota', src: './logos/toyota.png', r: 6.09 },
  { name: 'Cadillac', src: './logos/cadillac.png', r: 1.61 },
  { name: 'LADA', src: './logos/lada.png', r: 2.47 },
  { name: 'Suzuki', src: './logos/suzuki.png', r: 2.24 },
  { name: 'LIME', src: './logos/lime.png', r: 2.73 },
  { name: 'Parimatch', src: './logos/parimatch.png', r: 3.14 },
  { name: 'MSI', src: './logos/msi.png', r: 4.05 },
]
const AREA = 2900 // px², visual weight per logo

function Letters({ text, delay, started }: { text: string; delay: number; started: boolean }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em]">
      {text.split('').map((ch, i) => (
        <motion.span key={i} className="inline-block" initial={{ y: '115%', rotate: 6 }} animate={started ? { y: 0, rotate: 0 } : {}} transition={{ duration: 0.9, delay: delay + i * 0.035, ease: [0.22, 1, 0.36, 1] }}>
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero({ started }: { started: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 220])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  return (
    <section id="top" ref={ref} className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-8 pt-28 overflow-hidden">
      <div className="absolute top-[-30%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#d7ff3f] opacity-[0.045] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4f5bff] opacity-[0.05] blur-[120px] pointer-events-none" />
      <motion.div style={{ y, opacity }} className="relative">
        <motion.div className="mb-10 md:mb-14" initial={{ opacity: 0, y: -14 }} animate={started ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.75, duration: 0.8 }}>
          <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#8a877f] mb-6">Brands I’ve designed and written music for</p>
          <div className="grid grid-cols-4 lg:grid-cols-8 items-center justify-items-center gap-x-6 md:gap-x-10 gap-y-7 max-w-[1180px] mx-auto" aria-label="Selected clients">
            {clients.map((c) => {
              const h = Math.round(Math.sqrt(AREA / c.r))
              return (
                <img
                  key={c.name}
                  src={c.src}
                  alt={c.name}
                  title={c.name}
                  style={{ height: `clamp(${Math.round(h * 0.62)}px, ${(h / 14.4).toFixed(2)}vw, ${h}px)` }}
                  className="w-auto opacity-55 hover:opacity-100 transition-opacity duration-500"
                />
              )
            })}
          </div>
        </motion.div>
        <div className="flex justify-between items-end mb-6 md:mb-10 gap-6">
          <motion.p className="max-w-[330px] text-[14px] md:text-[15px] leading-relaxed text-[#b5b2aa]" initial={{ opacity: 0, y: 20 }} animate={started ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9, duration: 0.8 }}>
            Product designer, art director and composer. I turn complex processes into products people get on the first try, make them look like they matter, and build them myself with AI.
          </motion.p>
          <motion.div className="hidden md:block relative w-28 h-28 shrink-0" initial={{ opacity: 0, scale: 0.6 }} animate={started ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.1, duration: 0.8 }}>
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow"><defs><path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" /></defs><text className="fill-[#8a877f] text-[9.5px] tracking-[0.22em] uppercase"><textPath href="#circ">Scroll to explore · Scroll to explore ·</textPath></text></svg>
            <div className="absolute inset-0 flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eae7e0" strokeWidth="1.5"><path d="M12 4v16m0 0l-6-6m6 6l6-6" /></svg></div>
          </motion.div>
        </div>
        <h1 className="font-display font-medium leading-[0.85] tracking-[-0.02em] select-none" aria-label="Mike Sabadash">
          <span className="block text-[21vw] md:text-[15.5vw]"><Letters text="MIKE" delay={0.15} started={started} /></span>
          <span className="block text-[17vw] md:text-[15.5vw] text-stroke"><Letters text="SABADASH" delay={0.4} started={started} /></span>
        </h1>
        <motion.div className="mt-8 md:mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5 text-[11px] tracking-[0.25em] uppercase text-[#8a877f]" initial={{ opacity: 0 }} animate={started ? { opacity: 1 } : {}} transition={{ delay: 1.3, duration: 0.8 }}>
          <span>Senior / Lead Product Designer</span><span className="hidden sm:inline">Product · Art direction · Music</span><span className="text-[#d7ff3f]">Open to new roles</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
