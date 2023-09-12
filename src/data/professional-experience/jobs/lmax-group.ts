import { WorkData } from '../index';

const data: WorkData = {
  companyName: 'LMAX Group',
  companyLogo: '/images/logos/lmax_logo.jpg',
  jobTitles: [
    {
      title: 'Senior Software Developer',
      tenure: 'June 2023 - Present',
    },
  ],
  summary: 'A global financial technology company which operates multiple institutional execution venues for electronic ' +
    'foreign exchange (FX) and crypto currency trading.',
  projects: [
    {
      title: 'Continuous Linked Settlement (CLS) for Currency Instruments',
      summary: 'CLS is an industry initiative to eliminate the settlement risk in foreign exchange ' +
        'transactions. By settling trades immediately you reduce risk of to one of the parties ' +
        'defaulting. This project focused on allowing currency instruments to be marked as eligible ' +
        'for CLS if both settlement parties had such a relationship in place. In such cases those ' +
        'trades could be excluded from daily risk calculations, allowing for a trading member to ' +
        'complete a greater number of trades before hitting their risk limit.',
      skillsUsed: [ 'VueJS', 'Java', ],
    },
  ],
};

export default data;
