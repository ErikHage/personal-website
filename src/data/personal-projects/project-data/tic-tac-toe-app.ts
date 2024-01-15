import { Project } from '../index';

const data: Project = {
  projectName: 'Tic Tac Toe',
  summary: 'A web app built using VueJS to play tic-tac-toe.',
  skillsUsed: [ 'VueJS', 'Javascript', 'HTML', 'CSS', 'Docker', 'Nginx', ],
  iconLinks: [
    {
      link: 'https://theferalrooster.com/apps/tic-tac-toe',
      buttonClasses: '', // 'btn btn-sm btn-primary',
      fontAwesomeClasses: 'fa-solid fa-arrow-up-right-from-square fa-lg',
      tooltip: 'Open App',
    },
    {
      link: 'https://github.com/ErikHage/tic-tac-toe',
      buttonClasses: '', // 'btn btn-sm btn-secondary',
      fontAwesomeClasses: 'fa-brands fa-github fa-lg',
      tooltip: 'See Code',
    },
  ],
  images: [
    {
      imagePath: '/images/project-screenshots/tic-tac-toe-app/tic-tac-toe-board.jpg',
      caption: 'Screenshot',
    },
  ],
};

export default data;
