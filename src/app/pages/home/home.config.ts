import {
  HomePageContentModel,
  HomeTickerConfigModel,
} from 'src/app/models/home-config.model';

export const HomeTickerConfig: HomeTickerConfigModel = {
  title: '',
  items: [
    'Architected and rebuilt the Woolworths Order Tracking Portal into a real-time Angular 18 SPA used across millions of orders.',

    'Cut load times and memory overhead by modularizing components and refactoring shared services with lazy loading.',

    'Integrated a token-driven design system across the app without blocking team velocity or needing a full rewrite.',

    'Shipped a real-time driver rating feature from scratch, end-to-end, with full Cypress coverage.',
    'Built observable-driven UIs and maintained consistent test coverage across unit, integration, and E2E layers.',

    'Skilled across Angular, .NET, Azure, MongoDB, Cypress, and Docker — and always learning more.',
    'Fluent in Agile delivery — whether it’s two-week sprints, Kanban flows, or navigating a Jira board in tab hell.',

    'Known for clean commits, practical architecture, and getting things shipped without drama.',
  ],
};

export const HomePageContent: HomePageContentModel = {
  tldr: {
    title: 'The TL;DR',
    badge: '⭐️ Employed by Biscit ⭐️',
    content: [
      `Whether it’s architecting real-time systems, building scalable UIs, improving processes, or bridging technical and non-technical teams, I focus on delivering real value at speed. If you’re hiring or just want to connect, feel free to reach out.`,

      `I bring more than just code to the table — with a diverse background and wide-ranging skills, I’m comfortable wearing multiple hats and stepping into complex challenges.`,
    ],
    actions: [
    ],
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
    content: `I’m fluent in Angular, .NET, Azure, MongoDB, Cypress, and Docker.
        I’m always learning more — whether it’s the latest Angular features or
        new tools to improve my workflow.`,
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
