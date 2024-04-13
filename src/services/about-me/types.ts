export interface HobbyLink {
  url: string,
  description: string,
  openInNewTab: boolean,
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

export interface EducationData {
  schoolName: string,
  schoolLogo: string,
  degree: string,
  completionDate: string,
  accolades?: string,
  description: string,
}

export interface Achievement {
  name: string,
  description?: string,
}
