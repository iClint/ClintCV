export enum ContentType {
  IMAGE = 'image',
  IMAGES = 'images',
  TEXT = 'text',
  LIST = 'list',
}
export const ProjectHomeDiyConfig = {
  title: 'Fireplace Media Wall – Custom DIY Project',
  description: [
    {
      type: ContentType.TEXT,
      content: `To transform a plain section of our living/dining room into a warm and inviting space for guests, my partner and I envisioned a minimalist media wall. The goal was to mount the TV cleanly, integrate an electric fireplace, conceal home security equipment, and create storage and decorative shelving — all with a polished, built-in look.`,
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
    },
    {
      type: ContentType.IMAGES,
      label: 'Construction Plans',
      src: [
        'images/project-home-diy/front.webp',
        'images/project-home-diy/back.webp',
        'images/project-home-diy/iso.webp',
      ],
      alt: 'Construction plans for media wall',
    },
    {
      type: ContentType.TEXT,
      content: `Using 90x45mm treated pine and 10mm plasterboard, I constructed the frame in our garage, then installed it on-site by modifying the existing skirtings and architraves to achieve a seamless fit. A test fit of the electric fireplace confirmed the precision of the framing.`,
    },
    {
      type: ContentType.IMAGES,
      label: 'Framing Progress',
      src: [
        'images/project-home-diy/frame-construction.webp',
        'images/project-home-diy/frame-installing.webp',
        'images/project-home-diy/frame-up.webp',

        'images/project-home-diy/frame-test-fit.webp',
        'images/project-home-diy/frame-installed.webp',
        'images/project-home-diy/frame-cladding-a.webp',
        'images/project-home-diy/frame-cladding-b.webp',
      ],
      alt: 'Installing the media wall frame',
    },
    {
      type: ContentType.TEXT,
      content: `I had no prior experience plastering an entire wall, so I built a test section to practice on, including internal/external corners and steel bead edges for sharp finishes. Over several days, I completed three coats of plaster, allowing full cure time between sanding and feathering to ensure a flawless finish. I then applied a base coat and colour-matched top coats for a consistent, integrated look.`,
    },
    {
      type: ContentType.IMAGES,
      label: 'Plaster and paint',
      src: [
        'images/project-home-diy/plastering.webp',
        'images/project-home-diy/plastering-sanded.webp',
        'images/project-home-diy/paint-base.webp',
        'images/project-home-diy/paint-top.webp',
        'images/project-home-diy/paint-base.webp',
        'images/project-home-diy/lower-skirting.webp',
        'images/project-home-diy/upper-skirting.webp',
      ],
      alt: 'Plaster and paint',
    },
    {
      type: ContentType.TEXT,
      content: `The design included a concealed cavity — styled like a chimney breast — which discreetly houses our CCTV and home security equipment. A matching hardwood shelf, cut to size, encloses this cavity and opens for access, doubling as general storage.`,
    },
    {
      type: ContentType.IMAGES,
      label: 'Shelves and power for TV',
      src: [
        'images/project-home-diy/shelves-a.webp',
        'images/project-home-diy/shelves-b.webp',
        'images/project-home-diy/shelves-c.webp',
        'images/project-home-diy/power-tv.webp',
      ],
      alt: 'Shelves and pwer for TV',
    },
    { type: ContentType.TEXT, content: `To complete the installation:` },
    {
      type: ContentType.LIST,
      items: [
        'I extended power via a plug-in outlet from existing wiring.',
        'Mounted the TV and fireplace.',
        'Cut and installed hardwood display shelves to match our flooring.',
        'Installed pre-painted skirtings last to reduce masking and improve the paint finish.',
      ],
    },
    {
      type: ContentType.TEXT,
      content: `The entire project took two weeks from initial CAD design to final touches, all done alongside full-time responsibilities. It’s a project I’m proud of — not just for the outcome, but as a demonstration of the hands-on, cross-disciplinary problem solving I enjoy bringing to any challenge.`,
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
