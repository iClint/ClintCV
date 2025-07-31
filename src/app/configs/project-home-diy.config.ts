import { ContentType, PreviewSize } from 'src/app/enums/light-box.enums';
import { ProjectContentModel } from '../models/project-config.model';

export const ProjectHomeDiyContent: ProjectContentModel = {
  title: 'Fireplace Media Wall – Custom DIY Project',
  content: [
    {
      type: ContentType.TEXT,
      content: `To transform a plain section of our living/dining room into a warm and inviting space for guests, my partner and I envisioned a minimalist media wall. The goal was to mount the TV cleanly, integrate an electric fireplace, conceal home security equipment, and create storage and decorative shelving — all with a polished, built-in look.`,
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.LARGE,
      label: 'Concept Render',
      images: [
        {
          imageSrc: 'images/project-home-diy/concept-render.webp',
          imageAlt: 'CAD rendering of media wall concept',
          imageLabel: 'CAD rendering of media wall concept',
        },
      ],
    },
    {
      type: ContentType.TEXT,
      content: `I began by creating concept renderings in Fusion 360 to help my partner visualise the space. Once we settled on the design, I modelled the internal timber frame and generated construction plans, including a material estimate. This planning process ensured smooth execution and minimal waste.`,
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.SMALL,
      label: 'Construction Plans',
      images: [
        {
          imageSrc: 'images/project-home-diy/front.webp',
          imageAlt: 'Construction plans front view of media wall',
          imageLabel: '',
        },
        {
          imageSrc: 'images/project-home-diy/back.webp',
          imageAlt: 'Construction plans back view of media wall',
          imageLabel: '',
        },
        {
          imageSrc: 'images/project-home-diy/iso.webp',
          imageAlt: 'Construction plans isometric view of media wall',
          imageLabel: '',
        },
      ],
    },
    {
      type: ContentType.TEXT,
      content: `Using 90x45mm treated pine and 10mm plasterboard, I constructed the frame in our garage, then installed it on-site by modifying the existing skirtings and architraves to achieve a seamless fit. A test fit of the electric fireplace confirmed the precision of the framing.`,
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.SMALL,
      label: 'Framing Progress',
      images: [
        {
          imageSrc: 'images/project-home-diy/frame-construction.webp',
          imageAlt: 'Constructing the media wall frame in the garage',
          imageLabel: 'Constructing the media wall frame in the garage',
        },
        {
          imageSrc: 'images/project-home-diy/frame-installing.webp',
          imageAlt: 'Installing the media wall frame into position',
          imageLabel: 'Installing the media wall frame into position',
        },
        {
          imageSrc: 'images/project-home-diy/frame-up.webp',
          imageAlt: 'Media wall frame upright and aligned',
          imageLabel: 'Media wall frame upright and aligned',
        },
        {
          imageSrc: 'images/project-home-diy/frame-test-fit.webp',
          imageAlt: 'Test fitting the fireplace into the frame',
          imageLabel: 'Test fitting the fireplace into the frame',
        },
        {
          imageSrc: 'images/project-home-diy/frame-installed.webp',
          imageAlt: 'Fully installed frame ready for cladding',
          imageLabel: 'Fully installed frame ready for cladding',
        },
        {
          imageSrc: 'images/project-home-diy/frame-cladding-a.webp',
          imageAlt: 'Beginning to clad the media wall with plasterboard',
          imageLabel: 'Beginning to clad the media wall with plasterboard',
        },
        {
          imageSrc: 'images/project-home-diy/frame-cladding-b.webp',
          imageAlt: 'Completed cladding of the frame with plasterboard',
          imageLabel: 'Completed cladding of the frame with plasterboard',
        },
      ],
    },
    {
      type: ContentType.TEXT,
      content: `I had no prior experience plastering an entire wall, so I built a test section to practice on, including internal/external corners and steel bead edges for sharp finishes. Over several days, I completed three coats of plaster, allowing full cure time between sanding and feathering to ensure a flawless finish. I then applied a base coat and colour-matched top coats for a consistent, integrated look.`,
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.SMALL,
      label: 'Plaster and paint',
      images: [
        {
          imageSrc: 'images/project-home-diy/plastering.webp',
          imageAlt: 'Applying the first coat of plaster to the media wall',
          imageLabel: '',
        },
        {
          imageSrc: 'images/project-home-diy/plastering-sanded.webp',
          imageAlt: 'Plaster sanded smooth and ready for painting',
          imageLabel: '',
        },
        {
          imageSrc: 'images/project-home-diy/paint-base.webp',
          imageAlt: 'Base coat of paint applied to the media wall',
          imageLabel: '',
        },
        {
          imageSrc: 'images/project-home-diy/paint-top.webp',
          imageAlt: 'Top coat of colour-matched paint for final finish',
          imageLabel: '',
        },
        {
          imageSrc: 'images/project-home-diy/paint-base.webp',
          imageAlt: 'Another angle showing the base coat on the wall',
          imageLabel: '',
        },
        {
          imageSrc: 'images/project-home-diy/lower-skirting.webp',
          imageAlt: 'Lower skirting installed after painting for clean finish',
          imageLabel: '',
        },
        {
          imageSrc: 'images/project-home-diy/upper-skirting.webp',
          imageAlt:
            'Upper skirting detail finishing the top edge of the media wall',
          imageLabel: '',
        },
      ],
    },
    {
      type: ContentType.TEXT,
      content: `The design included a concealed cavity — styled like a chimney breast — which discreetly houses our CCTV and home security equipment. A matching hardwood shelf, cut to size, encloses this cavity and opens for access, doubling as general storage.`,
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.SMALL,
      label: 'Shelves and power for TV',
      images: [
        {
          imageSrc: 'images/project-home-diy/shelves-a.webp',
          imageAlt: 'Hardwood shelf fitted into cavity above the fireplace',
          imageLabel: 'Hardwood shelf fitted into cavity above the fireplace',
        },
        {
          imageSrc: 'images/project-home-diy/shelves-b.webp',
          imageAlt: 'View of the shelf with decorations and lighting',
          imageLabel: 'View of the shelf with decorations and lighting',
        },
        {
          imageSrc: 'images/project-home-diy/shelves-c.webp',
          imageAlt: 'Close-up showing shelf grain matching the flooring',
          imageLabel: 'Close-up showing shelf grain matching the flooring',
        },
        {
          imageSrc: 'images/project-home-diy/power-tv.webp',
          imageAlt: 'Wall-mounted power outlet and cable routing for TV',
          imageLabel: 'Wall-mounted power outlet and cable routing for TV',
        },
      ],
    },
    {
      type: ContentType.TEXT,
      content: `To complete the installation:`,
      label: '',
    },
    {
      type: ContentType.LIST,
      items: [
        'I extended power via a plug-in outlet from existing wiring.',
        'Mounted the TV and fireplace.',
        'Cut and installed hardwood display shelves to match our flooring.',
        'Installed pre-painted skirtings last to reduce masking and improve the paint finish.',
      ],
      label: 'Final touches',
    },
    {
      type: ContentType.TEXT,
      content: `The entire project took two weeks from initial CAD design to final touches, all done alongside full-time responsibilities. It’s a project I’m proud of — not just for the outcome, but as a demonstration of the hands-on, cross-disciplinary problem solving I enjoy bringing to any challenge.`,
      label: '',
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.LARGE,

      label: 'Before',
      images: [
        {
          imageSrc: 'images/project-home-diy/before.webp',
          imageAlt: 'Completed media wall with mounted TV and fireplace',
          imageLabel: 'Completed media wall with mounted TV and fireplace',
        },
      ],
    },
    {
      type: ContentType.IMAGES,
      previewSize: PreviewSize.LARGE,
      label: 'After',
      images: [
        {
          imageSrc: 'images/project-home-diy/after.webp',
          imageAlt: 'Completed media wall with mounted TV and fireplace',
          imageLabel: 'Completed media wall with mounted TV and fireplace',
        },
      ],
    },
  ],
};
