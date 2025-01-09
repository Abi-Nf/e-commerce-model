export type Category = {
  color: string;
  label: string;
  imgUrl: string;
};

export type Product = {
  imgUrl: string;
  price: number;
  label: string;
}

export const categories: Category[] = [
  {
    imgUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Women',
    color: 'rgba(177,92,190,0.2)',
  },
  {
    imgUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Men',
    color: 'rgba(0,140,255,0.2)',
  },
  {
    imgUrl: 'https://images.pexels.com/photos/220455/pexels-photo-220455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Kids',
    color: 'rgba(79,122,64,0.4)',
  },
  {
    imgUrl: 'https://images.pexels.com/photos/30146880/pexels-photo-30146880/free-photo-of-elegant-woman-in-burgundy-gown-outdoor-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Fashion',
    color: 'rgba(144,64,197,0.2)',
  },
  {
    imgUrl: 'https://images.pexels.com/photos/30147000/pexels-photo-30147000/free-photo-of-urban-fashion-portrait-in-historic-setting.png',
    label: 'Vintage',
    color: 'rgba(190,132,66,0.2)',
  }
];

export const featured: Product[] = [
  {
    imgUrl: 'https://images.pexels.com/photos/30129895/pexels-photo-30129895/free-photo-of-casual-portrait-on-sofia-s-vibrant-streets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Woman T-shirt',
    price: 55
  },
  {
    imgUrl: 'https://images.pexels.com/photos/30142842/pexels-photo-30142842/free-photo-of-elegant-black-and-white-fashion-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Woman jacket',
    price: 40
  },
  {
    imgUrl: 'https://images.pexels.com/photos/30129895/pexels-photo-30129895/free-photo-of-casual-portrait-on-sofia-s-vibrant-streets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Woman T-shirt',
    price: 55
  },
  {
    imgUrl: 'https://images.pexels.com/photos/30142842/pexels-photo-30142842/free-photo-of-elegant-black-and-white-fashion-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Woman jacket',
    price: 40
  }
];

export const bestSells: Product[] = [
  {
    imgUrl: 'https://images.pexels.com/photos/30010815/pexels-photo-30010815/free-photo-of-first-communion-ceremony-with-floral-touch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Little girl dress',
    price: 60.8
  },
  {
    imgUrl: 'https://images.pexels.com/photos/2613261/pexels-photo-2613261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Orange pullover',
    price: 39.99
  },
  {
    imgUrl: 'https://images.pexels.com/photos/30010815/pexels-photo-30010815/free-photo-of-first-communion-ceremony-with-floral-touch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Little girl dress',
    price: 60.8
  },
  {
    imgUrl: 'https://images.pexels.com/photos/2613261/pexels-photo-2613261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Orange pullover',
    price: 39.99
  },
];