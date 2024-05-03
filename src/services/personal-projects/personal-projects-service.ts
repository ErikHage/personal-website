import { Project } from './types';
import personalProjectsDatasource from './personal-projects-datasource';

function getPersonalProjects(): Project[] {
  return personalProjectsDatasource.getPersonalProjects();
}

export default {
  getPersonalProjects,
};
