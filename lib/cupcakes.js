const variants = [
  {
    title: "Box of 6 - €14",
    shortTitle: "Box of 6",
    price: 14
  },
  {
    title: "Box of 12 - €26",
    shortTitle: "Box of 12",
    price: 26
  },
  {
    title: "Box of 18 - €36",
    shortTitle: "Box of 18",    
    price: 36
  },
];

export const data = [
  {
    id: "vanilla",
    meta: {
      title: "Vanilla",
      caption: "Mmmmmmmm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cupcakes/1.jpg",
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
      src: "/images/cupcakes/2.jpg",
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
      src: "/images/cupcakes/3.jpg",
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
      src: "/images/cupcakes/4.jpg",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "red-velvet",
    meta: {
      title: "Red Velvet",
      caption: "Nom nom nom",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cupcakes/5.jpg",
      link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link",
    },
    variants: variants 
  },
  {
    id: "chocolate-fudge",
    meta: {
      title: "Chocolate Fudge",
      caption: "Nom nom nom",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur.",
      src: "/images/cupcakes/6.jpg",
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