import { WorkData } from '../index';

const data: WorkData = {
  companyName: 'Credit Suisse',
  companyLogo: '/images/logos/credit_suisse_logo.png',
  jobTitles: [
    {
      title: 'Software Engineer III',
      tenure: 'January 2015 - October 2017',
    },
    {
      title: 'Software Engineer II',
      tenure: 'May 2013 - January 2015',
    },
  ],
  summary: 'Developed and maintained Java web services and C# desktop applications for persisting OTC derivative ' +
    'trades to multiple data stores, and conditionally triggering downstream events',
  projects: [
    {
      title: 'Regression Testing Tools for Legacy Systems',
      summary: 'Led team in the creation of automated regression and integration testing tools that significantly ' +
        'reduced the need for QA testing on multiple legacy applications. This saved days of testing time each release.',
      skillsUsed: [ 'Java', 'Teamcity', ],
    },
    {
      title: 'Derivatives Persistence Service Decoupling',
      summary: 'Our persistence service was heavily coupled to external services, which made automated testing ' +
        'difficult. Refactoring to introduce dependency injection allowed testing of code changes on the local ' +
        'workstation, saving hours per change. This also enabled greater unit test coverage by enabling the mocking ' +
        'of external services.',
      skillsUsed: [ 'Java', ],
    },
    {
      title: 'Commodities Migration',
      summary: 'Project to add support for commodities trades into an existing trade store, with the goal of ' +
        'decommissioning third party product Endur. This saved the firm over $2 million a year by enabling the ' +
        'continued trading of profitable products while retiring the others. My work included new database schema, ' +
        'surveillance reports, regulatory reporting flows, and persistence service enhancements.',
      skillsUsed: [ 'Oracle DB', 'Sybase', 'Java', 'Drools', ],
    },
    {
      title: 'Equities Continuous Improvement',
      summary: 'I work directly with Equities traders and middle office to determine pain points and develop ' +
        'corresponding solutions. Examples include extending existing APIs with new functionality, developing ' +
        'automated processes to reduce manual intervention, and simplifying flows to allow retirement of legacy ' +
        'services and processes. This is my day to day work alongside the larger projects.',
      skillsUsed: [ 'Java', 'Drools', 'Oracle DB', 'Sybase', ],
    },
    {
      title: 'Implementation of Switch Ticketing Flow for Listed Trades ',
      summary: 'I added a new API to allow listed trades to be switch ticketed automatically, which reduced reduce ' +
        'manual intervention of these trades by seventy-fiver percent. I introduced Spring into the persistence ' +
        'service layer for this project as the first step in a larger initiative to convert the entire service from EJB.',
      skillsUsed: [ 'Java', 'Spring Framework', ],
    },
    {
      title: 'Exception Management for Asynchronous Enrichment Service',
      summary: 'The existing exception flow was hard coded for the requirements of the Credit desk. I refactored ' +
        'the main flow to make use of the adaptor pattern, which allowed me to easily incorporate the conflicting ' +
        'requirements from the Equities desk. I also applied the dependency injection pattern which enabled mocking ' +
        'of external services and more complete unit and flow test coverage of the application.',
      skillsUsed: [ 'Java', ],
    },
  ],
};

export default data;
