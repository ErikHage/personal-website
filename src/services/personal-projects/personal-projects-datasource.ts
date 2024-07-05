import { Project } from './types';

import javaRulesEngine from './data/java-rules-engine';
import javaUtility from './data/java-utility';
import personalWebsite from './data/personal-website';
import recipeApp from './data/recipe-app';
import ticTacToeApp from './data/tic-tac-toe-app';
import feralAuthentication from './data/feral-authentication';

function getPersonalProjects(): Project[] {
  return [
    javaRulesEngine,
    javaUtility,
    personalWebsite,
    recipeApp,
    ticTacToeApp,
    feralAuthentication,
  ];
}

export default {
  getPersonalProjects,
};
