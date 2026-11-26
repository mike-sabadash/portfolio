import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const credits: [string, string, string][] = [
  ['INDIKA', 'Video game soundtrack', 'Milan Records / Sony Music'],
  ['Toyota', 'Music for advertising', 'Automotive'],
  ['Cadillac', 'Music for advertising', 'Automotive'],
  ['AvtoVAZ', 'Music for advertising', 'Automotive'],
  ['Own channels', 'Guitar & production content', '200K+ followers'],
]

const stills = ['./music/indika-2.webp', './music/indika-3.webp', './music/indika-7.webp', './music/indika-8.webp']

export default function Music() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const stripRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: sp } = useScroll({ target: stripRef, offset: ['start end', 'end start'] })
  const sx = useTransform(sp, [0, 1], ['6%', '-22%'])

  return (
    <section id="music" className="py-24 md:py-36">
      <div className="px-6 md:px-10 flex items-baseline justify-between mb-10 md:mb-14">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">05 / Music</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">Composer · Guitarist · Producer</span>
      </div>

      <div className="px-6 md:px-10">
        <h2 className="font-display font-medium text-[13vw] md:text-[9vw] leading-[0.88] tracking-[-0.02em]">
          I also write<br /><span className="text-stroke">the soundtrack</span><span className="text-[#d7ff3f]">.</span>
        </h2>
      </div>

      <div ref={ref} className="relative mt-14 md:mt-20 mx-6 md:mx-10 h-[48vh] md:h-[78vh] overflow-hidden rounded-md">
        <motion.img src="./music/indika-hero.webp" alt="INDIKA key art" style={{ y }} className="absolute -top-[12%] left-0 w-full h-[124%] object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/55 to-transparent" />
        <div className="absolute left-0 bottom-0 p-6 md:p-12 max-w-xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#d7ff3f] mb-4">Game soundtrack</p>
          <p className="font-display font-medium text-[12vw] md:text-[7vw] leading-none">INDIKA</p>
          <p className="mt-5 text-[#cfccc4] leading-relaxed text-sm md:text-base">
            Worked on the soundtrack of INDIKA, the story-driven game about a nun travelling with the devil himself. The original soundtrack is released by Milan Records, part of Sony Music.
          </p>
        </div>
      </div>

      <div ref={stripRef} className="mt-6 md:mt-8 overflow-hidden">
        <motion.div style={{ x: sx }} className="flex gap-4 md:gap-6 w-max px-6 md:px-10">
          {stills.map((s) => (
            <img key={s} src={s} alt="INDIKA still" loading="lazy" className="h-[26vh] md:h-[38vh] aspect-video object-cover rounded-md" />
          ))}
        </motion.div>
      </div>

      <div className="px-6 md:px-10 mt-20 md:mt-28 grid md:grid-cols-2 gap-14 md:gap-10">
        <div>
          <h3 className="font-display font-medium text-[9vw] md:text-[3.6vw] leading-[1.05]">Music for screens,<br /><span className="text-[#8a877f]">games and brands.</span></h3>
          <p className="mt-8 max-w-md text-[#a9a69f] leading-relaxed">
            Rock and blues at heart, cinematic by trade. I compose, record and produce in my own studio in Moscow, and I research how sound creates tension and atmosphere. For a product team this means one more rare skill: I hear the experience, not only see it.
          </p>
        </div>
        <div>
          {credits.map(([name, kind, note], i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }} className="group flex items-center justify-between gap-6 border-t border-white/10 last:border-b py-5 md:py-6">
              <div>
                <div className="font-display text-lg md:text-2xl font-medium transition-colors duration-300 group-hover:text-[#d7ff3f]">{name}</div>
                <div className="text-[12px] text-[#8a877f] mt-1">{kind}</div>
              </div>
              <span className="text-[11px] tracking-[0.15em] uppercase text-[#8a877f] text-right">{note}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
