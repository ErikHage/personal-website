import { Hobby } from '../../../types';

const data: Hobby = {
  name: 'Gardening',
  description: 'I\'m a big fan of self-sufficiency, and growing my own fruits and veggies ' +
    'gives me a feeling of accomplishment. I had a large garden when I was younger, but had ' +
    'to give that up while living in apartments. Now that I own my own home, I\'ve built ' +
    'a new garden, and planning to expand it for next year.',
  links: [],
  images: [
    {
      imagePath: '/images/hobbies/gardening/old-garden.jpg',
      caption: 'Old Garden at Parents\' House',
    },
    {
      imagePath: '/images/hobbies/gardening/new-garden-beds.jpg',
      caption: 'New House Garden Beds Year 1',
    },
    {
      imagePath: '/images/hobbies/gardening/planting.jpg',
      caption: 'First Day of Planting',
    },
  ],
};

export default data;
