import { ProjectsPageContentModel } from 'src/app/models/projects-config.model';

export const ProjectsPageContent: ProjectsPageContentModel = {
  title: 'Projects',
  description: `This page showcases a collection of projects I'm proud of. It's a work in
      progress, so check back regularly for updates as I continue to add more of
      what I've been building.`,
  heading: 'Projects I Have Shipped:',
  projects: [
    {
      url: '/projects/project-otp',
      title: 'Order Tracking Portal',
      description:
        'A high-performance Angular 18 SPA that delivers real-time order updates at national scale.',
      thumbnail: 'images/project-otp/wapple.jpg',
    },
    {
      url: '/projects/project-otp-custom-tool',
      title: 'Real-Time Development Utility',
      description:
        'A custom tool I built to help our team test and debug real-time features in the Order Tracking Portal. It streamlined workflows, improved visibility into live events, and accelerated delivery.',
      thumbnail: 'images/project-otp/wapple.jpg',
    },
    {
      url: '/projects/project-portfolio',
      title: 'Portfolio website',
      description:
        'A showcase of my work, skills, experience in software engineering and online resume.',
      thumbnail: 'images/Clint-CV-Pic.png',
    },
    {
      url: '/projects/project-home-diy',
      title: 'Not just a computer nerd',
      description:
        'A home renovation project where I built a media wall with electric fireplace.',
      thumbnail: 'images/project-home-diy/IMG_0821.webp',
    },
  ],
};
