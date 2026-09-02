import { Project, Note, LibraryItem, CurrentlyState, PillarDetail, LifeLesson } from '../types';

export const HERO_DATA = {
  name: 'GOPAL SINGH',
  tagline: 'Still becoming.',
  statement: 'I create. I explore. I keep learning.',
  scrollLabel: 'SCROLL TO EXPLORE ↓',
  portraitUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
  ambientPortrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
};

export const INTRODUCTION_DATA = {
  label: 'THE SPACE',
  heading: 'A personal digital world for what I create, explore, learn, and reflect upon.',
  description: 
    'This is not a traditional portfolio or a corporate resume. It is an evolving digital room—a place to document experiments in visual storytelling, creative technology, photography, and the thoughts collected along the way.',
  subtext: 'No finished masterworks here. Just honest curiosity and work in progress.',
};

export const PHILOSOPHY_PILLARS: PillarDetail[] = [
  {
    id: 'create',
    title: 'CREATE',
    description: 'Transforming fleeting thoughts, light, and pixels into tangible artifacts.',
    mindset: 'Making is how I make sense of the world. Through the lens, the screen, and synthetic tools, creating is an act of discovery rather than mere production.',
    facets: [
      { label: 'Photography', subtext: 'Street geometry, quiet portraits, and available light.' },
      { label: 'Visual Experiments', subtext: 'Color grading, composition studies, and cinematic crops.' },
      { label: 'AI & Synthesis', subtext: 'Latent space exploration, neural imagery, and prompt craft.' },
      { label: 'Digital Projects', subtext: 'Web experiments, interactive canvases, and lightweight tools.' },
    ],
  },
  {
    id: 'learn',
    title: 'LEARN',
    description: 'Relentlessly acquiring new tools, disciplines, and mental models.',
    mindset: 'The beginner\'s mind is a superpower. I embrace being clumsy at first so I can unlock new ways of thinking and executing.',
    facets: [
      { label: 'Tools & Technology', subtext: 'Modern web stacks, editing suites, and automation.' },
      { label: 'Creative Workflows', subtext: 'Iterative design, node-based pipelines, and systems.' },
      { label: 'Books & Literature', subtext: 'Philosophy, creativity, design history, and biographies.' },
      { label: 'Skill Stacking', subtext: 'Connecting unexpected dots between disparate domains.' },
    ],
  },
  {
    id: 'reflect',
    title: 'REFLECT',
    description: 'Pausing to examine the journey, the mistakes, and the quiet lessons.',
    mindset: 'Without reflection, speed is just noise. Taking time to write down what worked, what failed, and what remains unanswered.',
    facets: [
      { label: 'Personal Notes', subtext: 'Unfiltered observations on growth and creative friction.' },
      { label: 'Questions', subtext: 'Staying with unanswered queries rather than rushing to certainty.' },
      { label: 'Lessons Learned', subtext: 'Documenting the practical shifts in craft and perspective.' },
      { label: 'Honest Truths', subtext: 'Acknowledging uncertainty as the foundation of progress.' },
    ],
  },
];

export const CURRENTLY_DATA: CurrentlyState = {
  exploring: {
    title: 'AI & Creative Technology',
    detail: 'Diffusion models, latent spaces, and creative code workflows.',
    statusBadge: 'Active Exploration',
  },
  creating: {
    title: 'Photography & Visual Work',
    detail: 'Night walks, cinematic compositions, and color grading.',
    statusBadge: 'Ongoing Series',
  },
  learning: {
    title: 'New Tools & Techniques',
    detail: 'Node-based generation workflows, motion design & typography.',
    statusBadge: 'Deep Dive',
  },
  reading: {
    title: 'The Creative Act: A Way of Being',
    author: 'Rick Rubin',
    note: 'Reflecting on awareness, receptivity, and tuning one\'s antenna.',
    statusBadge: 'Chapter 14',
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'monolith-and-solitude',
    title: 'Monolith & Solitude',
    category: 'photography',
    categoryLabel: 'Photography Series',
    year: '2025 — 2026',
    location: 'Urban Intersections',
    tagline: 'Quiet geometries carved by hard shadows and single beams of afternoon light.',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        caption: 'High contrast concrete corner under autumn midday sun.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Vertical architectural ascent into overcast stillness.',
        aspectRatio: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85',
        caption: 'Fog blanketed horizon along the edge of the city perimeter.',
        aspectRatio: 'cinematic',
      },
    ],
    description: 
      'An ongoing photographic exploration of how human structures dwarf human presence. Focusing on negative space, stark architectural lines, and the rare moments of isolation in dense metropolitan spaces.',
    personalThought: 
      'When you wait at a single street corner for 40 minutes, the noise disappears and only the geometry remains.',
    techDetails: [
      { label: 'Medium', value: 'Digital Still / 35mm Equivalent' },
      { label: 'Aperture', value: 'f/2.8 — f/5.6' },
      { label: 'Color Philosophy', value: 'Muted earth tones, lifted shadows' },
      { label: 'Theme', value: 'Negative space & solitude' },
    ],
    featured: true,
  },
  {
    id: 'blue-hour-whispers',
    title: 'Blue Hour Whispers',
    category: 'photography',
    categoryLabel: 'Photography Series',
    year: '2025',
    location: 'Twilight Urban Walks',
    tagline: 'The ten minutes when daylight surrenders to neon and street sodium.',
    coverImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85',
        caption: 'Reflections on wet pavement during the transitional dusk.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Street lamps igniting against deep cobalt skies.',
        aspectRatio: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85',
        caption: 'A solitary pedestrian walking through the rain-soaked crossing.',
        aspectRatio: 'cinematic',
      },
    ],
    description: 
      'A study in ambient atmospheric illumination. Capturing the brief window of twilight where sky exposure balances ambient artificial lights.',
    personalThought: 
      'Blue hour forgives nothing—it forces you to be deliberate with shutter speed and breath.',
    techDetails: [
      { label: 'Lens', value: '50mm Prime' },
      { label: 'Light', value: 'Available Ambient Twilight' },
      { label: 'Tone', value: 'Deep indigo with tungsten contrast' },
    ],
    featured: true,
  },
  {
    id: 'latent-fragments',
    title: 'Latent Fragments',
    category: 'ai',
    categoryLabel: 'AI Visual Experiment',
    year: '2026',
    tagline: 'Investigating synthetic texture, memory hallucination, and generative grain.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85',
        caption: 'Iterative diffusion exploring organic mineral patterns.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85',
        caption: 'Topological flow study generated with custom prompt weightings.',
        aspectRatio: 'square',
      },
      {
        url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1400&q=85',
        caption: 'Textural convergence of analog film noise and synthetic noise tensors.',
        aspectRatio: 'cinematic',
      },
    ],
    description: 
      'An ongoing visual lab testing prompt parameters, image-to-image blending, and custom post-processing to create imagery that avoids standard AI clichés.',
    personalThought: 
      'AI becomes truly interesting not when it replicates something perfect, but when you guide it into the tactile ambiguity of a forgotten memory.',
    techDetails: [
      { label: 'Toolchain', value: 'Diffusion Models + Photoshop + Custom Grading' },
      { label: 'Focus', value: 'Subtle textures over hyper-realism' },
      { label: 'Exploration', value: 'Latent space interpolation' },
    ],
    featured: true,
  },
  {
    id: 'chromatics-of-the-everyday',
    title: 'Chromatics of the Everyday',
    category: 'photography',
    categoryLabel: 'Photo Studies',
    year: '2025',
    location: 'Daily Routines',
    tagline: 'Finding accidental harmony in mundane objects, peeling paint, and grocery store glass.',
    coverImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1400&q=85',
        caption: 'Sunlight filtering through morning tea steam and weathered wood.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Minimalist desktop study: notebook, fountain pen, and soft shadows.',
        aspectRatio: 'square',
      },
    ],
    description: 
      'A discipline of looking closer at ordinary environments without traveling to exotic locations.',
    personalThought: 
      'The camera is an instrument that teaches people how to see without a camera.',
    techDetails: [
      { label: 'Approach', value: 'Everyday observational stills' },
      { label: 'Format', value: 'Compact Prime' },
    ],
  },
  {
    id: 'digital-world-v1',
    title: 'Personal Digital World (v1)',
    category: 'digital',
    categoryLabel: 'Digital Craft',
    year: '2026',
    tagline: 'Constructing this digital home from raw intent, typography, and dark minimalism.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85',
        caption: 'The minimalist codebase that brings this personal archive to life.',
        aspectRatio: 'cinematic',
      },
    ],
    description: 
      'Designing and engineering a zero-cliché, dark editorial home that reflects an evolving creative path without commercial landing page formulas.',
    personalThought: 
      'The architecture of a personal site should feel like opening a quiet notebook, not entering a department store.',
    techDetails: [
      { label: 'Stack', value: 'React 19, Tailwind CSS, Motion' },
      { label: 'Philosophy', value: 'Taste over effects, free-first deployment' },
    ],
  },
];

export const REFLECTIVE_PAUSE_DATA = {
  question: 'What am I becoming?',
  pause: "I don't know yet.",
  conclusion: "Maybe that's the point.",
  subtext: 'Growth begins when you stop rushing to define the end before you have lived the journey.',
};

export const NOTES_DATA: Note[] = [
  {
    id: 'starting-before-ready',
    slug: 'starting-before-you-feel-ready',
    title: 'On Starting Before You Feel Ready',
    date: 'February 2026',
    readTime: '4 min read',
    category: 'Creativity',
    tags: ['Mindset', 'Creative Process', 'Beginner'],
    excerpt: 'The illusion of readiness is the most subtle form of procrastination. The work only begins when you accept the awkwardness of the first step.',
    content: {
      intro: 'For a long time, I believed that before publishing a website, sharing a photograph, or experimenting with code, I needed to possess a complete, bulletproof identity.',
      bodyParagraphs: [
        'We live in a culture that rewards the polished artifact and conceals the clumsy trial. When we look at masters in any field—whether documentary photographers or innovative engineers—we see their curated summit, not the thousand poorly exposed frames or broken builds that preceded it.',
        'The truth I am slowly learning is that clarity is an outcome of action, not a prerequisite for it. You do not think your way into becoming a creator; you make your way there, one frame, one script, one paragraph at a time.',
        'Embracing "Still becoming" is not a defense mechanism against criticism. It is an honest declaration that curiosity has no final destination. It gives you permission to make things that are unpretentious and true to where you stand today.',
      ],
      pullQuote: 'Clarity is an outcome of action, not a prerequisite for it.',
      takeaways: [
        'Release the need to look like an expert before you have done the repetitions.',
        'Document the process rather than faking the finish line.',
        'A simple project finished today beats a magnum opus never started.',
      ],
    },
    featured: true,
  },
  {
    id: 'light-shadows-human-eye',
    slug: 'light-shadows-and-the-human-eye',
    title: 'Light, Shadows, and the Human Eye',
    date: 'January 2026',
    readTime: '3 min read',
    category: 'Photography',
    tags: ['Visuals', 'Photography', 'Observation'],
    excerpt: 'What walking through a city with a camera teaches you about attention in an age of endless digital distraction.',
    content: {
      intro: 'When you hold a camera in your hands, the world transforms from a background setting into a dynamic canvas of contrast and intention.',
      bodyParagraphs: [
        'Most of our daily lives are spent in transit: rushing between commitments, eyes glued to notification feeds, ignoring the interplay of light reflecting off a shop window or the long, dramatic shadow cast by an evening tree.',
        'Photography is less about the mechanical button press and almost entirely about the quality of your attention. It forces you to ask: What is actually in front of me? Where is the source of illumination? What happens if I step two inches to the left?',
        'By training the eye to notice subtle tonal shifts, you begin to see beauty in ordinary, discarded corners. You realize that great photographs are not found in exotic postcards, but in the patience to observe what others walk past.',
      ],
      pullQuote: 'Photography is less about the button press and almost entirely about the quality of your attention.',
      takeaways: [
        'Look for the shadow first—it defines the shape of the light.',
        'Slow down your physical walking pace by 30% when observing a space.',
        'The simplest scenes often carry the strongest emotional resonance.',
      ],
    },
    featured: true,
  },
  {
    id: 'ai-as-a-brush',
    slug: 'ai-as-a-brush-not-a-brain',
    title: 'AI as a Brush, Not a Brain',
    date: 'December 2025',
    readTime: '5 min read',
    category: 'Creative Tech',
    tags: ['AI', 'Tools', 'Technology', 'Taste'],
    excerpt: 'Why human taste, restraint, and point-of-view become more critical as machine generation becomes completely frictionless.',
    content: {
      intro: 'Generative tools have made visual creation instantaneous. But speed is not substance, and raw output is not art.',
      bodyParagraphs: [
        'When anyone can generate thousands of hyper-detailed images in seconds with a few descriptive words, technical execution ceases to be the scarce commodity. The scarcity shifts entirely to discernment, curation, and the human perspective behind the prompt.',
        'I do not view AI as a replacement for human craft, but as an extraordinary new pigment. It allows you to rapidly prototype visual metaphors, explore unexpected textures, and test hypotheses that would have otherwise taken weeks.',
        'The risk is leaning into the machine\'s default aesthetic—that glossy, hyper-saturated, synthetic sheen that screams "AI slop." The real challenge is bending these systems to produce work with restraint, tactile warmth, and emotional resonance.',
      ],
      pullQuote: 'When production is frictionless, taste is the only differentiator that remains.',
      takeaways: [
        'Use AI to expand your imagination, not to outsource your taste.',
        'Combine synthetic workflows with analog sensibilities and manual color work.',
        'The best AI work often feels deeply human and understated.',
      ],
    },
    featured: true,
  },
];

export interface LibraryResourceEntry {
  id: string;
  number: string;
  title: string;
  description: string;
  status: 'COMING SOON' | 'AVAILABLE';
  detailNote?: string;
}

export const LIBRARY_ENTRIES: LibraryResourceEntry[] = [
  {
    id: 'ebooks',
    number: '01',
    title: 'E-BOOKS',
    description: 'AI-assisted books and personal writing.',
    status: 'COMING SOON',
    detailNote: 'Long-form explorations on human creativity, machine collaboration, and digital craftsmanship in development.',
  },
  {
    id: 'guides',
    number: '02',
    title: 'GUIDES',
    description: 'Useful things I learn and create.',
    status: 'COMING SOON',
    detailNote: 'Step-by-step field notes, tonal grading workflows, and practical systems discovered along the way.',
  },
  {
    id: 'references',
    number: '03',
    title: 'REFERENCES',
    description: 'Tools, notes, resources and ideas worth sharing.',
    status: 'COMING SOON',
    detailNote: 'Curated lists of essential craft readings, design tools, prompt frameworks, and architectural ideas.',
  },
];


export const LIFE_LESSONS_DATA: LifeLesson[] = [
  {
    id: 'lesson-1',
    number: '01',
    title: 'Clarity Follows Action',
    insight: 'You do not think your way into becoming a creator; you make your way there through repetitions.',
    context: 'Waiting to feel "ready" is the most seductive trap. True confidence only emerges after you step onto the messy proving ground.',
    tag: 'Execution',
  },
  {
    id: 'lesson-2',
    number: '02',
    title: 'The Shadow Defines The Light',
    insight: 'Without contrast and constraints, work has no depth. Look for what frames the subject, not just the subject itself.',
    context: 'In photography and in thought, what you choose to exclude is just as powerful as what you choose to illuminate.',
    tag: 'Observation',
  },
  {
    id: 'lesson-3',
    number: '03',
    title: 'Taste Over Volume',
    insight: 'When machine generation is instantaneous, human discernment and restraint become the only genuine currency.',
    context: 'Resist the default gloss. Direct tools toward subtlety, warmth, and honest human emotion.',
    tag: 'Craft',
  },
  {
    id: 'lesson-4',
    number: '04',
    title: 'Still Becoming Is A Stance',
    insight: 'Embracing the beginner’s mind gives you the freedom to explore fearlessly without defending an ego.',
    context: 'It is not an excuse for passivity; it is an active commitment to stay curious and open to being corrected.',
    tag: 'Mindset',
  },
  {
    id: 'lesson-5',
    number: '05',
    title: 'Patience Unlocks Detail',
    insight: 'Stand at a single corner for forty minutes and the ambient noise evaporates—only the true structure remains.',
    context: 'Speed delivers volume, but patience delivers resonance that stands the test of time.',
    tag: 'Discipline',
  },
  {
    id: 'lesson-6',
    number: '06',
    title: 'Share The Scaffolding',
    insight: 'Don’t just share the polished summit; document the drafts, the failed iterations, and the open questions.',
    context: 'Generosity in sharing your process builds authentic connection rather than artificial admiration.',
    tag: 'Community',
  },
];

export const ABOUT_DATA = {
  sectionTitle: 'ABOUT GOPAL',
  quote: '“I’m still figuring it out — and I’m okay with that.”',
  paragraphs: [
    'I’m Gopal Singh. I’m interested in photography, AI, technology, visual creation and digital work. I like learning by experimenting, creating things, and paying attention to the lessons that come along the way.',
    'I don’t have every part of my future figured out yet. I’m exploring, learning and building as I go.',
    'This website is a record of that journey — the things I create, discover, learn and believe are worth sharing.',
  ],
  whatIExplore: [
    'PHOTOGRAPHY',
    'AI & CREATIVE TECHNOLOGY',
    'VISUAL & DIGITAL CREATION',
    'LEARNING & EXPERIMENTATION',
  ],
  portraitUrl: '/gopal-about.jpg',
  socials: [
    { name: 'Instagram', handle: '@gopalsingh.pn', url: 'https://www.instagram.com/gopalsingh.pn?igsi=bzZrZ2pxMXZ4NTdo', note: 'Visual journal' },
    { name: 'YouTube', handle: '@gopalsingh-rr6yi', url: 'https://youtube.com/@gopalsingh-rr6yi', note: 'Video explorations' },
    { name: 'TikTok', handle: '@gopalsingh_pn', url: 'https://www.tiktok.com/@gopalsingh_pn?_r=1&_t=ZS-996UkYVRlnY', note: 'Short moments' },
    { name: 'Facebook', handle: 'Gopal Singh', url: 'https://www.facebook.com/share/1BruyKJRTw/', note: 'Social' },
    { name: 'WhatsApp', handle: '+977 9707727608', url: 'https://wa.me/9779707727608', note: 'Direct message' },
    { name: 'Email', handle: 'gopalsingh.pn@gmail.com', url: 'mailto:gopalsingh.pn@gmail.com', note: 'Direct email' },
  ],
};

