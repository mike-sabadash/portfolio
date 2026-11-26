export interface Project {
  slug: string
  title: string
  category: string
  year: string
  client: string
  role: string
  platform: string
  intro: string
  challenge: string
  approach: string
  deliverables: string[]
  cover: string
  /** client logo shown top-left on the cover card */
  logo?: string
  coverPosition?: string
  /** Behance-style full-width slides: [src, width, height] */
  slides: [string, number, number][]
  principle: string
}

export const projects: Project[] = [
  {
    slug: 'prize-claim',
    title: 'Prize Claim',
    category: 'Service Design / Product',
    year: '2026',
    client: 'National Lottery',
    role: 'Product Designer',
    platform: 'Web · Mobile · App',
    intro: 'From “you’ve won” to prize in hand. A bureaucratic process turned into one calm, guided journey.',
    challenge:
      'Claiming a prize used to mean paperwork, offline visits and long waits with no idea what was happening. The process had eleven independent factors, legal requirements and a dozen ways to go wrong. I designed the full digital route: authorisation, identity check, contact confirmation, documents, e-signature, submission, corrections and status tracking.',
    approach:
      'I mapped every scenario before drawing a single screen, then collapsed the complexity into a few predictable steps. Identity checks live in one modal. Personal data is pre-filled and only asks for what is missing. Every error, pending and edge state has its own designed screen, so the winner always knows where they are and what happens next.',
    deliverables: ['Service map', 'User flows', 'Edge states', 'UI', 'Handoff'],
    cover: './work/prize/cover.webp',
    slides: [
      ['./work/prize/01.webp', 2000, 1875],
      ['./work/prize/02.webp', 2000, 1016],
      ['./work/prize/03.webp', 2000, 1187],
      ['./work/prize/04.webp', 2000, 1374],
      ['./work/prize/05.webp', 2000, 1903],
      ['./work/prize/06.webp', 2000, 1037],
      ['./work/prize/07.webp', 2000, 1839],
      ['./work/prize/08.webp', 2000, 1173],
      ['./work/prize/09.webp', 2000, 1811],
      ['./work/prize/10.webp', 2000, 1256],
      ['./work/prize/11.webp', 2000, 2436],
      ['./work/prize/12.webp', 2000, 1778],
      ['./work/prize/13.webp', 2000, 1372],
      ['./work/prize/14.webp', 2000, 2109],
      ['./work/prize/15.webp', 2000, 1545],
      ['./work/prize/16.webp', 2000, 2341],
      ['./work/prize/17.webp', 2000, 1250],
      ['./work/prize/18.webp', 2000, 1611],
    ],
    principle: 'The rules made sense to lawyers. My job was to make them make sense to winners.',
  },
  {
    slug: 'ticket-check',
    title: 'One Ticket Journey',
    category: 'Product Design / UX',
    year: '2026',
    client: 'National Lottery',
    role: 'Product Designer',
    platform: 'Desktop · Mobile · App',
    intro: 'Five lottery products, five sets of rules, one interface. Check, link and claim any ticket in seconds.',
    challenge:
      'Draw tickets, coupons, instant games and ticket sets each had their own check flow. Players had to know which product they held before they could even start. A large share of support requests were simply about checking, linking or claiming a ticket.',
    approach:
      'One entry point for every ticket: scan the QR code or type the number, and the system figures out the rest. A single result card adapts to the ticket type, its status and the action available right now, from “not a winner” to “bigger win, here is how to get paid”.',
    deliverables: ['Product architecture', 'Unified flow', 'Result card system', 'UI', 'Prototype'],
    cover: './work/journey/cover.webp',
    slides: [
      ['./work/journey/01.webp', 2000, 2153],
      ['./work/journey/02.webp', 2000, 1202],
      ['./work/journey/03.webp', 2000, 1486],
      ['./work/journey/04.webp', 2000, 1532],
      ['./work/journey/05.webp', 2000, 1687],
      ['./work/journey/06.webp', 2000, 1655],
      ['./work/journey/07.webp', 2000, 2263],
      ['./work/journey/08.webp', 2000, 2646],
      ['./work/journey/09.webp', 2000, 1266],
      ['./work/journey/10.webp', 2000, 2072],
      ['./work/journey/11.webp', 2000, 2766],
      ['./work/journey/12.webp', 2000, 2139],
      ['./work/journey/13.webp', 2000, 1732],
      ['./work/journey/14.webp', 2000, 1451],
      ['./work/journey/15.webp', 2000, 2979],
    ],
    principle: 'The player shouldn’t have to understand our product catalogue to find out if they won.',
  },
  {
    slug: 'nl-uxui',
    title: 'National Lottery App',
    category: 'UX/UI · Brand system',
    year: '2026',
    client: 'National Lottery',
    role: 'Product Designer',
    platform: 'iOS · Android · Web',
    intro: 'The everyday side of the lottery: buying tickets, managing draws, profile and payments, built on one bright, recognisable visual language.',
    challenge:
      'Many lottery products, each with its own look and rules, had to live inside one app without turning it into a noisy catalogue. Buying a ticket, picking numbers, paying and coming back for results needed to feel quick and familiar every time.',
    approach:
      'I designed the core purchase and profile flows and the visual language that holds them together: colour proportions, type, 3D key visuals and reusable components. Product brands keep their identity, while every screen follows the same calm structure, so a new lottery drops in without redesign.',
    deliverables: ['Purchase flow', 'Profile & payments', 'Components', 'Key visuals', 'Brandbook'],
    cover: './work/nlux/cover-art.webp',
    logo: './logos/national-lottery.svg',
    coverPosition: '50% 60%',
    slides: [
      ['./work/nlux/01.webp', 2000, 2090],
      ['./work/nlux/02.webp', 1400, 182],
      ['./work/nlux/03.webp', 2000, 4906],
      ['./work/nlux/04.webp', 2000, 4867],
    ],
    principle: 'Bright on the outside, predictable on the inside.',
  },
  {
    slug: 'butler',
    title: 'Butler',
    category: 'B2B Product / PropTech',
    year: '2025',
    client: 'Butler, digital property management',
    role: 'Lead Product Designer',
    platform: 'Mobile · Web',
    intro: 'A digital property manager: one app for residents, one for contractors, one system behind both.',
    challenge:
      'Housing services run on calls, chats and paper. Butler set out to automate the whole operation, which meant designing for two very different people at once: residents who want things fixed, and contractors who need a clear queue of work.',
    approach:
      'I led product design across the resident app, the contractor app and the ticket system. Intercom with video, home controls and service requests for residents. A task feed, routes and request statuses for contractors. Both sides speak the same visual language, so a request looks and behaves the same wherever it travels.',
    deliverables: ['Resident app', 'Contractor app', 'Ticket system', 'UI kit', 'Prototypes'],
    cover: './work/butler/cover.webp',
    slides: [
      ['./work/butler/01.webp', 2000, 1125],
      ['./work/butler/02.webp', 2000, 1380],
      ['./work/butler/03.webp', 2000, 993],
      ['./work/butler/04.webp', 2000, 1776],
      ['./work/butler/05.webp', 2000, 1646],
      ['./work/butler/06.webp', 2000, 466],
      ['./work/butler/07.webp', 2000, 1691],
      ['./work/butler/08.webp', 2000, 1776],
      ['./work/butler/09.webp', 2000, 1776],
      ['./work/butler/10.webp', 2000, 1380],
      ['./work/butler/11.webp', 2000, 466],
      ['./work/butler/12.webp', 2000, 5290],
      ['./work/butler/13.webp', 2000, 1125],
      ['./work/butler/14.webp', 2000, 1125],
      ['./work/butler/15.webp', 2000, 1125],
      ['./work/butler/16.webp', 2000, 1125],
      ['./work/butler/17.webp', 2000, 1125],
      ['./work/butler/18.webp', 2000, 1125],
      ['./work/butler/19.webp', 2000, 1127],
      ['./work/butler/20.webp', 2000, 1126],
      ['./work/butler/21.webp', 2000, 1125],
      ['./work/butler/22.webp', 2000, 1125],
    ],
    principle: 'Two audiences, one request. It has to feel the same on both ends.',
  },
  {
    slug: 'mercury',
    title: 'Mercury',
    category: 'E-commerce / Luxury',
    year: '',
    client: 'Mercury, luxury jewelry',
    role: 'UX/UI Designer',
    platform: 'iPad · iOS',
    intro: 'A catalogue for Bvlgari, Graff, Chopard and Messika that feels as considered as the jewelry itself.',
    challenge:
      'Luxury customers browse slowly and expect restraint. The catalogue had to carry many maisons, deep filters by stone, metal and price, and still feel like a boutique rather than a marketplace.',
    approach:
      'Generous white space, editorial photography and a quiet interface that steps back. Filters are precise but stay out of the way; brands get equal, calm presence. The same system scales from iPad in-store to the phone in your pocket.',
    deliverables: ['UX', 'UI', 'Filters', 'Catalogue system'],
    cover: './work/mercury/cover-art.webp',
    logo: './logos/mercury.svg',
    coverPosition: '50% 45%',
    slides: [
      ['./work/mercury/01.webp', 1480, 2016],
      ['./work/mercury/02.webp', 1480, 2016],
      ['./work/mercury/03.webp', 1480, 2016],
    ],
    principle: 'In luxury, the interface should whisper.',
  },
  {
    slug: 'vip-club',
    title: 'VIP Club',
    category: 'iGaming / Gamification',
    year: '',
    client: 'Online casino',
    role: 'UX/UI Designer',
    platform: 'Web · Mobile',
    intro: 'Status, progress and rewards for an iGaming loyalty programme that players actually want to climb.',
    challenge:
      'A VIP programme only works if players see where they are, what the next level gives them and how close it is.',
    approach:
      'A clear ladder of levels with visible perks, progress and a dark, premium visual language. Comparisons are scannable at a glance, and the next reward is always in view.',
    deliverables: ['Loyalty mechanics', 'UX', 'UI', 'Visual style'],
    cover: './work/vip/cover.webp',
    slides: [
      ['./work/vip/01.webp', 2000, 3798],
    ],
    principle: 'Motivation is a layout problem: show the next step, not the whole staircase.',
  },
]
