import { ContentType } from '../pages/projects/project-home-diy/project-home-diy.config';

export interface ProjectHomeDiyModel {
  title: string;
  description: ProjectHomeDiyContent[];
}

export type ProjectHomeDiyContent =
  | TextContent
  | ImageContent
  | ImagesContent
  | ListContent;

export interface TextContent {
  type: ContentType.TEXT;
  content: string;
  label: string;
}

export interface ImageContent {
  type: ContentType.IMAGE;
  label: string;
  src: string;
  alt: string;
}

export interface ImagesContent {
  type: ContentType.IMAGES;
  images: {
    src: string;
    alt: string;
    label?: string;
  }[];
  label?: string;
}

export interface ListContent {
  type: ContentType.LIST;
  items: string[];
  label: string;
}
