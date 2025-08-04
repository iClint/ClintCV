import { ContentType, PreviewSize } from '../enums/light-box.enums';
import { VideoSize } from '../enums/video.enums';
import { ProjectContentModel } from '../models/project-config.model';

export const ProjectOtpContent: ProjectContentModel = {
  title: 'Woolworths Online Grocery Order Tracking Portal',
  content: [
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.LARGE,
      images: [
        {
          imageSrc: 'images/project-otp/otp-banner.png',
          imageAlt: 'otp-banner',
          imageLabel: '',
        },
      ],
      label: '',
    },
    {
      type: ContentType.TEXT,
      content:
        'I worked as part of the WooliesX engineering team on the Order Tracking      Portal, used by customers nationwide to track grocery deliveries in real time. While the project was a collaborative effort, I was specifically responsible for designing and building many of the user interface components, ensuring they were accessible, responsive, and aligned with Woolworths’ design system.',
      label: '',
    },
    {
      type: ContentType.HEADING,
      content: 'My contributions included:',
    },
    {
      type: ContentType.LIST,
      items: [
        'Building reusable Angular components for the delivery tracking experience.',

        'Implementing real-time status updates anduser-friendly progress indicators.',

        'Collaborating with designers and backend engineers to deliver seamless',

        'customer experiences. Writing automated tests(Cypress, Jest) to maintain reliability during continuous deployment.',
      ],
      label: '',
    },
    {
      type: ContentType.HEADING,
      content: 'Key Angular component contributions:',
    },
    {
      type: ContentType.LIST,
      items: [
        'Real-time updates: Integrated SignalR for live streaming order status updates without page refresh.',

        'Dynamic Help Modal: Connected users with the best live support options, promoting native Android/iOS app for live chat or redirecting to web chat if preferred.',

        'Data-driven components: Displayed API response data from backend order tracking services, showing order status, delivery windows, and updates.',

        'Animated status tracking: Created visually engaging animated order status bars to improve user clarity.',

        'Live map tracking: Implemented live maps showing delivery driver location as orders neared delivery.',

        ' Tooltips & instructional modals: Designed guidance overlays and tooltips to help users understand features and stay informed throughout the delivery process.',
      ],
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
        {
          imageSrc: 'images/project-otp/otp-grab-04.png',
          imageAlt: 'Order Tracking Portal Screenshot',
          imageLabel:
            'Info Modal explaining the various stages of delivery updated in real time',
        },
        {
          imageSrc: 'images/project-otp/otp-grab-05.png',
          imageAlt: 'Order Tracking Portal Screenshot',
          imageLabel:
            'Info modal connecting users with the best help options and promoting the app',
        },
        {
          imageSrc: 'images/project-otp/otp-grab-06.png',
          imageAlt: 'Order Tracking Portal Screenshot',
          imageLabel:
            'Delivered stage provides Proof of delivery photo and driver rating survey',
        },
      ],
      label: 'Click to expand',
    },
    {
      type: ContentType.HEADING,
      content: 'Leveraging realtime data:',
    },
    {
      type: ContentType.TEXT,
      content:
        'Redesigned the live map tracking component to support both Woolworths fleet and third-party delivery partners (e.g. DoorDash, Uber), ensuring a unified experience across propositions. The solution established a persistent WebSocket connection using SignalR to stream real-time delivery data from the Live Delivery Tracking service to the frontend. The component also included robust business logic to handle network errors and fallback scenarios when tracking data was unavailable. This same SignalR infrastructure was leveraged to push live updates to order status, delivery events, and ETA changes across the customer-facing experience.',
      label: '',
    },
    {
      type: ContentType.VIDEO,
      src: 'images/project-otp/short-live-map.mp4',
      label: 'Live tracking using mocked geo-locations',
      videoSize: VideoSize.SMALL,
    },
  ],
};
