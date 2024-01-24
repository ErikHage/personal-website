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
      caption: 'First Version',
    },
    {
      imagePath: '/images/project-screenshots/tic-tac-toe-app/game-history.png',
      caption: 'Second Version',
    },
    {
      imagePath: '/images/project-screenshots/tic-tac-toe-app/mobile-view.png',
      caption: 'Mobile View',
    },
    {
      imagePath: '/images/project-screenshots/tic-tac-toe-app/game-history.jpg',
      caption: 'Game History',
    },
  ],
};

export default data;
