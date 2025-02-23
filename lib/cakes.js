const options = {
  4: {
    label: '4 inch, 4 layers (feeds 4) - € 30',
    shortLabel: '4 inch / 4 layers',
    value: 4,
    price: 30,
  },
  6: {
    label: '6 inch, 4 layers (feeds 6) - € 42',
    shortLabel: '6 inch / 4 layers',
    value: 6,
    price: 42,
  },
  7: {
    label: '7 inch, 4 layers (feeds 8) - € 55',
    shortLabel: '7 inch / 4 layers',
    value: 7,
    price: 55,
  },
};

export const data = [
  {
    id: 'tiramisu',
    meta: {
      title: 'Tiramisu',
      caption: '€30.00 - €55.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cakes/1.png',
      path: '/cakes/semi-naked',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'coffee',
    meta: {
      title: 'Coffee',
      caption: '€30.00 - €55.00',
      desc: 'Vanilla and strawberry cake with meringue kisses, white chocolate drip and fresh strawberries.',
      src: '/images/cakes/2.png',
      path: '/cakes/vanilla-strawberry',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'raspberry',
    meta: {
      title: 'Raspberry',
      caption: '€30.00 - €55.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cakes/3.png',
      path: '/cakes/raspberry-white-chocolate',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'flowers',
    meta: {
      title: 'Flowers',
      caption: '€30.00 - €55.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cakes/4.png',
      path: '/cakes/baby-shower',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'victoria-sponge',
    meta: {
      title: 'Victoria Sponge',
      caption: '€30.00 - €55.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cakes/6.png',
      path: '/cakes/victoria-sponge',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'double-chocolate',
    meta: {
      title: 'Double Chocolate',
      caption: '€30.00 - €55.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cakes/5.png',
      path: '/cakes/bon-voyage',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'chocolate',
    meta: {
      title: 'Chocolate',
      caption: '€30.00 - €55.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cakes/7.png',
      path: '/cakes/bees',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
];

export function getPostData(id) {
  return {
    id,
    ...data.filter((item) => item.id == id)[0],
  };
}

export function getAllPostIds() {
  return data.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });
}
