export interface ImageWithCaption {
  imagePath: string,
  caption: string,
}

export interface RWBData {
  images: ImageWithCaption[],
}
