import { WorkData } from '../index';

const data: WorkData = {
  companyName: 'The College of New Jersey',
  companyLogo: '/images/logos/tcnj_logo.jpg',
  jobTitles: [
    {
      title: 'Adjunct Professor of Mechanical Engineering',
      tenure: 'August 2011 - December 2012',
    },
  ],
  summary: 'Writing lesson plans, preparing presentations, designing examinations and projects, lecturing, and evaluating student work. ' +
    'Taught freshman level design lab (ENG142) and sophomore level statics (ENG222).',
  projects: [
    {
      title: 'Freshman Intro Lab - Pulse Detector Circuit',
      summary: 'Designed a biomedical/electrical engineering lab project for freshmen students. ' +
        'The students were provided a circuit diagram with missing values and the equations needed to solve for those values. ' +
        'In groups, the students would need to apply those equations to figure out resistances required in their amplifier circuit. ' +
        'They would then need to fabricate it and test it using a signal generator. The goal was to have an LED blink along with the signal peaks',
      skillsUsed: [ 'Circuits', 'Medical Devices', ],
    },
    {
      title: 'Statics Coding Projects',
      summary: 'Put together two coding projects as part of the ENG-222: Statics course work. ' +
        'Students were allowed to use MATLAB or C++ to accomplish these. ' +
        'The first project was to write a program that could find the resultant of three (or more) forces. ' +
        'The second was to write a program that could find the equivalent force-couple system at any point for a given system of forces and/or moments applied to a structure or machine part.',
      skillsUsed: [ 'MATLAB', 'C++', 'Statics', ],
    },
  ],
};

export default data;
