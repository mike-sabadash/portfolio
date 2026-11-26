import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const TEXT =
  'Twenty years between advertising, products and music taught me one thing: complexity is a design problem. I take messy processes, from prize claims and CRMs to banner production and guitar riffs, and turn them into systems people understand on the first try. Then I make them look like they matter.'

const stats: [string, string][] = [
  ['20+', 'Years in design, from art direction to product'],
  ['9', 'Products and prototypes I built and shipped with AI agents'],
  ['200K+', 'Followers on my own music channels'],
  ['1', 'Game soundtrack: INDIKA, released by Milan Records / Sony Music'],
]

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const color = useTransform(progress, range, ['#3a3a3a', '#eae7e0'])
  return <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">{word}</motion.span>
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.45'] })
  const words = TEXT.split(' ')
  return (
    <section id="about" ref={ref} className="px-6 md:px-10 py-28 md:py-44">
      <div className="flex items-start gap-4 mb-12 md:mb-16"><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mt-2">01 / About</span></div>
      <p className="font-display font-medium text-[7.2vw] md:text-[4.2vw] leading-[1.12] max-w-6xl">
        {words.map((word, i) => <Word key={i} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />)}
      </p>
      <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
        {stats.map(([num, label]) => (
          <div key={label} className="bg-[#0e0e0e] py-10 md:py-14 px-6">
            <div className="font-display font-medium text-5xl md:text-6xl text-[#d7ff3f]">{num}</div>
            <div className="mt-3 text-[11px] leading-relaxed tracking-[0.16em] uppercase text-[#8a877f] max-w-[220px]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
