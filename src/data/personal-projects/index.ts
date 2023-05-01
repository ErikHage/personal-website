import recipeApp from './project-data/recipe-app';

interface PersonalProjects {
  projects: Project[],
}

export interface Project {
  projectName: string,
  summary: string,
  skillsUsed: string[],
  link?: string,
  githubLink?: string,
  images: string[],
}

const data: PersonalProjects = {
  projects: [
    recipeApp,
  ],
};

export default data;
