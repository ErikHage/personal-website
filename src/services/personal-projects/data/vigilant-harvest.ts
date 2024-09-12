import { Project } from '../types';

const data: Project = {
  projectName: 'Vigilant Harvest',
  summary: 'An app to track your garden plantings and harvests year by year.',
  skillsUsed: [ 'Javascript', 'VueJS', 'HTML', 'CSS', 'Docker', 'Nginx', ],
  iconLinks: [
    {
      link: 'https://github.com/ErikHage/vigilant-harvest-app',
      buttonClasses: '', // 'btn btn-sm btn-secondary',
      fontAwesomeClasses: 'fa-brands fa-github fa-lg',
      tooltip: 'See Code',
    },
  ],
  images: [],
};

export default data;
