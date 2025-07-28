export interface HomePageContentModel {
  tldr: {
    title: string;
    badge?: string;
    content: string[];
    actions: { label: string; href: string }[];
  };
  keyProjects: {
    title: string;
    content: string;
    list: { label: string; content: string }[];
  };
  howIWork: {
    title: string;
    content: string;
  };
  techStack: {
    title: string;
    content: string;
    techStackIcons: TechStackIcon[];
  };
}

export interface TechStackIcon {
  label: string;
  file: string;
}

export interface HomeTickerConfigModel {
  title: string;
  items: string[];
}
