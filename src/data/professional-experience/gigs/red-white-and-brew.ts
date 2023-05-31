import { WorkData } from '../index';

const data: WorkData = {
  companyName: 'Red White & Brew Beer Company',
  companyLogo: '/images/logos/rwab_logo.jpeg',
  jobTitles: [
    {
      title: 'Software Engineer',
      tenure: 'July 2016 - Present',
    },
  ],
  summary: 'Design, develop, host, and maintain the company\'s website as well as software to track production, ' +
    'streamline sales, notify users of regulatory requirements, and generate regulatory and tax reports.',
  projects: [
    {
      title: 'Company Website',
      summary: 'A website for a new brewing company, written in NodeJS on the Express framework, using Bootstrap 3, ' +
        'deployed as a Docker image, with MySQL persistence. The application is hosted on a cloud server and content ' +
        'is accessed through a reverse proxy.',
      skillsUsed: [ 'HTML5', 'CSS3', 'Bootstrap', 'JQuery', 'NodeJS', 'Express', 'MySQL', 'Nginx', 'Docker',
        'Digital Ocean', ],
    },
    {
      title: 'Authentication and Authorization',
      summary: 'Developed highly secure authentication and authorization systems to control access to different tools.',
      skillsUsed: [ 'HTML5', 'NodeJS', 'JQuery', ],
    },
    {
      title: 'Digital Taplist',
      summary: 'Digitized tap list as a web page, and built an admin tool to allow authorized bar staff to control ' +
        'it in real time.',
      skillsUsed: [ 'HTML5', 'NodeJS', 'MySQL', ],
    },
    {
      title: 'Production Tracking Tooling',
      summary: 'Implemented keg tracking and beer inventory tools to assist in sales, production, and regulatory ' +
        'reporting.',
      skillsUsed: [ 'HTML5', 'NodeJS', 'MySQL', 'JQuery', ],
    },
    {
      title: 'Event Management Tooling',
      summary: 'Created event management tool to allow event coordinator to track customer event requests and ' +
        'schedule private parties, space rentals, and public events',
      skillsUsed: [ 'HTML5', 'NodeJS', 'MySQL', 'JQuery', ],
    },
  ],
};

export default data;
