import { Project } from '../index';

const data: Project = {
  projectName: 'Recipe Viewer Web App',
  summary: 'A web app built using react and redux to display recipes. Recipes are stored as json files in a github repository, and cached by a backend service with apis for use by the frontend.',
  skillsUsed: [ 'React', 'Redux', 'NodeJS', 'Docker', 'Nginx', ],
  iconLinks: [
    {
      link: 'http://theferalrooster.com/recipes/',
      buttonClasses: '', // 'btn btn-sm btn-primary',
      fontAwesomeClasses: 'fa-solid fa-arrow-up-right-from-square fa-lg',
      tooltip: 'Open App',
    },
    {
      link: 'https://github.com/ErikHage/recipe-ui',
      buttonClasses: '', // 'btn btn-sm btn-secondary',
      fontAwesomeClasses: 'fa-brands fa-github fa-lg',
      tooltip: 'See Code',
    },
  ],
  images: [
    {
      imagePath: '/images/project-screenshots/recipe-app/index.png',
      caption: 'Screenshot',
    },
  ],
};

export default data;
