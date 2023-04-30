import { WorkData } from '../index';

const data: WorkData = {
  companyName: 'Automated Mining Operations Software',
  jobTitles: [
    {
      title: 'Founding Engineer',
      tenure: 'May 2022 - April 2023',
    },
  ],
  summary: 'Startup focused on developing applications to help mining companies meet their MSHA regulatory requirements. First releases were focused on workplace safety and equipment training.',
  projects: [
    {
      title: 'AMOS Mobile Solution',
      summary: 'Designed and bootstrapped a new mobile application for mines and quarries, focusing on critical regulatory functions such as tracking operator training and daily equipment inspections.',
      skillsUsed: [ 'Golang', 'Dart', 'Flutter', 'Postgres', 'SQLite', ],
    },
    {
      title: 'CI/CD Pipeline in GCP',
      summary: 'Configured and maintained Gitlab CI/CD pipeline to build, version, test, deploy, and conditionally promote services through three environments.',
      skillsUsed: [ 'GCP', 'Docker', ],
    },
    {
      title: 'Supporting Frameworks',
      summary: 'Bootstrapped multiple supporting frameworks for the team, including database migrations on both the server-side and mobile app, error handling, logging, and the initial OAS documentation.',
      skillsUsed: [ 'Golang', 'Dart', 'Postgres', ],
    },
    {
      title: 'MSHA Statistics Dashboard',
      summary: 'Created backend for React web app that enables users to query MSHA’s weekly data and compare violations and other safety statistics across comparison sets configured by the user.',
      skillsUsed: [ 'Golang', 'GCP', 'Postgres', ],
    },
    {
      title: 'Mobile App Data Synchronisation',
      summary: 'Designed and implemented data synchronization between the mobile app and backend server via an offline queue to ensure seamless coordination between users working at the same site.',
      skillsUsed: [ 'Golang', 'Dart', 'SQLite', 'Postgres', ],
    },
    {
      title: 'Firebase Push Notifications',
      summary: 'Incorporated Firebase push notifications to alert users of dangerous conditions and upcoming regulatory deadlines and to trigger background processes in the mobile application.',
      skillsUsed: [ 'Golang', 'Dart', 'Firebase', 'Postgres', ],
    },
    {
      title: 'User Admin Console',
      summary: 'Developed backend of a console for clients’ safety officers to configure their user, training, and inspection data. Ability to generate PDF documents from existing inspection and training data.',
      skillsUsed: [ 'Golang', 'Postgres', ],
    },
  ],
};

export default data;
