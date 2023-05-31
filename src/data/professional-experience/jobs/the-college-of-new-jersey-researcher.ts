import { WorkData } from '../index';

const data: WorkData = {
  companyName: 'The College of New Jersey',
  companyLogo: '/images/logos/tcnj_logo.jpg',
  jobTitles: [
    {
      title: 'Biomedical Engineering Research Assistant',
      tenure: 'June 2007 - May 2009',
    },
  ],
  summary: 'Worked under Dr. Brett BuSha performing research into heart rate and breathing rate patterns in human ' +
    'test subjects. Required writing proposals to regulatory bodies, collecting data from fellow student volunteers, ' +
    'analyzing recorded data, and reporting on the results.',
  projects: [
    {
      title: 'Institutional Review Board Proposal',
      summary: 'Submitted and got approval for recording data from test subjects for heart and breathing rate research.',
      skillsUsed: [ 'Medical Devices', ],
    },
    {
      title: 'Data Collection',
      summary: 'Record heart and breathing signals from test subjects under differing conditions. Data was record ' +
        'while at rest, performing exercise, and breathing through either the mouth or the nose exclusively.',
      skillsUsed: [ 'Electronics', 'Medical Devices', ],
    },
    {
      title: 'Data Analysis and Publication',
      summary: 'Analyze the collected data using detrended fluctuation analysis to remove any non-stationary ' +
        'underlying statistics (mean, variance, etc.). Lab group published two papers, the first compared variability ' +
        'in human breathing between gender and breathing route, while the second compared it between gender and level ' +
        'of physical activity.',
      skillsUsed: [ 'MATLAB', 'Electronics', 'Medical Devices', ],
    },
  ],
};

export default data;
