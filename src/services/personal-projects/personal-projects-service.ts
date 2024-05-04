import { Project } from './types';
import personalProjectsDatasource from './personal-projects-datasource';

function getPersonalProjects(): Project[] {
  return personalProjectsDatasource.getPersonalProjects();
}

function getRandomProject(): Project {
  const projects: Project[] = getPersonalProjects();
  const index = Math.floor(Math.random() * projects.length);

  if (projects[index]) {
    return projects[index]!;
  } else {
    return projects[0]!;
  }
}

export default {
  getPersonalProjects,
  getRandomProject,
};
