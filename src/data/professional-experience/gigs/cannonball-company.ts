import { WorkData } from '../index';

const data: WorkData = {
  companyName: 'Cannonball Company',
  companyLogo: '/images/logos/cannonball_company_logo.jpg',
  jobTitles: [
    {
      title: 'Software Engineer',
      tenure: 'December 2014 - May 2015',
    },
  ],
  summary: 'Developed a desktop application for a hunting outfitter in North Dakota.',
  projects: [
    {
      title: 'Habitat Tracker',
      summary: 'App tracks bird harvests by location, date, and group size, and allows flexible querying of stored data to generate real-time reports for earnings distribution to land owners.',
      skillsUsed: [ 'C#', 'SQLite', ],
    },
  ],
};

export default data;
