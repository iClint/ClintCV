import { ContentType, PreviewSize } from '../enums/light-box.enums';

export interface ProjectHomeDiyContentModel {
  title: string;
  description: ProjectHomeDiyContent[];
}

export type ProjectHomeDiyContent = TextContent | ImagesContent | ListContent;

export interface TextContent {
  type: ContentType.TEXT;
  content: string;
  label: string;
}

export interface ImagesContent {
  type: ContentType.IMAGES;
  previewSize: PreviewSize;
  images: {
    imageSrc: string;
    imageAlt: string;
    imageLabel: string;
  }[];
  label?: string;
}

export interface ListContent {
  type: ContentType.LIST;
  items: string[];
  label: string;
}
