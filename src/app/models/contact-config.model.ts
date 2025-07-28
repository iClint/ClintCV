export interface ContactContentModel {
  title: string;
  description: string;
  links: ContactLinkModel[];
}

export interface ContactLinkModel {
  icon: string;
  url: string;
  label: string;
}
