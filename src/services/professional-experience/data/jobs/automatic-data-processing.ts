import { WorkData } from '../../types';

const data: WorkData = {
  companyName: 'Automatic Data Processing / Lifion',
  companyLogo: '/images/logos/lifion_logo.png',
  jobTitles: [
    {
      title: 'Senior Software Engineer',
      tenure: 'September 2019 - May 2022',
    },
    {
      title: 'Software Engineer',
      tenure: 'October 2017 - September 2019',
    },
  ],
  summary: 'As a member of the Lifion Identity Management team, I was responsible for security of user accounts, ' +
    'authentication, federation, and session resolution for a large metadata driven human resources platform.',
  projects: [
    {
      title: 'Impersonation',
      summary: 'Implemented impersonation functionality, allowing support team members to act as specific users, ' +
        'which led to a large reduction in issue resolution time and faster bug fix turnaround.',
      skillsUsed: [ 'NodeJS', 'MySQL', 'DynamoDB', ],
    },
    {
      title: 'Multi-Factor Authentication',
      summary: 'Developed email, SMS, and voice call mechanisms to step up users to a higher level of assurance. ' +
        'Implemented access control based on level of assurance, providing higher security for sensitive data.',
      skillsUsed: [ 'NodeJS', 'MySQL', 'DynamoDB', 'AWS', ],
    },
    {
      title: 'Policy/Rules Engine',
      summary: 'Designed and implemented a rules engine that applied policies based on client configuration, allowing ' +
        'clients to differentiate authentication methods across user groups.',
      skillsUsed: [ 'NodeJS', 'MySQL', ],
    },
    {
      title: 'GDPR',
      summary: 'Allow European Union users to request that their data be removed from the system and provide support ' +
        'functionality to perform those actions.',
      skillsUsed: [ 'NodeJS', 'MySQL', 'DynamoDB', ],
    },
    {
      title: 'Refresh Tokens',
      summary: 'Implemented the ability for long running processes to request refresh tokens that would allow a ' +
        'session refresh if the process ran longer than session expiration.',
      skillsUsed: [ 'NodeJS', 'MySQL', 'DynamoDB', ],
    },
    {
      title: 'Search Framework with Pagination',
      summary: 'Developed a search framework that could be configured by database model to paginate records based on ' +
        'specific fields and ordering.',
      skillsUsed: [ 'NodeJS', 'MySQL', ],
    },
    {
      title: 'Obligations Framework',
      summary: 'Designed and implemented functionality to lock users out of the system until specific conditions were ' +
        'met. Only pages and apis required to meet the obligation were available to the user.',
      skillsUsed: [ 'NodeJS', 'MySQL', 'DynamoDB', ],
    },
    {
      title: 'Feature Toggles',
      summary: 'Designed and implemented a feature toggle system and an admin console to manage configuration, which ' +
        'enabled incremental rollouts and was adopted by multiple teams across the organization, allowing immediate ' +
        'rollbacks of problematic features.',
      skillsUsed: [ 'NodeJS', 'DynamoDB', ],
    },
    {
      title: 'SAML as a Service Provider',
      summary: 'Developed a Java service, using Spring Boot, to handle SAML responses, allowing our platform to ' +
        'integrate with legacy and external systems and enabling the sales team to target additional clients.',
      skillsUsed: [ 'Java', 'Spring Boot', 'NodeJS', 'MySQL', 'DynamoDB', ],
    },
    {
      title: 'SAML as an Identity Provider',
      summary: 'Expanded on the SAML Java service to handle SAML requests, allowing our platform to become an ' +
        'identity provider for other applications across the company and external clients.',
      skillsUsed: [ 'Java', 'Spring Boot', 'NodeJS', 'MySQL', 'DynamoDB', ],
    },
  ],
};

export default data;
