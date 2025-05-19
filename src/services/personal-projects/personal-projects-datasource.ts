import { Project } from './types';

import javaRulesEngine from './data/java-rules-engine';
import javaUtility from './data/java-utility';
import personalWebsite from './data/personal-website';
import ticTacToeApp from './data/tic-tac-toe-app';
import feralAuthentication from './data/feral-authentication';
import recipeUi from './data/recipe-ui';
import vigilantHarvest from './data/vigilant-harvest';
import voraciousAppetite from './data/voracious-appetite';

function getPersonalProjects(): Project[] {
  return [
    javaRulesEngine,
    javaUtility,
    personalWebsite,
    recipeUi,
    ticTacToeApp,
    feralAuthentication,
    vigilantHarvest,
    voraciousAppetite,
  ];
}

export default {
  getPersonalProjects,
};
