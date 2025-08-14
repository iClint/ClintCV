import {
  AboutContentModel,
  AboutTickerConfigModel,
} from 'src/app/models/about-config.model';

export const AboutTickerConfig: AboutTickerConfigModel = {
  title: '',
  items: [
    'I started coding in BASIC in the 90s… on a beige box with a CRT that weighed more than I did.',

    'Built my first “real” app in high school—a janky (but functional) text-based version of the game show wheel of fortune.',

    'I used to run a Cash-in-Transit business. Yeah, the kind with guns and armored vehicles.',

    'Accident recovery + global pandemic = the weirdest pivot into tech you’ll ever hear.',

    'I can land a Bell 206 on a moving cargo ship... in Microsoft Flight Simulator.',

    'I monitor my overclocked CPU and GPU temps in real time with a custom RTSS overlay that looks like a nuclear reactor readout.',

    'I was selected for a WooliesX coding pilot program out of over 100 applicants—one of only 12.',

    'I don’t just drink coffee — I run on determination and a questionable amount of persistence.',

    'If your feature doesn’t work in the dark mode, did it ever really work?',

    'Tabs over spaces. Every time. You can pry my indentation from my cold, properly-aligned hands.',

    'Cut my teeth on an IBM-compatible 8086 clocked at a blistering 6MHz—with not one, but two 5¼" floppy drives and 640KB of pure chaos.',

    'Ever modded something *just because*? Yeah, stock is just a suggestion.',

    'Git still melts my brain sometimes... but somehow, I still get the job done.',

    'I love pranks. If something weird randomly happens, it was probably me.',
  ],
};

export const AboutPageContent: AboutContentModel = {
  aboutMe: {
    title: 'About Me',
    image: {
      url: 'images/Clint-CV-Pic.png',
      alt: 'Clint Kingston profile picture',
    },
    content: `I'm Clint — fullstack engineer, ex-armored car operator, and
            accidental career switcher. I build scalable systems, enjoy cutting
            through complexity, and still like to ship fast.`,
    quickFacts: [
      { label: 'Location', content: 'Central Coast, NSW, Australia' },
      { label: 'Experience', content: '3+ years in software engineering' },
      {
        label: 'Current Role',
        content: 'Software Engineer at Biscit',
      },
      { label: 'Philosophy', content: 'Clean code, fast shipping, zero fuss' },
      {
        label: 'Specialties',
        content: 'Angular, .NET, Azure, Real-time webapps',
      },
    ],
  },
  howIGotHere: {
    title: 'How I Got Here',
    list: [
      `Early 1990's Wrote BASIC on an IBM Compatable 8086 beige box.`,
      `Ran a Cash-in-Transit business for 10+ years (yes, with guns and armored vehicles).`,
      `Accident recovery + global pandemic = the weirdest pivot into tech you’ll ever hear.`,
    ],
  },
  profesionalJourney: {
    title: 'Professional Journey',
    list: [
      `Started as a self-taught developer, building small apps and websites.`,
      `Started in Woolworths Online, learned the art of customer chaos (I
          mean service).`,
      `Built a portfolio, landed a spot in WooliesX fullstack pilot tech
          accelerator program(12 out of 100+ candidates).`,
      `Smashed a 12-week bootcamp, earned my first dev gig.`,
      `Joined WooliesX in the Fulfilment dommain as a core contributor to the Order Tracking Portal.`,
      `Now an associate fullstack engineer with more than 3 years experience,
          architecting real-time systems and building scalable UIs.`,
      `Rebuilt the platform into a high-performance Angular 18 SPA that delivers real-time order updates at national scale.`,
      `Focused on design system integration, platform optimization, and reactive architecture.`,
      `Eager to tackle new challenges and keep advancing my career to the
          next level.`,
    ],
  },
  outsideOfWork: {
    title: 'Outside of Work',
    content: `When I’m not coding, you can find me tinkering with hardware, flying helicopters in MSFS inside a VR headset, tinkering with my home lab, paddle boarding, or teaching myself new tech. I’m also a big fan of coffee, and I’m not above using it as a performance-enhancing drug.`,
  },
};
