import { ProjectHomeDiyModel } from 'src/app/models/ProjectHomeDiy.model';

export enum ContentType {
  IMAGE = 'image',
  IMAGES = 'images',
  TEXT = 'text',
  LIST = 'list',
}
export const ProjectHomeDiyConfig: ProjectHomeDiyModel = {
  title: 'Fireplace Media Wall – Custom DIY Project',
  description: [
    {
      type: ContentType.TEXT,
      content: `To transform a plain section of our living/dining room into a warm and inviting space for guests, my partner and I envisioned a minimalist media wall. The goal was to mount the TV cleanly, integrate an electric fireplace, conceal home security equipment, and create storage and decorative shelving — all with a polished, built-in look.`,
      label: '',
    },
    {
      type: ContentType.IMAGE,
      label: 'Concept Render',
      src: 'images/project-home-diy/concept-render.webp',
      alt: 'CAD rendering of media wall concept',
    },
    {
      type: ContentType.TEXT,
      content: `I began by creating concept renderings in Fusion 360 to help my partner visualise the space. Once we settled on the design, I modelled the internal timber frame and generated construction plans, including a material estimate. This planning process ensured smooth execution and minimal waste.`,
      label: '',
    },
    {
      type: ContentType.IMAGES,
      label: 'Construction Plans',
      images: [
        {
          src: 'images/project-home-diy/front.webp',
          alt: 'Construction plans front view of media wall',
        },
        {
          src: 'images/project-home-diy/back.webp',
          alt: 'Construction plans back view of media wall',
        },
        {
          src: 'images/project-home-diy/iso.webp',
          alt: 'Construction plans isometric view of media wall',
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
      label: 'Framing Progress',
      images: [
        {
          src: 'images/project-home-diy/frame-construction.webp',
          alt: 'Constructing the media wall frame in the garage',
        },
        {
          src: 'images/project-home-diy/frame-installing.webp',
          alt: 'Installing the media wall frame into position',
        },
        {
          src: 'images/project-home-diy/frame-up.webp',
          alt: 'Media wall frame upright and aligned',
        },
        {
          src: 'images/project-home-diy/frame-test-fit.webp',
          alt: 'Test fitting the fireplace into the frame',
        },
        {
          src: 'images/project-home-diy/frame-installed.webp',
          alt: 'Fully installed frame ready for cladding',
        },
        {
          src: 'images/project-home-diy/frame-cladding-a.webp',
          alt: 'Beginning to clad the media wall with plasterboard',
        },
        {
          src: 'images/project-home-diy/frame-cladding-b.webp',
          alt: 'Completed cladding of the frame with plasterboard',
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
      label: 'Plaster and paint',
      images: [
        {
          src: 'images/project-home-diy/plastering.webp',
          alt: 'Applying the first coat of plaster to the media wall',
        },
        {
          src: 'images/project-home-diy/plastering-sanded.webp',
          alt: 'Plaster sanded smooth and ready for painting',
        },
        {
          src: 'images/project-home-diy/paint-base.webp',
          alt: 'Base coat of paint applied to the media wall',
        },
        {
          src: 'images/project-home-diy/paint-top.webp',
          alt: 'Top coat of colour-matched paint for final finish',
        },
        {
          src: 'images/project-home-diy/paint-base.webp',
          alt: 'Another angle showing the base coat on the wall',
        },
        {
          src: 'images/project-home-diy/lower-skirting.webp',
          alt: 'Lower skirting installed after painting for clean finish',
        },
        {
          src: 'images/project-home-diy/upper-skirting.webp',
          alt: 'Upper skirting detail finishing the top edge of the media wall',
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
      label: 'Shelves and power for TV',
      images: [
        {
          src: 'images/project-home-diy/shelves-a.webp',
          alt: 'Hardwood shelf fitted into cavity above the fireplace',
        },
        {
          src: 'images/project-home-diy/shelves-b.webp',
          alt: 'View of the shelf with decorations and lighting',
        },
        {
          src: 'images/project-home-diy/shelves-c.webp',
          alt: 'Close-up showing shelf grain matching the flooring',
        },
        {
          src: 'images/project-home-diy/power-tv.webp',
          alt: 'Wall-mounted power outlet and cable routing for TV',
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
      type: ContentType.IMAGE,
      label: 'Before',
      src: 'images/project-home-diy/before.webp',
      alt: 'Completed media wall with mounted TV and fireplace',
    },
    {
      type: ContentType.IMAGE,
      label: 'After',
      src: 'images/project-home-diy/after.webp',
      alt: 'Completed media wall with mounted TV and fireplace',
    },
  ],
};
