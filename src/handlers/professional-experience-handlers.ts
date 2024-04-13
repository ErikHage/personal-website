import { Request, Response } from 'express';
import constants from '../helpers/constants';
import professionalExperienceService from '../services/professional-experience/professional-experience-service';
import skillColorMap from '../helpers/skill-color-map';

function getProfessionalExperience(request: Request, response: Response) {
  response.render('professional-experience', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      professionalExperienceClasses: 'active',
    },
    jobData: professionalExperienceService.getJobData(),
    consultingData: professionalExperienceService.getConsultingData(),
    skillColorMap,
  });
}

export default {
  getProfessionalExperienceView: getProfessionalExperience,
};
