import { useRef } from 'react'
import { Link, useParams } from 'react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/projects'
import { Shot } from '../sections/Works'

function ParallaxShot({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])
  const scale = 1.06
  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#161616] ${className ?? ''}`}>
      <motion.img src={src} alt={alt} loading="lazy" style={{ y, scale }} className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )
}

function Stage({ src, alt, className, wide }: { src: string; alt: string; className?: string; wide?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-md bg-[#151515] ring-1 ring-white/5 ${className ?? ''}`}>
      <img src={src} alt={alt} loading="lazy" className={`absolute inset-0 m-auto max-w-[92%] max-h-[88%] ${wide ? 'w-auto h-auto' : 'w-auto h-auto'} object-contain rounded-[3px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]`} />
    </div>
  )
}

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 160])
  const heroOpacity = useTransform(heroProgress, [0, 0.9], [1, 0])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-[#eae7e0] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">404</p>
        <h1 className="font-display font-medium text-5xl md:text-7xl">This case doesn’t exist.</h1>
        <Link to="/" data-cursor className="mt-4 inline-flex items-center gap-3 border border-white/15 rounded-full px-8 py-4 text-[12px] tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-[#eae7e0] hover:text-[#0e0e0e]">← Back to all work</Link>
      </div>
    )
  }

  const pairs: string[][] = []
  for (let i = 0; i < project.gallery.length; i += 2) pairs.push(project.gallery.slice(i, i + 2))

  return (
    <div className="grain bg-[#0e0e0e] text-[#eae7e0] min-h-screen">
      <section ref={heroRef} className="relative min-h-[78vh] flex flex-col justify-end px-6 md:px-10 pt-32 pb-10 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#d7ff3f] opacity-[0.04] blur-[130px] pointer-events-none" />
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-8" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Link to="/" data-cursor className="hover:text-[#eae7e0] transition-colors">Work</Link><span>/</span><span className="text-[#eae7e0]">0{index + 1}</span>
          </motion.div>
          <h1 className="font-display font-medium leading-[0.88] tracking-[-0.02em]">
            <span className="block overflow-hidden"><motion.span className="block text-[13vw] md:text-[10vw]" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>{project.title}</motion.span></span>
          </h1>
          <motion.div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5 text-[11px] tracking-[0.25em] uppercase text-[#8a877f]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <span>{project.category}</span><span className="hidden sm:inline">{project.client}</span><span>{project.year || project.platform}</span>
          </motion.div>
        </motion.div>
      </section>

      <motion.section className="px-6 md:px-10" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <ParallaxShot src={project.cover} alt={project.title} className="w-full aspect-[16/10] max-h-[86vh] rounded-md" />
      </motion.section>

      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal><p className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-8">The challenge</p></Reveal>
            <Reveal delay={0.05}><p className="font-display font-medium text-2xl md:text-4xl leading-[1.25]">{project.intro}</p></Reveal>
            <Reveal delay={0.1}><p className="mt-8 text-[#a9a69f] leading-relaxed max-w-xl">{project.challenge}</p></Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} className="border-t border-white/10">
              {[['Client', project.client], ['Role', project.role], ['Platform', project.platform], ...(project.year ? [['Year', project.year]] : [])].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-b border-white/10 py-4"><span className="text-[11px] tracking-[0.2em] uppercase text-[#8a877f]">{k}</span><span className="text-right">{v}</span></div>
              ))}
              <div className="border-b border-white/10 py-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#8a877f] block mb-3">What I did</span>
                <div className="flex flex-wrap gap-2">{project.deliverables.map((d) => <span key={d} className="text-[11px] tracking-[0.08em] uppercase border border-white/15 rounded-full px-3 py-1.5 text-[#eae7e0]/80">{d}</span>)}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 space-y-6 md:space-y-8">
        {pairs.map((row, ri) =>
          row.length === 2 ? (
            <div key={ri} className="grid md:grid-cols-2 gap-6 md:gap-8">
              {row.map((src, i) => (
                <Reveal key={src} delay={i * 0.08}><Stage src={src} alt={`${project.title} detail`} className={`aspect-[16/10] ${i === 1 ? 'md:mt-20' : ''}`} /></Reveal>
              ))}
            </div>
          ) : (
            <Reveal key={ri}><Stage src={row[0]} alt={`${project.title} detail`} className="aspect-[16/9] md:aspect-[21/9]" wide /></Reveal>
          )
        )}
      </section>

      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal><p className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-8">The approach</p></Reveal>
            <Reveal delay={0.05}><p className="text-[#a9a69f] leading-relaxed">{project.approach}</p></Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-[#d7ff3f] pl-6 md:pl-10">
                <p className="font-display font-medium text-2xl md:text-4xl leading-[1.25]">“{project.principle}”</p>
                <footer className="mt-6 text-[11px] tracking-[0.2em] uppercase text-[#8a877f]">Design principle behind this case</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <Link to={`/work/${next.slug}`} data-cursor="Next" className="group relative block overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 transition-transform duration-700 ease-out scale-110 group-hover:scale-100">
          <Shot src={next.cover} className="w-full h-full" />
          <div className="absolute inset-0 bg-[#0e0e0e]/75 transition-colors duration-700 group-hover:bg-[#0e0e0e]/50" />
        </div>
        <div className="relative px-6 md:px-10 py-28 md:py-44 text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] group-hover:text-[#eae7e0] transition-colors duration-500">Next case</p>
          <h2 className="font-display font-medium text-[14vw] md:text-[9vw] leading-none mt-4 transition-transform duration-700 group-hover:-translate-y-2">{next.title}</h2>
          <span className="inline-block mt-6 text-[12px] tracking-[0.2em] uppercase text-[#8a877f] group-hover:text-[#d7ff3f] transition-colors duration-500">{next.category}</span>
        </div>
      </Link>
    </div>
  )
}
