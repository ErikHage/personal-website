import { Project } from '../types';

const data: Project = {
  projectName: 'Recipe Viewer UI',
  summary: 'A web app built using react and redux to display recipes. Recipes are stored as json files in a github ' +
    'repository, and cached by a backend service with apis for use by the frontend.',
  skillsUsed: [ 'React', 'Redux', 'HTML', 'CSS', 'NodeJS', 'Docker', 'Nginx', ],
  iconLinks: [
    {
      link: 'https://github.com/ErikHage/recipe-ui',
      buttonClasses: '', // 'btn btn-sm btn-secondary',
      fontAwesomeClasses: 'fa-brands fa-github fa-lg',
      tooltip: 'See Code',
    },
  ],
  images: [
    {
      imagePath: '/images/project-screenshots/recipe-ui/index.png',
      caption: 'Screenshot',
    },
  ],
};

export default data;
