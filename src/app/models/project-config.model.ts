import { Type } from '@angular/core';
import { ContentType, PreviewSize } from '../enums/light-box.enums';

export interface ProjectContentModel {
  title: string;
  content: ProjectContent[];
}

export type ProjectContent =
  | SubHeading
  | TextContent
  | ImagesContent
  | ListContent
  | ComponentContent;

export interface SubHeading {
  type: ContentType.HEADING;
  content: string;
}

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

export interface ComponentContent {
  type: ContentType.COMPONENT;
  component: Type<any>;
  inputs?: { [key: string]: any };
}
