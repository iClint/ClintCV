import {
  HomePageContentModel,
  HomeTickerConfigModel,
} from 'src/app/models/home-config.model';

export interface HeroAction {
  label: string;
  icon: string;
  route?: string;
  href?: string;
  primary?: boolean;
}

export interface HomeHeroConfigModel {
  availability: string;
  name: string;
  role: string;
  tagline: string;
  techTags: string[];
  actions: HeroAction[];
}

export const HomeHeroConfig: HomeHeroConfigModel = {
  availability: 'Available for opportunities',
  name: 'Clint Kingston',
  role: 'Fullstack Software Engineer',
  tagline:
    'I build real-time, high-performance web platforms with .NET, Angular, and Azure. Most of my recent work runs at national scale.',
  techTags: ['.NET', 'Angular', 'Azure', 'TypeScript', 'C#', 'RxJS'],
  actions: [
    {
      label: 'View projects',
      icon: 'arrow_forward',
      route: '/projects',
      primary: true,
    },
    { label: 'Get in touch', icon: 'mail', route: '/contact' },
    {
      label: 'Résumé',
      icon: 'description',
      href: 'documents/Clint_Kingston_Resume-Current.pdf',
    },
  ],
};

export const HomeTickerConfig: HomeTickerConfigModel = {
  title: '',
  items: [
    'Architected and rebuilt the Woolworths Order Tracking Portal into a real-time Angular 18 SPA used across millions of orders.',

    'Cut load times and memory overhead by modularizing components and refactoring shared services with lazy loading.',

    'Integrated a token-driven design system across the app without blocking team velocity or needing a full rewrite.',

    'Shipped a real-time driver rating feature from scratch, end-to-end, with full Cypress coverage.',
    'Built observable-driven UIs and maintained consistent test coverage across unit, integration, and E2E layers.',

    'Skilled across Angular, .NET, Azure, MongoDB, Cypress, and Docker, and always picking up more.',
    'Comfortable with Agile delivery, whether that means two-week sprints, Kanban flows, or a Jira board lost in tab hell.',

    'Known for clean commits, practical architecture, and getting things shipped without drama.',
  ],
};

export const HomePageContent: HomePageContentModel = {
  tldr: {
    title: 'The TL;DR',
    content: [
      `I work across real-time systems, scalable UIs, process improvements, and the gap between technical and non-technical teams. The common thread is shipping useful results quickly. If you’re hiring or just want to connect, get in touch.`,

      `I bring more than code. A background outside of tech means I’m comfortable taking on unfamiliar problems and working across different roles.`,
    ],
    actions: [],
  },
  keyProjects: {
    title: 'Key Projects',
    content: `As a core contributor to Woolworths’ Order Tracking Portal, I helped
        rebuild the platform into a high-performance Angular 18 SPA that
        delivers real-time order updates at national scale. My work spanned
        design system integration, platform optimization, and reactive
        architecture.`,
    list: [
      {
        label: 'Core Design System Alignment',
        content: `Integrated token-based
          design system elements, balancing accessibility with rapid development
          velocity.`,
      },
      {
        label: 'Platform Refactor & Optimisation',
        content: `Modularized logic,
          stateless component design, lazy loading, and significant performance
          gains.`,
      },
      {
        label: 'Real-time Driver Rating',
        content: `Delivered reactive driver
          feedback using observable-driven architecture and full Cypress
          coverage.`,
      },
    ],
  },
  howIWork: {
    title: 'How I Work',
    content: `Pragmatic, product-focused, Agile-native. I value clean commits, fast
        feedback loops, and shipping useful features without drama. Daily
        standups, sprint retros, and clean Jira boards are second nature.`,
  },
  techStack: {
    title: 'Tech Stack',
    content: `I’m fluent in Angular, .NET, Azure, MongoDB, Cypress, and Docker,
        and always picking up more, whether that’s the latest Angular features
        or new tools to improve my workflow.`,
    techStackIcons: [
      { file: 'Angular.svg', label: 'Angular' },
      { file: 'Apple.svg', label: 'Apple' },
      { file: 'Azure-Devops.svg', label: 'Azure Devops' },
      { file: 'Azure-SQL-Database.svg', label: 'Azure SQL Database' },
      { file: 'csharp.svg', label: 'csharp' },
      { file: 'CSS3.svg', label: 'CSS3' },
      { file: 'Cypress.svg', label: 'Cypress' },
      { file: 'Docker.svg', label: 'Docker' },
      { file: 'Git.svg', label: 'Git' },
      { file: 'HTML5.svg', label: 'HTML5' },
      { file: 'JavaScript.svg', label: 'JavaScript' },
      { file: 'Jest.svg', label: 'Jest' },
      { file: 'Kubernetes.svg', label: 'Kubernetes' },
      { file: 'Linux.svg', label: 'Linux' },
      { file: 'MongoDB.svg', label: 'MongoDB' },
      { file: 'Node.js.svg', label: 'Node.js' },
      { file: 'NPM.svg', label: 'NPM' },
      { file: 'NuGet.svg', label: 'NuGet' },
      { file: 'Postman.svg', label: 'Postman' },
      { file: 'TypeScript.svg', label: 'TypeScript' },
      { file: 'Windows-11.svg', label: 'Windows 11' },
    ],
  },
};
