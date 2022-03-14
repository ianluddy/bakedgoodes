const variants = [
  {
    title: "4 inch, 4 layers (feeds 4) - € 30",
    price: 30
  },
  {
    title: "6 inch, 4 layers (feeds 6) - € 42",
    price: 42
  },
  {
    title: "7 inch, 4 layers (feeds 8) - € 55",
    price: 55
  },
];

export const data = [
  {
    id: "semi-naked",
    meta: {
      title: "Semi-naked cake",
      caption: "Mmmmmmmm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/1.png",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants
  },
  {
    id: "vanilla-strawberry",
    meta: {
      title: "Vanilla & Strawberry",
      caption: "With meringue kisses",
      desc: "Vanilla and strawberry cake with meringue kisses, white chocolate drip and fresh strawberries.",
      src: "/images/cakes/2.png",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "lemon",
    meta: {
      title: "Lemon",
      caption: "Lemon lemon lemon lemon",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/3.png",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "gingerbread",
    meta: {
      title: "Gingerbread",
      caption: "Nom nom nom",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cakes/4.png",
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