const variants = [
  {
    title: "4 inch, 4 layers (feeds 4) - € 30",
    shortTitle: "4 inch / 4 layers",
    price: 30
  },
  {
    title: "6 inch, 4 layers (feeds 6) - € 42",
    shortTitle: "6 inch / 4 layers",
    price: 42
  },
  {
    title: "7 inch, 4 layers (feeds 8) - € 55",
    shortTitle: "7 inch / 4 layers",
    price: 55
  },
];

export const data = [
  {
    id: "semi-naked",
    meta: {
      title: "Semi-naked cake",
      caption: "€30.00 - €55.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/1.png",
      path: "/cakes/semi-naked",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants
  },
  {
    id: "vanilla-strawberry",
    meta: {
      title: "Vanilla & Strawberry",
      caption: "€30.00 - €55.00",
      desc: "Vanilla and strawberry cake with meringue kisses, white chocolate drip and fresh strawberries.",
      src: "/images/cakes/2.png",
      path: "/cakes/vanilla-strawberry",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "raspberry-white-chocolate",
    meta: {
      title: "Raspberry & White Chocolate",
      caption: "€30.00 - €55.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/3.png",
      path: "/cakes/raspberry-white-chocolate",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "baby-shower",
    meta: {
      title: "Baby Shower",
      caption: "€30.00 - €55.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/4.png",
      path: "/cakes/baby-shower",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "victoria-sponge",
    meta: {
      title: "Victoria Sponge",
      caption: "€30.00 - €55.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/9.png",
      path: "/cakes/victoria-sponge",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "bon-voyage",
    meta: {
      title: "Bon Voyage",
      caption: "€30.00 - €55.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/6.png",
      path: "/cakes/bon-voyage",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "bees",
    meta: {
      title: "Bees",
      caption: "€30.00 - €55.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/7.png",
      path: "/cakes/bees",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "double-chocolate",
    meta: {
      title: "Double Chocolate",
      caption: "€30.00 - €55.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/8.png",
      path: "/cakes/double-chocolate",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
];

export function getPostData(id) {
  return {
    id,
    ...data.filter(item => item.id == id)[0]
  }
}

export function getAllPostIds() {
  return data.map(item => {
    return {
      params: {
        id: item.id
      }
    }
  })
}