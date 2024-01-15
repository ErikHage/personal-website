import recipeApp from './project-data/recipe-app';
import ticTacToeApp from './project-data/tic-tac-toe-app';
import personalWebsite from './project-data/personal-website';
import javaUtility from './project-data/java-utility';
import javaRulesEngine from './project-data/java-rules-engine';

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
    ticTacToeApp,
    personalWebsite,
    javaUtility,
    javaRulesEngine,
  ],
};

export default data;
