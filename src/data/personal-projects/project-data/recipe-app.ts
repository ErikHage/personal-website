import { Project } from '../index';

const data: Project = {
  projectName: 'Recipe Viewer Web App',
  summary: 'A web app built using react and redux to display recipes. Recipes are stored as json files in a github repository, and cached by a backend service with apis for use by the frontend.',
  skillsUsed: [ 'React', 'Redux', 'NodeJS', 'Docker', 'Nginx', ],
  link: 'http://theferalrooster.com/recipes/',
  githubLink: 'https://github.com/ErikHage/recipe-ui',
  images: [
    '/images/project-screenshots/recipe-app/index.png',
  ],
};

export default data;
