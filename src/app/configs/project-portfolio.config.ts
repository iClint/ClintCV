import { TickerComponent } from 'src/app/shared/ticker/ticker.component';
import { ContentType, PreviewSize } from '../enums/light-box.enums';
import { ProjectContentModel } from '../models/project-config.model';

export const ProjectPortfolioContent: ProjectContentModel = {
  title: 'Personal Portfolio & Technical Blog',
  content: [
    {
      type: ContentType.TEXT,
      content:
        'This site is a custom-built portfolio and technical blog where I showcase my work and share what I’ve learned. It’s built with Angular 19 standalone components and Angular Material 3, using lazy loading and the provideRouter API for fast, maintainable navigation.',
      label: '',
    },
    {
      type: ContentType.LIST,
      items: [
        'Project write-ups like the Woolworths Order Tracking Portal, presented with mock data and screenshots.',

        'A responsive, dark-first design that adapts cleanly to mobile and desktop.',

        'A config-driven content system, so pages are built from typed data rather than hand-written markup.',

        'Reusable components such as an image lightbox, an animated ticker, and a scroll-reveal directive.',
      ],
      label: '',
    },
    {
      type: ContentType.TEXT,
      content:
        'The site is version-controlled on GitHub, with a GitHub Actions pipeline that builds, tests, and deploys on every push to the main branch, so the latest version is always live without manual steps.',
      label: '',
    },
    {
      type: ContentType.TEXT,
      content:
        'As part of that pipeline, the full unit test suite runs first. If any test fails, the build fails and nothing is deployed.',
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
      type: ContentType.HEADING,
      content: 'Angular Material 3 theming',
    },
    {
      type: ContentType.TEXT,
      content:
        'The interface is built on Angular Material 3 with a custom theme I call dark developer-luxe: a near-black canvas, an electric cyan-to-violet accent, and monospace detailing. I drive it through Material’s design tokens, overriding the system colours with light-dark() pairs so the whole site follows the operating system’s light or dark setting automatically, with a manual toggle in the header to override it.',
      label: '',
    },
    {
      type: ContentType.HEADING,
      content: 'Config-driven content',
    },
    {
      type: ContentType.TEXT,
      content:
        'Each page renders from a typed configuration object rather than fixed markup. A small set of content blocks (headings, text, lists, image galleries, and video) is enough to assemble any project write-up, which keeps the content separate from the presentation and makes new pages quick to add.',
      label: '',
    },
    {
      type: ContentType.HEADING,
      content: 'Light-box component',
    },
    {
      type: ContentType.TEXT,
      content:
        'The LightBoxService and LightBoxComponent provide a global, reusable way to display images in an immersive overlay. The service holds the lightbox state, including whether it is open, which gallery is active, and the current image, while the component subscribes to that state and renders a responsive, fullscreen view with smooth transitions. Users can open a single image or step through a gallery using keyboard-accessible controls, all without duplicating lightbox logic across the app.',
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.SMALL,
      images: [
        {
          imageSrc: 'images/project-otp/otp-grab-01.png',
          imageAlt: 'Order Tracking Portal Screenshot',
          imageLabel: 'Start of the order tracking journey',
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
        'The TickerComponent is an animated, auto-advancing display for cycling through messages or highlights at the top of a page. It supports optional headings, smooth fade transitions, and both automatic and manual navigation. Users can move between items with chevron buttons or dot indicators, while a progress bar tracks the timing of each slide. Built with Angular’s modern template syntax and animations, it is lightweight and reusable.',
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
    {
      type: ContentType.HEADING,
      content: 'Complete test coverage:',
    },
    {
      type: ContentType.TEXT,
      content:
        'Complete test coverage means every part of the application is verified, from core business logic to reusable components and UI interactions. The suite combines unit, integration, and end-to-end tests, giving me confidence that new features don’t break existing functionality. CI runs these tests on every build, and any failure blocks deployment, so only validated code reaches production. The screenshot shows a fully passing run with coverage metrics.',
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.LARGE,
      images: [
        {
          imageSrc: 'images/project-otp/test-coverage.png',
          imageAlt: 'Test coverage screenshot',
          imageLabel: '100% test coverage across all files and logic paths',
        },
      ],
      label: '',
    },
  ],
};
