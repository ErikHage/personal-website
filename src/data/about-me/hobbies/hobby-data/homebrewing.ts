import { Hobby } from '../types';

const data: Hobby = {
  name: 'Home Brewing',
  description: 'I got into brewing my own beer after I graduated from grad school and had a bunch of extra time on my hands. ' +
    'This hobby eventually led to me joining up with my business partners and opening the Red White & Brew Beer Company!',
  links: [],
  images: [
    {
      imagePath: '/images/hobbies/home-brewing/brewing.jpg',
      caption: 'Brewing the beer',
    },
    {
      imagePath: '/images/hobbies/home-brewing/fermenting.jpg',
      caption: 'Fermenting a hard cider',
    },
    {
      imagePath: '/images/hobbies/home-brewing/transfer.jpg',
      caption: 'Transferring IPA onto hops to dry-hop',
    },
    {
      imagePath: '/images/hobbies/home-brewing/bottles.jpg',
      caption: 'Freshly bottled beer, ready to condition',
    },
    {
      imagePath: '/images/hobbies/home-brewing/holding_beer.jpg',
      caption: 'Drinking the finished product, a red ale',
    },
  ],
};

export default data;
