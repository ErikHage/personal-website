export interface HobbyLink {
  url: string,
  description: string,
}

export interface HobbyImage {
  imagePath: string,
  caption: string,
}

export interface Hobby {
  name: string,
  description: string,
  links: HobbyLink[],
  images: HobbyImage[],
}
