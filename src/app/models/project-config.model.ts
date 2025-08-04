import { Type } from '@angular/core';
import { ContentType, PreviewSize } from '../enums/light-box.enums';
import { VideoSize } from '../enums/video.enums';

export interface ProjectContentModel {
  title: string;
  content: ProjectContent[];
}

export type ProjectContent =
  | SubHeading
  | TextContent
  | ImagesContent
  | ListContent
  | ComponentContent
  | Video;

export interface Video {
  type: ContentType.VIDEO;
  src: string;
  label: string;
  videoSize: VideoSize;
}

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
  images: Image[];
  label?: string;
}

export interface Image {
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
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
