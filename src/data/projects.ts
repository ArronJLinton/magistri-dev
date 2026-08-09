export type Project = {
  id: number;
  title: string;
  listingTitle: string;
  subtitle: string;
  mobile: string;
  tablet: string;
  desktop: string;
  category: string;
  client: string;
  metaLabel: string;
  tags: string[];
  description: string;
  listingDescription: string;
  quote?: string;
  featured?: boolean;
  ios?: string;
  android?: string;
  platformSection?: {
    title: string;
    description: string;
    tabletTitle: string;
    tabletDescription: string;
    mobileTitle: string;
    mobileDescription: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Aquilini Wines',
    listingTitle: 'Aquilini Wines Platform',
    subtitle: 'E-commerce built for premium wine discovery.',
    mobile: '/assets/img/project/aquilini-wines-mobile.png',
    tablet: '/assets/img/project/aquilini-wines-tablet.png',
    desktop: '/assets/img/project/aquilini-wines-desktop.png',
    category: 'Website Design/Development',
    client: 'Aquilini Wine Group',
    metaLabel: 'E-Commerce • Aquilini Brands',
    tags: ['E-Commerce', 'Wine Biz'],
    description:
      'A refined digital storefront experience for a premium wine brand, built for browsing, discovery, and conversion.',
    listingDescription:
      'A complete e-commerce ecosystem with inventory management, brand storytelling, and conversion-focused product experiences.',
    quote:
      'Magistri Dev transformed our digital presence with a polished platform that finally matches the quality of our wines.',
    featured: true,
    platformSection: {
      title: 'Cross-Platform Shopping',
      description:
        'A seamless browsing and checkout experience designed for desktop discovery and mobile purchasing on the go.',
      tabletTitle: 'Tablet Merchandising',
      tabletDescription:
        'Optimized product storytelling and catalog browsing for larger touch screens.',
      mobileTitle: 'Mobile Checkout',
      mobileDescription:
        'Fast, focused mobile flows that make purchasing simple from anywhere.',
    },
  },
  {
    id: 2,
    title: 'My Aphasia Coach',
    listingTitle: 'Cognitive Therapy App',
    subtitle: 'Software for Faster Aphasia Progress.',
    mobile: '/assets/img/project/aphasia-mobile.png',
    tablet: '/assets/img/project/aphasia-tablet.png',
    desktop: '/assets/img/project/aphasia-desktop.png',
    ios: 'https://apps.apple.com/us/app/my-aphasia-coach/id1163288893?ls=1',
    android:
      'https://play.google.com/store/apps/details?id=com.myaphasiacoach',
    category: 'Web/Mobile App',
    client: 'Phasic Software, LLC',
    metaLabel: 'Healthcare Tech • My Aphasia Coach',
    tags: ['Healthcare', 'App'],
    description:
      'A supportive coaching experience designed to help users practice language recovery with clarity and consistency.',
    listingDescription:
      'An AI-informed therapy platform that helps users practice language recovery with structured, accessible sessions.',
    platformSection: {
      title: 'Cross-Platform Accessibility',
      description:
        'A seamless experience across devices so patients and caregivers can continue progress wherever they are.',
      tabletTitle: 'Tablet Experience',
      tabletDescription:
        'Optimized for clinical settings and at-home detailed exercises.',
      mobileTitle: 'Mobile Companion',
      mobileDescription:
        'On-the-go practice sessions for consistent daily progress.',
    },
  },
  {
    id: 3,
    title: 'The Takedown',
    listingTitle: 'The Takedown Analytics',
    subtitle: 'Protect your content with clearer competitive insight.',
    mobile: '/assets/img/project/takedown-mobile.png',
    tablet: '/assets/img/project/takedown-tablet.png',
    desktop: '/assets/img/project/takedown-desktop.png',
    category: 'SaaS Dashboard',
    client: 'The Takedown',
    metaLabel: 'SaaS Dashboard • The Takedown',
    tags: ['SaaS Platform'],
    description:
      'A content-driven platform built to publish, organize, and scale editorial experiences with ease.',
    listingDescription:
      'A data visualization dashboard for competitive analysis, content protection workflows, and operational clarity.',
    platformSection: {
      title: 'Cross-Platform Operations',
      description:
        'Dashboards and workflows that stay clear and actionable from desktop strategy sessions to mobile check-ins.',
      tabletTitle: 'Tablet Review',
      tabletDescription:
        'Review alerts and content reports with a layout built for focused analysis.',
      mobileTitle: 'Mobile Alerts',
      mobileDescription:
        'Stay informed with streamlined mobile views for urgent updates.',
    },
  },
];

export const getProjectById = (id: string | number) =>
  projects.find((project) => String(project.id) === String(id));

/** @deprecated Prefer importing `projects` — kept for existing imports */
export const data = projects;
