import image from "../assets/image.png";

export const goodsSale = [
  {
    id: "1",
    article: "161616",
    status: "sale",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
  {
    id: "2",
    article: "161616",
    status: "sale",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
  {
    id: "3",
    article: "161616",
    status: "sale",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
  {
    id: "4",
    article: "161616",
    status: "sale",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
  {
    id: "5",
    article: "161616",
    status: "sale",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
];
export const goodsNew = [
  {
    id: "1",
    article: "161616",
    status: "new",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
  {
    id: "2",
    article: "161616",
    status: "new",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
  {
    id: "3",
    article: "161616",
    status: "new",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
  {
    id: "4",
    article: "161616",
    status: "new",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
  {
    id: "5",
    article: "161616",
    status: "new",
    category: "Аксессуары для бани",
    categoryMain: "Товары для ванны и бани",
    title: "Дверка прочистная ДПР (150х112)",
    reviews: 4.8,
    isCount: true,
    price: 1361,
    image: image,
  },
];
export const sortList = [
  {
    id: '0',
    title: 'цене',
  },
  {
    id: '1',
    title: 'цене',
  },
  {
    id: '2',
    title: 'наименованию',
  },
  {
    id: '3',
    title: 'наименованию',
  },
  {
    id: '4',
    title: 'популярности',
  },
  {
    id: '5',
    title: 'популярности',
  },
]


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const averageRating = (reviews: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return reviews.reduce((sum: number, review: any) => {
    return sum + parseFloat(review.statusRev)
  }, 0);
}

