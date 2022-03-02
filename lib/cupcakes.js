export const cupcakes = [
  {
    id: "vanilla",
    title: "Vanilla",
    desc: "Plenty of toppings available",
    src: "/images/cup1.jpg",
    link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
  },
  {
    id: "chocolate",
    title: "Chocolate",
    desc: "Plenty of toppings available",
    src: "/images/cup2.jpg",
    link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
  },
  {
    id: "lemon",
    title: "Lemon",
    desc: "Plenty of toppings available",
    src: "/images/cup3.jpg",
    link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
  },
  {
    id: "gingerbread",
    title: "Gingerbread",
    desc: "Plenty of toppings available",
    src: "/images/cup4.jpg",
    link: "https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
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