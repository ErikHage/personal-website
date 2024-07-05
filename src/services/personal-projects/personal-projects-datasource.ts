import { Project } from './types';

import javaRulesEngine from './data/java-rules-engine';
import javaUtility from './data/java-utility';
import personalWebsite from './data/personal-website';
import ticTacToeApp from './data/tic-tac-toe-app';
import feralAuthentication from './data/feral-authentication';
import voraciousAppetite from './data/voracious-appetite';

function getPersonalProjects(): Project[] {
  return [
    javaRulesEngine,
    javaUtility,
    personalWebsite,
    voraciousAppetite,
    ticTacToeApp,
    feralAuthentication,
  ];
}

export default {
  getPersonalProjects,
};
