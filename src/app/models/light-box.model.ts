export interface LightBoxGalleryState {
  isGalleryOpen: Boolean;
  index: number;
  imageGallery: ImageGallery[];
}

export interface ImageGallery {
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
}
