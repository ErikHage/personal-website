import { NavOptions } from '../handlers/types';

const urls = {
  GITHUB: 'https://github.com/ErikHage',
  LINKED_IN: 'https://www.linkedin.com/in/erik-hage-9553a642/',
  VORACIOUS_APPETITE: 'https://theferalrooster.com/recipes',
  TIC_TAC_TOE_APP: 'https://theferalrooster.com/apps/tic-tac-toe',
};

const defaultNavOptions: NavOptions = {
  aboutMeClasses: '',
  professionalExperienceClasses: '',
  personalProjectsClasses: '',
  rwabClasses: '',
};

export default {
  urls,
  defaultNavOptions,
}
