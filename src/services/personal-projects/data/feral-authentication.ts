import { Project } from '../types';

const data: Project = {
  projectName: 'Feral Authentication',
  summary: 'The frontend for a service handling authentication and authorization. Allows users to login and ' +
    'create sessions for other applications they have access to.',
  skillsUsed: [ 'Javascript', 'VueJS', 'HTML', 'CSS', 'Docker', 'Nginx', ],
  iconLinks: [
    {
      link: 'https://github.com/ErikHage/feral-authentication',
      buttonClasses: '', // 'btn btn-sm btn-secondary',
      fontAwesomeClasses: 'fa-brands fa-github fa-lg',
      tooltip: 'See Code',
    },
  ],
  images: [],
};

export default data;
