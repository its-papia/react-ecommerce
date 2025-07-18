import tonerImg from '../given-skin-toner.jpg';
import moisturizerImg from '../daily-moisturizer.jpg';
import nightCreamImg from '../night-care-cream.jpg';
import cleanser from '../deep-cleanser.jpg'
import bodyoil from '../coco-body-oil.jpg'


const products = [
  {
    id: 1,
    name: 'Anti-aging Skin Toner',
    category: "men",
    image: tonerImg,
    new_price: 40.00,
    old_price: 55.00,
  },
  {
    id: 2,
    name: 'Daily Moisturiser',
    category: "men",
    image: moisturizerImg,
    new_price: 45.00,
    old_price: 56.00,
  },
  {
    id: 3,
    name: 'Night Care Cream',
    category: "women",
    image: nightCreamImg,
    new_price: 25.00,
    old_price: 28.00,
  },
  {
    id: 4,
    name: 'Deep Cleanser',
    category: "kids",
    image: bodyoil,
    new_price: 40.00,
    old_price: 33.00,
  },
  {
    id: 5,
    name: 'Coco Body Oil',
    category: "kids",
    image: cleanser,
    new_price: 60.00,
    old_price: 48.00,
  },
];

export default products;