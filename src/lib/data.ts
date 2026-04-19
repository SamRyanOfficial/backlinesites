export interface PortfolioItem {
  id: string;
  band: string;
  genre: string;
  url: string;
  year: string;
  scope: string;
  blurb: string;
  tagline: string;
  palette: [string, string, string];
  accent: string;
  stats: [string, string][];
  placeholder?: boolean;
  /** No screenshot: angled warning-style “coming soon” strip instead of mini mockup */
  placeholderPreview?: 'mockup' | 'warning-banner';
  /** Copy on the diagonal warning banner; defaults to “Coming soon” */
  placeholderBannerText?: string;
  /** Top-right chip when `placeholder` (e.g. Open slot) */
  placeholderChipText?: string;
  /** Whole card links here (e.g. #contact) instead of opening the case modal */
  linkToHash?: string;
  /** Path under /public, e.g. /images/work/copperskies.jpg */
  screenshot?: string;
  /** CSS object-position for screenshot crop focal point */
  screenshotPosition?: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'copperskies',
    band: 'Copper Skies',
    genre: 'Wedding duo · Bay of Plenty',
    url: 'copperskies.co.nz',
    year: '2025',
    scope: 'Full build · Next.js · Booking form · Gallery',
    blurb:
      "Bay of Plenty's most-booked wedding duo. Full editorial site with live reviews feed, upcoming shows, and a ceremony-to-reception booking form.",
    tagline: 'Music that gets people dancing',
    palette: ['#1F1A14', '#C89760', '#F3E9D2'],
    accent: '#C89760',
    stats: [
      ['Events', '250+'],
      ['Reviews', '5★'],
      ['Reach', 'NZ-wide'],
    ],
    screenshot: '/images/work/copperskies.jpg',
    screenshotPosition: 'center 38%',
  },
  {
    id: 'midnightfizz',
    band: 'Midnight Fizz',
    genre: '4-piece party band · Tauranga',
    url: 'midnightfizz.com',
    year: '2024',
    scope: 'Full build · Video reels · Services · Enquiry form',
    blurb:
      'High-energy party band. Dark, cinematic site with a video-forward hero and a tailored enquiry flow for weddings, corporate, and private events.',
    tagline: 'Music that brings every crowd to life',
    palette: ['#0A0A0E', '#E7C66B', '#F0E6D2'],
    accent: '#E7C66B',
    stats: [
      ['Events', '200+'],
      ['Lineup', '4-5 pc'],
      ['Coverage', 'NZ-Wide'],
    ],
    screenshot: '/images/work/midnightfizz.jpg',
    screenshotPosition: 'center 40%',
  },
  {
    id: 'joemac',
    band: 'Joe Mac',
    genre: 'Solo performer · Multi-instrumentalist',
    url: 'joemac.co.nz',
    year: '2024',
    scope: 'Full build · Artist site · Shows feed · Streaming links',
    blurb:
      'Seasoned live performer and teacher. Clean artist site with integrated Spotify/Apple/YouTube links, a live shows feed, and a band-booking flow.',
    tagline: 'No setlist. Just the right song, every time.',
    palette: ['#111114', '#D94B2B', '#EDE7DC'],
    accent: '#D94B2B',
    stats: [
      ['Songs', '1000+'],
      ['Experience', '10+ yrs'],
      ['Roles', 'Solo / Band'],
    ],
    screenshot: '/images/work/joemac.jpg',
    screenshotPosition: 'center 42%',
  },
  {
    id: 'turtlefunk',
    band: 'Turtle Funk',
    genre: 'Funk & soul',
    url: 'Coming soon',
    year: '2026',
    scope: 'Full site · Booking · Show feed',
    blurb:
      'Coming soon — Turtle Funk. A funk-forward band site with gig dates, enquiry flow, and a groove-first first impression.',
    tagline: 'Slow and steady wins the dance floor',
    palette: ['#14332A', '#7BC9A8', '#E8F4E8'],
    accent: '#7BC9A8',
    stats: [
      ['Status', 'In build'],
      ['Launch', '2026'],
      ['Vibe', 'Funk / soul'],
    ],
    placeholder: true,
    placeholderPreview: 'warning-banner',
  },
  {
    id: 'open-slot',
    band: 'Your band here',
    genre: 'Next build slot · reserved for you',
    url: 'Get in touch',
    year: '—',
    scope: 'Full site · Your domain · Your story',
    blurb:
      'This spot is for the next act who’s ready to level up. Same craft as the builds above — we shape it around your gigs, sound, and how you get booked.',
    tagline: 'Could be your name on this card',
    palette: ['#0A0A0A', '#E53935', '#F5F5F5'],
    accent: '#E53935',
    stats: [
      ['Status', 'Available'],
      ['You', 'Here'],
      ['Next step', 'Say hi'],
    ],
    placeholder: true,
    placeholderPreview: 'warning-banner',
    placeholderBannerText: 'Your site here',
    placeholderChipText: 'Open slot',
    linkToHash: '#contact',
  },
];

export interface ServiceItem {
  title: string;
  sub: string;
  price: string;
  priceUnit: string;
  blurb: string;
  includes: string[];
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'The One-Off',
    sub: '$600 · one-time build',
    price: '$600',
    priceUnit: 'one-time',
    blurb:
      'I build you a full, professional site — then I teach you how to manage and edit it. 30-minute walkthrough and a cheat sheet. After that, zero ongoing costs except your domain (~$20/yr).',
    includes: [
      'Full custom site',
      'Built and launched in 2–3 weeks',
      '30-min training walkthrough',
      'Written cheat sheet',
      'You own everything',
      'No monthly fees — ever',
    ],
  },
  {
    title: 'The Backline',
    sub: '$29.99 / month · built + managed',
    price: '$29.99',
    priceUnit: 'per month',
    blurb:
      'I build the site and I keep it running. Send me new shows, photos, or tweaks whenever — I handle it. Hosting, updates, bug fixes, and ongoing support all included.',
    includes: [
      'Full custom site',
      'Hosting included',
      'Unlimited content updates',
      'Ongoing design tweaks',
      'Priority support',
      'Cancel any time',
    ],
    featured: true,
  },
];

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
}

export const PROCESS: ProcessStep[] = [
  {
    n: '01',
    title: 'Step 1',
    body: "We jump on a 20-min call. You tell me about the band, what's working, what's losing you bookings. No commitment — I'll tell you straight if a site will actually help.",
  },
  {
    n: '02',
    title: 'Step 2',
    body: 'I send a short brief. You send photos, music links, show dates, the vibe. I sketch a design direction and show you a live preview.',
  },
  {
    n: '03',
    title: 'Step 3',
    body: 'We iterate on the preview — copy, layout, photos. Two rounds of feedback. No surprises, no hidden revisions.',
  },
  {
    n: '04',
    title: 'Step 4',
    body: 'Site goes live on your domain. I set up analytics, submit to Google, and stay on call for 30 days to tweak anything.',
  },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: FAQItem[] = [
  {
    q: 'How much does it cost?',
    a: "There are two ways to work together:\n\n• $600 one-time — I build your site and teach you to manage it yourself. After launch: no ongoing fees.\n\n• $29.99/month — I build your site and keep running it for you: hosting, updates, and edits when you need them.",
  },
  {
    q: 'How long does it take?',
    a: 'Most sites go live within 1-2 weeks from kickoff. Rush jobs for upcoming releases or tours — ask.',
  },
  {
    q: 'Who owns the site?',
    a: 'It depends which package you choose - if you choose the $600 one-time package — your domain, your hosting, your content, full ownership is yours. If you go with the $29.99/month subscription, I own and manage the site on your behalf, but you can request a handoff anytime.',
  },
  {
    q: 'Can you update it for me later?',
    a: "For the $600 one-time package: yes, free updates and support for the first 30 days after launch. After that, you can manage it yourself or reach out for help. For the $29.99/month plan: all updates are included — new shows, photos, copy changes, whatever you need.",
  },
  {
    q: 'Do you do bands outside NZ?',
    a: 'Happy to — most of my clients are in NZ but the work is fully remote. Timezones sorted over email.',
  },
  {
    q: 'What if I already have a site?',
    a: "I can rebuild on the same domain with zero downtime, or just fix what's broken. Send the link and I'll give you an honest take.",
  },
];

export interface TestimonialItem {
  quote: string;
  name: string;
  band: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Looked like a million bucks on day one. Venues started taking us more seriously the moment we sent the link.",
    name: 'Samantha Campbell',
    band: 'Midnight Fizz',
  },
  {
    quote:
      "Honest, fast, and actually gets what a band needs. I don't have to think about my site — it just works.",
    name: 'Joe Mac',
    band: 'Joe Mac · Dumpweed',
  },
];
