import homebrewing from './hobby-data/homebrewing';
import videoGames from './hobby-data/video-games';
import cooking from './hobby-data/cooking';
import woodWorking from './hobby-data/wood-working';
// import gardening from './hobby-data/gardening';
import chickens from './hobby-data/chickens';

interface HobbyLink {
  url: string,
  description: string,
}

interface HobbyImage {
  imagePath: string,
  caption: string,
}

export interface Hobby {
  name: string,
  description: string,
  links: HobbyLink[],
  images: HobbyImage[],
}

const data: Hobby[] = [
  homebrewing,
  videoGames,
  cooking,
  woodWorking,
  // gardening,
  chickens,
];

export default data;
