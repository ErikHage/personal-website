import { Project } from './types';
import javaRulesEngine from './data/java-rules-engine';
import javaUtility from './data/java-utility';
import personalWebsite from './data/personal-website';
import recipeApp from './data/recipe-app';
import ticTacToeApp from './data/tic-tac-toe-app';

function getPersonalProjects(): Project[] {
  return [
    javaRulesEngine,
    javaUtility,
    personalWebsite,
    recipeApp,
    ticTacToeApp,
  ];
}

export default {
  getPersonalProjects,
};
