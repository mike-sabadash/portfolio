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
  gallery: string[]
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
    cover: './work/prize-cover.webp',
    gallery: ['./work/prize-1.webp', './work/prize-2.webp', './work/prize-3.webp'],
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
    cover: './work/journey-cover.webp',
    gallery: ['./work/journey-1.webp', './work/journey-2.webp', './work/journey-3.webp'],
    principle: 'The player shouldn’t have to understand our product catalogue to find out if they won.',
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
    cover: './work/butler-cover.webp',
    gallery: ['./work/butler-1.webp', './work/butler-3.webp'],
    principle: 'Two audiences, one request. It has to feel the same on both ends.',
  },
  {
    slug: 'belt-impex',
    title: 'Belt Impex',
    category: 'Art Direction / Web',
    year: '2026',
    client: 'Belt Impex, industrial supplier',
    role: 'Art Director, Designer',
    platform: 'Web · Interactive prototype',
    intro: 'Conveyor belts, chains and bearings, presented with the confidence of a premium brand.',
    challenge:
      'A serious industrial supplier with 16 product directions and a website that looked like a price list. The brief: make a hard, “unglamorous” B2B business look as strong as it actually is, without losing the catalogue logic buyers rely on.',
    approach:
      'I built a visual language from the logo geometry: gears, belts and engineering drawings, technical illustrations with consistent line weight and isometry, real warehouse photography and big confident numbers. Three concepts went from static layouts to animated HTML prototypes with parallax, hover states and scroll motion.',
    deliverables: ['Art direction', 'Visual concept', 'Web design', 'Technical illustration', 'Animated prototype'],
    cover: './work/belt-1.webp',
    gallery: ['./work/belt-2.webp', './work/belt-3.webp', './work/belt-4.webp'],
    principle: 'B2B doesn’t have to look boring. It has to look trustworthy, and that can be beautiful.',
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
    cover: './work/mercury-cover.webp',
    gallery: ['./work/mercury-1.webp', './work/mercury-3.webp'],
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
    cover: './work/vip-cover.webp',
    gallery: ['./work/vip-2.webp'],
    principle: 'Motivation is a layout problem: show the next step, not the whole staircase.',
  },
]
