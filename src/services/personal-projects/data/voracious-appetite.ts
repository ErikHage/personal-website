import { Project } from '../types';

const data: Project = {
  projectName: 'Voracious Appetite',
  summary: 'A web app built using Vue to display recipes. Recipes are stored as json files in a github ' +
    'repository, and cached by a backend service.',
  skillsUsed: [ 'Vue', 'Vuetify', 'Pinia', 'HTML', 'CSS', 'NodeJS', 'Docker', 'Nginx', ],
  iconLinks: [
    {
      link: 'http://theferalrooster.com/apps/voracious-appetite',
      buttonClasses: '', // 'btn btn-sm btn-primary',
      fontAwesomeClasses: 'fa-solid fa-arrow-up-right-from-square fa-lg',
      tooltip: 'Open App',
    },
    {
      link: 'https://github.com/ErikHage/voracious-appetite-app',
      buttonClasses: '', // 'btn btn-sm btn-secondary',
      fontAwesomeClasses: 'fa-brands fa-github fa-lg',
      tooltip: 'See Code',
    },
  ],
  images: [],
};

export default data;
