import recipeApp from './project-data/recipe-app';

interface PersonalProjects {
  projects: Project[],
}

export interface Project {
  projectName: string,
  summary: string,
  skillsUsed: string[],
  iconLinks: IconLink[],
  images: ImageWithCaption[],
}

export interface ImageWithCaption {
  imagePath: string,
  caption: string,
}

export interface IconLink {
  link: string,
  buttonClasses: string,
  fontAwesomeClasses: string,
  tooltip?: string,
}

const data: PersonalProjects = {
  projects: [
    recipeApp,
  ],
};

export default data;
