import React from 'react';

export interface Alien {
  id: string;
  name: string;
  color: string;
  description: string;
  icon: string;
  holoIcon?: React.ReactNode;
  details?: any;
}

export const SECTION_HOLOS: Record<string, string> = {
  about: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="20" r="8" stroke="#82ff00" stroke-width="2" fill="rgba(130,255,0,0.08)"/>
    <path d="M15 45C15 37 22 32 30 32C38 32 45 37 45 45" stroke="#82ff00" stroke-width="2"/>
    <path d="M10 52H22L25 48L30 55L35 45L38 52H50" stroke="#82ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  education: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 25L30 15L50 25L30 35L10 25Z" stroke="#82ff00" stroke-width="2" fill="rgba(130,255,0,0.08)"/>
    <path d="M15 30V40C15 40 20 45 30 45C40 45 45 40 45 40V30" stroke="#82ff00" stroke-width="2"/>
    <path d="M50 25V40" stroke="#82ff00" stroke-width="2"/>
  </svg>`,
  work: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="36" height="25" rx="2" stroke="#82ff00" stroke-width="2" fill="rgba(130,255,0,0.08)"/>
    <path d="M22 20V15C22 13.8954 22.8954 13 24 13H36C37.1046 13 38 13.8954 38 15V20" stroke="#82ff00" stroke-width="2"/>
    <path d="M45 52L52 45M52 45V50M52 45H47" stroke="#82ff00" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 52C35 52 38 48 45 45" stroke="#82ff00" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  skills: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="30" height="30" rx="2" stroke="#82ff00" stroke-width="2" fill="rgba(130,255,0,0.08)"/>
    <path d="M22 15V10M30 15V10M38 15V10" stroke="#82ff00" stroke-width="2"/>
    <path d="M22 50V45M30 50V45M38 50V45" stroke="#82ff00" stroke-width="2"/>
    <path d="M15 22H10M15 30H10M15 38H10" stroke="#82ff00" stroke-width="2"/>
    <path d="M50 22H45M50 30H45M50 38H45" stroke="#82ff00" stroke-width="2"/>
    <circle cx="30" cy="30" r="5" stroke="#82ff00" stroke-width="1"/>
  </svg>`,
  achievements: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 45H40M30 45V38M30 15L33 23H42L35 28L38 37L30 32L22 37L25 28L18 23H27L30 15Z" stroke="#82ff00" stroke-width="2" fill="rgba(130,255,0,0.08)" stroke-linejoin="round"/>
    <path d="M15 20C12 20 10 22 10 25C10 28 12 30 15 30" stroke="#82ff00" stroke-width="2"/>
    <path d="M45 20C48 20 50 22 50 25C50 28 48 30 45 30" stroke="#82ff00" stroke-width="2"/>
  </svg>`,
  volunteer: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 12C30 12 15 15 15 25C15 35 30 48 30 48C30 48 45 35 45 25C45 15 30 12 30 12Z" stroke="#82ff00" stroke-width="2" fill="rgba(130,255,0,0.08)"/>
    <path d="M25 30L28 33L35 26" stroke="#82ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  interests: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 10L20 32H30L25 50L40 28H30L35 10Z" stroke="#82ff00" stroke-width="2" fill="rgba(130,255,0,0.08)" stroke-linejoin="round"/>
  </svg>`,
  contact: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 35C33.3137 35 36 32.3137 36 29C36 25.6863 33.3137 23 30 23C26.6863 23 24 25.6863 24 29C24 32.3137 26.6863 35 30 35Z" stroke="#82ff00" stroke-width="2" fill="rgba(130,255,0,0.08)"/>
    <path d="M30 50C35 42 42 35 42 29C42 22.3726 36.6274 17 30 17C23.3726 17 18 22.3726 18 29C18 35 25 42 30 50Z" stroke="#82ff00" stroke-width="2"/>
    <path d="M10 15C15 10 20 8 30 8C40 8 45 10 50 15" stroke="#82ff00" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`
};

export const ALIENS: Alien[] = [
  {
    id: 'about',
    name: 'Identity',
    color: '#82ff00',
    description: 'Digital Marketing Aspirant, Entrepreneur, and Content Creator.',
    icon: '👤',
    holoIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M19 87v-8a16 16 0 0 1 16-16H65a16 16 0 0 1 16 16v8" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="29" r="16" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" />
      </svg>
    ),
    details: {
      tagline: 'Joe',
      age: 22,
      location: 'Clermont-Ferrand, France',
      profileImage: 'https://lh3.googleusercontent.com/d/1MeBLaua8Y9ppv2bJeMRwwL8LtSsI4Irz',
      summary: 'Exploring opportunities where I can deliver impact in Digital Marketing, Content, and Communication.',
      fullText: "Originally from Madurai, India. Currently pursuing a Masters at Clermont School of Business, France.\n\nMy career path took an unexpected turn — from Civil Engineering to the Digital world.\n\nIt was the digital era that changed everything for me. I fell in love with how content, platforms and creativity can build something real.\n\nI want to explore more of this space, understand it deeper, and grow within it.\n\nMy dream is to scale up my startup Crea8tiv with my small team — that's something I've been building and it means a lot to me.\n\nI'm exploring opportunities where I can deliver impact in Digital Marketing, Content, and Communication."
    }
  },
  {
    id: 'education',
    name: 'Archives',
    color: '#82ff00',
    description: 'Academic milestones from India to the heart of France.',
    icon: '🎓',
    holoIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M8 41.6L50 20.8L92 41.6L50 62.4L8 41.6Z" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 50V75C25 75 33.3 87.5 50 87.5C66.6 87.5 75 75 75 75V50" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      items: [
        {
          school: 'Clermont School of Business',
          degree: 'Programme Grande École (PGE2)',
          field: 'Business, Management & Marketing',
          duration: 'Sept 2025 – Aug 2027',
          location: 'France',
          bullets: ['› Pursuing advanced studies in Business and Marketing', '› Adapting to international business environments']
        },
        {
          school: 'Kamaraj College of Engineering and Technology',
          degree: 'Bachelor of Engineering (B.E.)',
          field: 'Civil Engineering',
          duration: 'May 2020 – May 2024',
          bullets: ['› Focused on structural engineering and project management', '› Developed strong analytical and problem-solving skills']
        },
        {
          school: "St. John's Matric. Hr. Sec. School",
          degree: '12th Standard',
          field: 'Bio Maths',
          duration: '2018 – 2020'
        }
      ],
      certs: ['TOEIC (CEFR Level: B2)', 'Fundamentals of Digital Marketing'],
      pub: 'Removal of Particulate Matter in Air using Prosopis Juliflora Paint'
    }
  },
  {
    id: 'work',
    name: 'Missions',
    color: '#82ff00',
    description: 'Professional field operations in marketing and creative strategy.',
    icon: '💼',
    holoIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="8.3" y="29.1" width="83.3" height="58.3" rx="8.3" ry="8.3" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M66.6 87.5V20.8a8.3 8.3 0 0 0-8.3-8.3h-16.6a8.3 8.3 0 0 0-8.3 8.3v66.6" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      items: [
        { 
          title: 'Digital Marketing & Communications Consultant', 
          company: 'Green Cloud Nine — Austria (Remote)', 
          duration: 'Feb 2026 – Present', 
          website: 'greencloudnine.com',
          bullets: [
            '› Manage multi-channel content aligned with campaign goals',
            '› Apply SEO (keywords, on-page optimization) to improve visibility',
            '› Monitor campaign performance and optimize using analytics'
          ]
        },
        { 
          title: 'Social Media & Graphics Intern', 
          company: 'MOSTRO.xyz — Paris (Remote)', 
          duration: 'Jan 2026 – Present', 
          website: 'mostro.xyz',
          bullets: [
            '› Produced and optimized social media content (video and graphics)',
            '› Collaborated on campaign ideation and content planning'
          ]
        },
        { 
          title: 'Social Media Account Operation', 
          company: 'Klap — Paris (Remote)', 
          duration: 'Feb 2026 – Present', 
          website: 'klap.app',
          bullets: [
            '› Daily content publishing and community management across Instagram and TikTok'
          ]
        },
        { 
          title: 'International Student Ambassador', 
          company: 'University Living — India (Remote)', 
          duration: 'Dec 2025 – Present', 
          bullets: [
            '› Developed and distributed student-focused digital content, supporting marketing initiatives and enhancing engagement and visibility across platforms.'
          ]
        },
        { 
          title: 'Founder & CEO', 
          company: 'Crea8tiv — Madurai, India (Remote)', 
          duration: 'Dec 2023 – Present', 
          website: 'crea8tiv.in',
          bullets: [
            '› Founded and scaled a social media agency for 30+ clients',
            '› Led cross-functional teams of editors, designers, and writers',
            '› End-to-end client management and strategy'
          ]
        },
        { 
          title: 'Trainee Program Producer', 
          company: 'Behindwoods — Chennai (Onsite)', 
          duration: 'Apr 2024 – Jan 2025', 
          website: 'behindwoods.com',
          bullets: [
            '› Scaled Instagram from 0 to 170K+ followers',
            '› Contributed to YouTube growth from 225K to 270K+',
            '› Produced viral content series exceeding 25M views'
          ]
        },
        { 
          title: 'Graphic Designer (Thumbnail Designs)', 
          company: 'Vedantu — Bengaluru (Onsite)', 
          duration: 'Dec 2023 – Apr 2024', 
          type: 'Internship',
          website: 'vedantu.com',
          bullets: [
            '› Crafted engaging, click-worthy thumbnail designs for multi-lingual sessions (Tamil and Hindi) across diverse digital platforms',
            '› Developed compelling community posters to foster brand engagement',
            '› Executed video editing tasks with enhancements to optimize content delivery'
          ]
        },
        { 
          title: 'Graphic Designer', 
          company: 'Kriya & Reeths — Coimbatore (Remote)', 
          duration: 'Sep 2023 – Nov 2023', 
          type: 'Internship',
          website: 'kriyareeths.com',
          bullets: [
            '› Crafted compelling social media posters for digital marketing initiatives',
            '› Partnered with creative team on design strategies, upholding brand integrity',
            '› Used Adobe Creative Suite (Photoshop, Illustrator, InDesign) for high-quality visuals',
            '› Engaged in creative brainstorming for innovative campaign ideas',
            '› Refined designs through iterative editing aligned with brand guidelines',
            '› Managed multiple design projects, consistently delivering within deadlines'
          ]
        }
      ]
    }
  },
  {
    id: 'skills',
    name: 'Arsenal',
    color: '#82ff00',
    description: 'Technical capabilities and creative tools for digital dominance.',
    icon: '🛠️',
    holoIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="16.6" y="16.6" width="66.6" height="66.6" rx="8.3" ry="8.3" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="37.5" y="37.5" width="25" height="25" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" />
        <path d="M37.5 4.1v12.5M62.5 4.1v12.5M37.5 83.3v12.5M62.5 83.3v12.5M83.3 37.5h12.5M83.3 62.5h12.5M4.1 37.5h12.5M4.1 62.5h12.5" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      categories: [
        { name: 'Content Creation', list: ['Video Editing', 'Graphic Design', 'Social Media Strategy', 'Content Structuring', 'Platform Adaptation'] },
        { name: 'Digital Marketing', list: ['SEO & Optimization', 'Performance Analytics', 'Paid Campaigns', 'Meta Business Suite', 'YouTube Studio'] },
        { name: 'Tools & Platforms', list: ['Adobe Creative Cloud', 'CapCut', 'Canva', 'Analytics Tools', 'Multi-platform Integration'] },
        { name: 'Languages', list: ['Tamil (Native)', 'English (B2)', 'French (Elementary)', 'Hindi (Elementary)'] },
        { name: 'Soft Skills', list: ['Team Leadership', 'Creative Strategy', 'Project Management', 'Audience Insights', 'Adaptability', 'Cross-Cultural Communication'] }
      ]
    }
  },
  {
    id: 'achievements',
    name: 'Milestones',
    color: '#82ff00',
    description: 'Significant breakthroughs in content creation and digital growth.',
    icon: '🏆',
    holoIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50 8.3 62.8 34.4 91.6 38.6 70.8 58.9 75.7 87.5 50 74 24.2 87.5 29.1 58.9 8.3 38.6 37.1 34.4 50 8.3" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      intro: "It all began when my friend and I started a small Instagram page — now at 40K+ followers — and a YouTube channel that hit 80K views before it was taken down due to a copyright strike. What began as simple edits slowly grew into my passion for crafting motivational videos that truly connect with people. That setback pushed me toward more original content.\n\nDuring COVID, we didn't stop. We explored 2D animation and eventually formed Vortex Pictures — creating and publishing our friends' short films.\n\nA small page turned into a creative journey that shaped everything I do today.",
      stats: [
        { label: 'Instagram Followers', value: '40K+' },
        { label: 'Creative Projects Built from Zero', value: '2' }
      ],
      cards: [
        {
          title: 'Motive Editz',
          subtitle: 'Instagram · 40K+ Followers',
          description: 'Started as a simple edit page. Grew into a motivational content platform with 40K+ organic followers. Built from zero with no budget — just creativity and consistency.',
          tags: ['Reels', 'Motivation', 'Content Creation', 'Growth'],
          link: 'instagram.com/motive__editz',
          url: 'https://www.instagram.com/motive__editz'
        },
        {
          title: 'Vortex Pictures',
          subtitle: 'YouTube · Short Films & Animation',
          description: 'Co-founded during COVID. Created and published short films and 2D animated content with friends.',
          tags: ['Short Films', '2D Animation', 'YouTube', 'Filmmaking'],
          link: 'youtube.com/@vortexpictures7076',
          url: 'https://www.youtube.com/@vortexpictures7076'
        }
      ]
    }
  },
  {
    id: 'volunteer',
    name: 'Allies',
    color: '#82ff00',
    description: 'Community contributions and collaborative student initiatives.',
    icon: '🤝',
    holoIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M75 45.8V25a8.3 8.3 0 0 0-8.3-8.3v0a8.3 8.3 0 0 0-8.3 8.3v0" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M58.3 41.6V16.6a8.3 8.3 0 0 0-8.3-8.3v0a8.3 8.3 0 0 0-8.3 8.3v0" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M41.6 43.7V25a8.3 8.3 0 0 0-8.3-8.3v0a8.3 8.3 0 0 0-8.3 8.3v0" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M75 33.3a8.3 8.3 0 1 1 16.6 0v25a33.3 33.3 0 0 1-33.3 33.3h-8.3c-11.6 0-18.7-3.5-24.9-9.7l-15-15a8.3 8.3 0 0 1 11.7-11.7L29.1 62.5" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      items: [
        { role: 'Video Editor', org: 'International Students Community (ISC) — Clermont-Ferrand', duration: 'Oct 2025 – Present' },
        { role: 'International Student Ambassador', org: 'GO2C Club — Clermont-Ferrand', duration: 'Oct 2025 – Present' },
        { role: 'Video Editor Volunteer', org: "Graines d'Espoir — Provence, France", duration: 'Aug 2025 – Present' },
        { role: 'Communication Team Member', org: 'Quoi de Neuf Gergo — Clermont-Ferrand', duration: 'Dec 2025 – Present', category: 'Arts and Culture' }
      ]
    }
  },
  {
    id: 'interests',
    name: 'Core',
    color: '#82ff00',
    description: 'Personal interests that fuel the creative engine.',
    icon: '🎨',
    holoIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M54.1 8.3L12.5 58.3H50L45.8 91.6L87.5 41.6H50L54.1 8.3Z" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      items: [
        {
          title: '🍳 Cooking',
          content: "South Indian cuisine is my thing. I love to cook, love to try new dishes, and most of all I love cooking and preparing food for others.\n\n(I'll bring you a special dish sometime 😄)"
        },
        {
          title: '✈️ Travelling',
          content: "I love to travel alone — to explore new places, new cultures, new people. Sometimes you discover yourself when you get lost alone.\n\n(Suggest me some underrated places 📍)"
        },
        {
          title: '🎮 Gaming',
          content: "I love story-based adventure games. NFS Most Wanted 2007, God of War, Tomb Raider, Uncharted — these are my kind of games.\n\n(Let's catch up sometime 🎮)"
        },
        {
          title: '🎬 Movies',
          content: "I watch movies regardless of genre or language. But I have a special love for feel-good movies and sci-fi. I genuinely believe cinema is the only thing that can manipulate any reality."
        },
        {
          title: '📱 Trends & Digital Culture',
          content: "I love staying on top of new trends. I have a solid circle of tech-savvy friends who keep me in the loop. Staying updated is not just a habit — it's part of who I am."
        }
      ]
    }
  },
  {
    id: 'contact',
    name: 'Nexus',
    color: '#82ff00',
    description: 'Establish a connection and initiate collaboration.',
    icon: '📧',
    holoIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M20.8 50a29.1 29.1 0 0 1 58.3 0" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35.4 64.5a14.5 14.5 0 0 1 29.1 0" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="83.3" r="4.1" fill="rgba(130,255,0,0.1)" stroke="#82ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      phone: '+33 689 398 692',
      email: 'jothibasumi6a@gmail.com',
      availability: "Currently based in Clermont-Ferrand, France. Actively exploring an Alternance starting September 2026 in Digital Marketing, Communication, or Social Media. Open to relocate anywhere in France and any European country, as well as international opportunities.",
      links: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jothibasu-ramalakshmanan/', handle: 'linkedin.com/in/jothibasu-ramalakshmanan' },
        { name: 'Instagram', url: 'https://www.instagram.com/joetheamateur/', handle: '@joetheamateur' },
        { name: 'Agency', url: 'https://www.crea8tiv.in/', handle: 'crea8tiv.in' }
      ]
    }
  }
];

export const SOUNDS = {
  DIAL: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  TRANSFORM: 'https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptoken=37968_37968_1', // Placeholder for Omnitrix SFX
  CLOSE: 'https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3',
  THEME: 'https://www.myinstants.com/media/sounds/ben-10-theme-song.mp3'
};
