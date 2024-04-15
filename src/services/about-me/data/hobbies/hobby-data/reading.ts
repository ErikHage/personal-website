import { Hobby } from '../../../types';

const data: Hobby = {
  name: 'Reading',
  description:
    'I\'ve been a avid reader since I was young. I started out with my father\'s Star Wars extended universe books ' +
    '(now no longer canon, thanks Disney). My favorite genres are science fiction and fantasy. These days I use ' +
    'audiobooks most of the time, so I can listen while driving/commuting.',
  links: [
    {
      url: '/reading/log',
      description: 'My reading log',
      openInNewTab: false,
    },
    {
      url: '/reading/series',
      description: 'My series log',
      openInNewTab: false,
    },
    {
      url: '/reading/stats',
      description: 'My reading stats',
      openInNewTab: false,
    },
  ],
  images: [],
};

export default data;
