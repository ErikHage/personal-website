interface ImageWithCaption {
  imagePath: string,
  caption: string,
}

interface RWBData {
  images: ImageWithCaption[],
}

const data: RWBData = {
  images: [
    {
      imagePath: '/images/red-white-and-brew/kettles.jpg',
      caption: 'Me and our first brew kettle',
    },
    {
      imagePath: '/images/red-white-and-brew/taproom.jpg',
      caption: 'The bar in the taproom',
    },
    {
      imagePath: '/images/red-white-and-brew/beer_garden.jpg',
      caption: 'Our beer garden added during COVID',
    },
    {
      imagePath: '/images/red-white-and-brew/festival.jpg',
      caption: 'Chris and I attending a beer festival',
    },
  ],
};

export default data;
