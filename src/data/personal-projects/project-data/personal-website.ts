import { Project } from '../index';

const data: Project = {
  projectName: 'Personal (This) Website',
  summary: 'My personal website, written with NodeJS and Typescript, using EJS templates to generate pages.',
  skillsUsed: [ 'Typescript', 'NodeJS', 'JQuery', 'Bootstrap', 'Docker', 'Nginx', ],
  iconLinks: [
    {
      link: 'https://github.com/ErikHage/personal-website',
      buttonClasses: '', // 'btn btn-sm btn-secondary',
      fontAwesomeClasses: 'fa-brands fa-github fa-lg',
      tooltip: 'See Code',
    },
  ],
  images: [],
};

export default data;
