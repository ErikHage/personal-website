import { Hobby } from '../../../../services/about-me/types';

const data: Hobby = {
  name: 'Raising Chickens',
  description: 'Got my first four hens at 16 weeks old. Then the following year I ' +
    'got 10 baby chicks and raised them to adulthood. Once they were full grown I ' +
    'merged the flocks into one.',
  links: [],
  images: [
    {
      imagePath: '/images/hobbies/chickens/chickens_1.jpg',
      caption: 'The merged flock',
    },
    {
      imagePath: '/images/hobbies/chickens/chickens_2.jpg',
      caption: 'My original 4 hens',
    },
    {
      imagePath: '/images/hobbies/chickens/chicks_1.jpg',
      caption: '2 week old chicks!',
    },
    {
      imagePath: '/images/hobbies/chickens/chicks_2.jpg',
      caption: 'Chicks a few more weeks old',
    },
    {
      imagePath: '/images/hobbies/chickens/chicks_3.jpg',
      caption: 'Chicks first time outside!',
    },

  ],
};

export default data;
