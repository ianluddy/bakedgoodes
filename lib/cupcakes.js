const options = {
  6: {
    label: 'Box of 6 - €14',
    shortLabel: 'Box of 6',
    value: 6,
    price: 14,
  },
  12: {
    label: 'Box of 12 - €26',
    shortLabel: 'Box of 12',
    value: 12,
    price: 26,
  },
  18: {
    label: 'Box of 18 - €42',
    shortLabel: 'Box of 18',
    value: 18,
    price: 42,
  },
};

export const data = [
  {
    id: 'vanilla',
    meta: {
      title: 'Vanilla',
      caption: '€14.00 - €36.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cupcakes/1.jpg',
      path: '/cupcakes/vanilla',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'chocolate',
    meta: {
      title: 'Chocolate',
      caption: '€14.00 - €36.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cupcakes/2.jpg',
      path: '/cupcakes/chocolate',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'lemon',
    meta: {
      title: 'Lemon',
      caption: '€14.00 - €36.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cupcakes/3.jpg',
      path: '/cupcakes/lemon',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'gingerbread',
    meta: {
      title: 'Gingerbread',
      caption: '€14.00 - €36.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cupcakes/4.jpg',
      path: '/cupcakes/gingerbread',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'red-velvet',
    meta: {
      title: 'Red Velvet',
      caption: '€14.00 - €36.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cupcakes/5.jpg',
      path: '/cupcakes/red-velvet',
      link: 'https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link',
    },
    options,
  },
  {
    id: 'chocolate-fudge',
    meta: {
      title: 'Chocolate Fudge',
      caption: '€14.00 - €36.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.',
      src: '/images/cupcakes/6.jpg',
      path: '/cupcakes/chocolate-fudge',
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
