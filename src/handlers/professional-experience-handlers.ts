import { Request, Response } from 'express';
import constants from '../helpers/constants';
import professionalExperience from '../data/professional-experience';
import skillColorMap from '../helpers/skill-color-map';

function getProfessionalExperience(request: Request, response: Response) {
  response.render('professional-experience', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      professionalExperienceClasses: 'active',
    },
    professionalExperience,
    skillColorMap,
  });
}

export default {
  getProfessionalExperienceView: getProfessionalExperience,
};
