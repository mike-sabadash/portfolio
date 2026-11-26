import { motion } from 'framer-motion'

const products: [string, string, string][] = [
  ['Bannermatic', 'Adapts one master banner into a whole family of formats, recomposing the layout for each aspect ratio', 'https://bannermatic.online'],
  ['Resize Lab', 'The adaptation engine: safe zones, format families, extreme ratios and manual override', 'https://resize-lab.bannermatic.online'],
  ['UI Animator', 'Turns static layouts into animated, interactive browser prototypes', 'https://bannermatic.online/ui-animator/'],
  ['Riff Killer', 'Learn guitar riffs as a structure: phrases, synced audio, tabs and fretboard', 'https://riffkiller.fun'],
  ['Rechord', 'Chord builder, tab editor and a vertical reels editor for music teachers', 'https://rechord.online'],
]

const experience: [string, string, string][] = [
  ['National Lottery', 'Product Designer', '2025 / now'],
  ['Butler, digital property management', 'Lead Product Designer', '2024 / 2025'],
  ['Matryoshka Digital Space, WTC Moscow', 'Digital Designer', '2023 / 2024'],
  ['TSUM, internal products & CRM', 'Product Designer', ''],
  ['Advertising agencies', 'Art Director', 'Toyota · Suzuki · LADA'],
]

function Row({ a, b, c, href, i }: { a: string; b: string; c: string; href?: string; i: number }) {
  const inner = (
    <>
      <div className="min-w-0">
        <div className="font-display text-lg md:text-2xl font-medium transition-colors duration-300 group-hover:text-[#d7ff3f]">{a}</div>
        <div className="text-[12px] text-[#8a877f] mt-1 max-w-md">{b}</div>
      </div>
      <span className="shrink-0 text-[11px] tracking-[0.15em] uppercase text-[#8a877f] text-right">{c}</span>
    </>
  )
  const cls = 'group flex items-center justify-between gap-6 border-t border-white/10 last:border-b py-5 md:py-6'
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}>
      {href ? <a href={href} target="_blank" rel="noopener noreferrer" data-cursor="Open" className={cls}>{inner}</a> : <div className={cls}>{inner}</div>}
    </motion.div>
  )
}

export function Products() {
  return (
      <section id="products" className="px-6 md:px-10 py-24 md:py-36">
        <div className="flex items-baseline justify-between mb-14 md:mb-20"><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">04 / Built by me</span><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">Live products</span></div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-10">
          <div>
            <h2 className="font-display font-medium text-[10vw] md:text-[4.5vw] leading-[1.02]">Not just mockups.<br /><span className="text-[#8a877f]">Products that run.</span></h2>
            <p className="mt-8 max-w-md text-[#a9a69f] leading-relaxed">
              Every product here started from a problem I know first-hand: years of banner production, years of playing guitar and making guitar content. I designed them, wrote the specs, built them with AI agents and deployed them to my own server. They are live, click through.
            </p>
          </div>
          <div>{products.map(([a, b, h], i) => <Row key={a} a={a} b={b} c="Open ↗" href={h} i={i} />)}</div>
        </div>
      </section>
  )
}

export function Experience() {
  return (
      <section id="experience" className="px-6 md:px-10 py-24 md:py-36">
        <div className="flex items-baseline justify-between mb-14 md:mb-20"><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">06 / Experience</span><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">20+ years</span></div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-10">
          <div>
            <h2 className="font-display font-medium text-[10vw] md:text-[4.5vw] leading-[1.02]">Agency eye.<br /><span className="text-[#8a877f]">Product brain.</span></h2>
            <p className="mt-8 max-w-md text-[#a9a69f] leading-relaxed">
              I started in advertising as an art director: campaigns, key visuals, presenting ideas and leading designers. Then I moved into product design for lotteries, retail and property tech. The craft stayed, the systems thinking came on top.
            </p>
          </div>
          <div>{experience.map(([a, b, c], i) => <Row key={a} a={a} b={b} c={c} i={i} />)}</div>
        </div>
      </section>
  )
}
