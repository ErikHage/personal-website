import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import SkillsPage from './components/skills/SkillsPage';
import ContactPage from './components/contact/ContactPage';
import ProjectsPage from './components/projects/ProjectsPage';
import HobbiesPage from './components/hobbies/HobbiesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="skills" component={SkillsPage} />
    <Route path="contact" component={ContactPage} />
    <Route path="projects" component={ProjectsPage} />
    <Route path="hobbies" component={HobbiesPage} />
  </Route>
);
