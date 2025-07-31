import { TickerComponent } from 'src/components/ticker/ticker.component';
import { ContentType, PreviewSize } from '../enums/light-box.enums';
import {
  ProjectContent,
  ProjectContentModel,
} from '../models/project-config.model';

export const ProjectPortfolioContent: ProjectContentModel = {
  title: 'Personal Portfolio & Technical Blog',
  content: [
    {
      type: ContentType.TEXT,
      content:
        'This website is a custom-built portfolio and technical blog designed to showcase my work, share what I’ve learned, and demonstrate my approach to clean, user-focused development. Built with Angular 18 standalone components, it leverages lazy loading and modern routing with provideRouter to ensure maintainability and fast navigation.',
      label: '',
    },
    {
      type: ContentType.LIST,
      items: [
        'Project showcases like the Woolworths Order Tracking Portal, presented with mock data and detailed write-ups.',

        'Clean, responsive design optimised for both mobile and desktop.',

        'Content-first structure, focusing on clarity, speed,and accessibility.',

        'A platform for sharing technical insights and frontend experiments with Angular and related technologies.',
      ],
      label: '',
    },
    {
      type: ContentType.TEXT,
      content:
        'This site is actively maintained and version-controlled on GitHub using GitHub Actions to automatically build and deploy to GitHub Pages whenever new commits are pushed, ensuring the latest updates are always live without manual intervention.',
      label: '',
    },
    {
      type: ContentType.TEXT,
      content:
        'As part of the build pipeline, the full unit test suite is run. Any failing test will cause the build to fail, and the build will not be deployed.',
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.LARGE,
      images: [
        {
          imageSrc: 'images/project-porfolio/project-portfolio.png',
          imageAlt: 'Design, build and deployment flow',
          imageLabel: 'Design, build and deployment flow',
        },
      ],
      label: 'Design, build and deployment flow',
    },
    {
      type: ContentType.TEXT,
      content:
        'I have deliberately kept the design minimalistic, focusing on usability and performance, and avoided the use of third party libraries even where it might have been easier to do so. some examples include:',
      label: '',
    },
    {
      type: ContentType.HEADING,
      content: 'Custom components and pure CSS',
    },
    {
      type: ContentType.TEXT,
      content:
        'The use of CSS and custom components for layout, instead of relying on a UI framework like Angular Material, demonstrates my ability to build from scratch when needed. This approach allows for full control over styling, performance, and responsiveness, and showcases my understanding of layout systems and design consistency without framework dependencies.',
      label: '',
    },
    {
      type: ContentType.HEADING,
      content: 'Pure CSS small device Slideout Navigation',
    },
    {
      type: ContentType.TEXT,
      content:
        'The mobile navigation menu is built entirely with CSS, without relying on JavaScript or third-party libraries. This approach keeps the implementation lightweight, performant, and accessible, while still providing smooth toggle animations and responsive behavior across screen sizes.',
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.LARGE,
      images: [
        {
          imageSrc: 'images/project-porfolio/slideout-navigation.gif',
          imageAlt: 'Slideout navigation menu for mobile devices',
          imageLabel: 'Slideout navigation menu for mobile devices',
        },
      ],
      label: 'Example of mobile or small screen navigation menu',
    },
    {
      type: ContentType.HEADING,
      content: 'Light-box component',
    },
    {
      type: ContentType.TEXT,
      content:
        'The LightBoxService and LightBoxComponent provide a global, reusable solution for displaying images in an immersive lightbox view. The service manages the state of the lightbox, including whether it is open, which image or gallery is active, and navigation between images. The component subscribes to this state and renders the images in a responsive, fullscreen overlay with smooth transitions. Users can view a single image or navigate through a gallery using built‑in controls, and the implementation ensures accessibility, keyboard navigation support, and a consistent experience across the application without needing to duplicate lightbox logic in multiple components.',
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.SMALL,
      images: [
        {
          imageSrc: 'images/project-otp/otp-grab-01.png',
          imageAlt: 'Order Tracking Portal Screenshot',
          imageLabel: 'Start of the order tracking Jorney',
        },
        {
          imageSrc: 'images/project-otp/otp-grab-02.png',
          imageAlt: 'Order Tracking Portal Screenshot',
          imageLabel: 'Delivery driver information is revealed in real time',
        },
        {
          imageSrc: 'images/project-otp/otp-grab-03.png',
          imageAlt: 'Order Tracking Portal Screenshot',
          imageLabel:
            'Info modal explaining the delivery methods and promoting driver rating',
        },
      ],
      label: 'Click to open the light box',
    },
    {
      type: ContentType.HEADING,
      content: 'Ticker component',
    },
    {
      type: ContentType.TEXT,
      content:
        'The TickerComponent provides an animated, auto‑advancing display for cycling through messages or highlights at the top of a page. It supports optional headings, smooth fade transitions, and both automatic and manual navigation through its content. Users can move between items using chevron buttons or dot indicators, while an optional progress bar visually tracks the timing of each slide. Designed with Angular’s modern template syntax and animations, the component is lightweight, reusable, and ideal for drawing attention to key announcements, promotions, or dynamic page content.',
      label: '',
    },

    {
      type: ContentType.COMPONENT,
      component: TickerComponent,
      inputs: {
        items: [
          'example ticker item',
          'this is another example ticker item',
          'three ticker items are the charm',
        ],
      },
    },
  ],
};
