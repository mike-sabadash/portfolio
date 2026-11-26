import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    n: '01',
    title: 'Product Design',
    desc: 'Complex flows that feel simple. Service journeys with identity checks, documents and statuses, B2B tools for people who use them all day, consumer apps for millions. I start from the business logic and the edge cases, not the pretty screen, and I design every error and empty state along the way.',
    tags: ['UX / UI', 'Service design', 'Information architecture', 'Fintech-grade flows', 'B2B & B2C'],
  },
  {
    n: '02',
    title: 'Art Direction',
    desc: 'Years of agency work for automotive and consumer brands taught me composition, typography and the drama of a single frame. I build visual languages that hold across a website, a campaign and a pitch deck, and I review other designers’ work with the same eye.',
    tags: ['Visual concepts', 'Campaigns', 'Key visuals', 'Brand language', 'Team review'],
  },
  {
    n: '03',
    title: 'Building with AI',
    desc: 'I don’t stop at the handoff. I design the product, write the spec, run AI coding agents like Claude Code and Codex, work through GitHub branches and pull requests, and deploy to my own server. Bannermatic, Riff Killer and Rechord were all built this way.',
    tags: ['Claude Code', 'Codex', 'GitHub', 'Rapid prototyping', 'Live MVPs'],
  },
  {
    n: '04',
    title: 'Motion & Prototyping',
    desc: 'Static Figma frames don’t show how a product feels. I build animated, interactive prototypes in the browser: transitions, timings, parallax and scroll choreography, so teams can judge the real experience before development starts.',
    tags: ['Interactive prototypes', 'UI animation', 'HTML5 motion', 'Scroll storytelling'],
  },
  {
    n: '05',
    title: 'Music & Sound',
    desc: 'Guitarist, composer and producer with my own studio in Moscow. I worked on the INDIKA soundtrack and wrote music for Toyota, Cadillac and AvtoVAZ campaigns. Sound is part of the experience, and I can design both.',
    tags: ['Composition', 'Game soundtrack', 'Ad music', 'Production', 'Sound design'],
  },
]

export default function Services() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="disciplines" className="px-6 md:px-10 py-24 md:py-36">
      <div className="flex items-baseline justify-between mb-14 md:mb-20"><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">03 / Disciplines</span><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">One person, full spectrum</span></div>
      <h2 className="font-display font-medium text-[11vw] md:text-[6.5vw] leading-[0.95] mb-16 md:mb-24">Designs it. <span className="text-stroke">Builds it.</span><br />Scores it<span className="text-[#d7ff3f]">.</span></h2>
      <div>
        {services.map((s, i) => {
          const isOpen = open === i
          return (
            <div key={s.n} className="border-t border-white/10 last:border-b">
              <button data-cursor onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between py-7 md:py-9 text-left group">
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className={`text-sm tabular-nums transition-colors duration-300 ${isOpen ? 'text-[#d7ff3f]' : 'text-[#8a877f]'}`}>{s.n}</span>
                  <span className={`font-display font-medium text-3xl md:text-5xl transition-all duration-500 ${isOpen ? 'translate-x-2 md:translate-x-4 text-[#d7ff3f]' : 'group-hover:translate-x-2 md:group-hover:translate-x-4'}`}>{s.title}</span>
                </div>
                <motion.span className={`shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full border flex items-center justify-center text-xl transition-colors duration-500 ${isOpen ? 'bg-[#d7ff3f] border-[#d7ff3f] text-[#0e0e0e]' : 'border-white/15'}`} animate={{ rotate: isOpen ? 45 : 0 }}>+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <div className="pb-10 md:pb-12 md:pl-[4.5rem] lg:pl-[7.5rem] max-w-3xl">
                      <p className="text-[#a9a69f] leading-relaxed text-base md:text-lg">{s.desc}</p>
                      <div className="mt-6 flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="text-[11px] tracking-[0.12em] uppercase border border-white/15 rounded-full px-4 py-2 text-[#eae7e0]/80">{t}</span>)}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
