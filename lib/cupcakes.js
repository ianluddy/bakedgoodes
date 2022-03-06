const variants = [
  {
    title: "Box of 6",
    price: 14
  },
  {
    title: "Box of 12",
    price: 26
  },
  {
    title: "Box of 18",
    price: 36
  },
];

export const cupcakes = [
  {
    id: "vanilla",
    meta: {
      title: "Vanilla",
      caption: "Mmmmmmmm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cup1.jpg",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants
  },
  {
    id: "chocolate",
    meta: {
      title: "Chocolate",
      caption: "Something something",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cup2.jpg",
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
      src: "/images/cup3.jpg",
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
      src: "/images/cup4.jpg",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
];

export function getPostData(id) {
  return {
    id,
    ...cupcakes.filter(cupcake => cupcake.id == id)[0]
  }
}

export function getAllPostIds() {
  return cupcakes.map(cupcake => {
    return {
      params: {
        id: cupcake.id
      }
    }
  })
}