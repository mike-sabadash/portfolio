import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/projects'

export function Shot({ src, alt = '', className }: { src: string; alt?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#161616] ${className ?? ''}`}>
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )
}

export default function Works() {
  const headerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ['start end', 'end start'] })
  const hx = useTransform(scrollYProgress, [0, 1], ['4%', '-14%'])

  return (
    <section id="work" className="py-24 md:py-36">
      <div ref={headerRef} className="overflow-hidden mb-14 md:mb-20">
        <motion.h2
          style={{ x: hx }}
          className="font-display font-medium text-[16vw] md:text-[11vw] leading-none whitespace-nowrap text-stroke select-none"
        >
          Selected Work / Selected Work
        </motion.h2>
      </div>

      <div className="px-6 md:px-10 flex items-baseline justify-between mb-8">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">02 / Work</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">Product · Service · Art direction</span>
      </div>

      <div className="px-6 md:px-10 grid md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/work/${p.slug}`} data-cursor="View" className="group block">
              <div className="relative overflow-hidden rounded-lg bg-[#161616] aspect-[808/632]">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-[#d7ff3f] text-[#0e0e0e] px-4 py-2 text-[11px] tracking-[0.18em] uppercase font-medium translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View case
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display font-medium text-2xl md:text-[2rem] leading-tight transition-colors duration-500 group-hover:text-[#d7ff3f]">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] text-[#8a877f]">{p.client}</p>
                </div>
                <div className="text-right shrink-0 pt-1.5">
                  <span className="block text-[11px] tracking-[0.15em] uppercase text-[#8a877f]">{p.category}</span>
                  {p.year && <span className="block mt-1 text-[11px] text-[#8a877f]/70 tabular-nums">{p.year}</span>}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="px-6 md:px-10 mt-16 flex justify-center">
        <a href="https://www.behance.net/mikesabad" target="_blank" rel="noopener noreferrer" data-cursor className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] hover:text-[#d7ff3f] transition-colors">
          More cases on Behance ↗
        </a>
      </div>
    </section>
  )
}
