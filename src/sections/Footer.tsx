import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { scrollToTop } from '../lib/scroll'

const EMAIL = 'lostvoxmusic@gmail.com'
const TG = 'https://t.me/nobodycaresmusic'

function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 }), sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })
  const onMove = (e: React.MouseEvent) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; x.set((e.clientX - (r.left + r.width / 2)) * 0.4); y.set((e.clientY - (r.top + r.height / 2)) * 0.4) }
  const reset = () => { x.set(0); y.set(0) }
  return (
    <motion.a ref={ref} href={TG} target="_blank" rel="noopener noreferrer" data-cursor onMouseMove={onMove} onMouseLeave={reset} style={{ x: sx, y: sy }} className="group relative inline-flex items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#d7ff3f] text-[#0e0e0e] shrink-0">
      <span className="absolute inset-2 rounded-full border border-[#0e0e0e]/20 transition-transform duration-500 group-hover:scale-110" />
      <span className="text-center text-[12px] md:text-sm font-medium tracking-[0.18em] uppercase leading-relaxed">Write me<br />on Telegram</span>
    </motion.a>
  )
}

const menu: [string, string][] = [['Work', '#work'], ['About', '#about'], ['Disciplines', '#disciplines'], ['Products', '#products'], ['Music', '#music'], ['Experience', '#experience']]

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], [-120, 0])
  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden bg-[#0e0e0e]">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] rounded-full bg-[#d7ff3f] opacity-[0.05] blur-[140px] pointer-events-none" />
      <motion.div style={{ y }} className="px-6 md:px-10 pt-28 md:pt-44 pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
          <h2 className="font-display font-medium leading-[0.88] tracking-[-0.02em]"><span className="block text-[17vw] lg:text-[11vw]">LET’S</span><span className="block text-[17vw] lg:text-[11vw] text-stroke">TALK</span></h2>
          <div className="lg:pr-[6vw] lg:pt-[6vw]"><MagneticButton /></div>
        </div>
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-10">
          <div><div className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4">Looking for</div><p>Senior / Lead Product Designer</p><p className="mt-1">Product Builder</p><p className="mt-1">Creative / Art Director</p></div>
          <div><div className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4">Best fit</div><p>Complex B2C & B2B</p><p className="mt-1">iGaming, fintech, music</p><p className="mt-1">AI products & tools</p></div>
          <div><div className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4">Contact</div><a data-cursor href={`mailto:${EMAIL}`} className="block break-all hover:text-[#d7ff3f] transition-colors">{EMAIL}</a><a data-cursor href={TG} target="_blank" rel="noopener noreferrer" className="block mt-2 hover:text-[#d7ff3f] transition-colors">Telegram: @nobodycaresmusic</a><a data-cursor href="https://www.behance.net/mikesabad" target="_blank" rel="noopener noreferrer" className="block mt-2 hover:text-[#d7ff3f] transition-colors">Behance ↗</a></div>
          <div><div className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4">Menu</div>{menu.map(([l, h]) => <button key={l} data-cursor onClick={() => document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' })} className="block mt-1 first:mt-0 text-left hover:text-[#d7ff3f] transition-colors">{l}</button>)}</div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-[#8a877f] border-t border-white/10 pt-6"><span>© 2026 Mike Sabadash</span><span className="hidden md:inline">Moscow · Remote</span><button data-cursor onClick={() => scrollToTop(false)} className="hover:text-[#eae7e0] transition-colors">Back to top ↑</button></div>
      </motion.div>
    </footer>
  )
}
