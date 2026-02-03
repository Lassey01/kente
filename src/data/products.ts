import { Product } from '@/types/product';
import kenteMale1 from '@/assets/kente-male-1.jpg';
import kenteMale2 from '@/assets/kente-male-2.jpg';
import kenteFemale1 from '@/assets/kente-female-1.jpg';
import kenteFemale2 from '@/assets/kente-female-2.jpg';
import kenteUnisex1 from '@/assets/kente-unisex-1.jpg';
import kenteUnisex2 from '@/assets/kente-unisex-2.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Adinkra Kente',
    price: 250,
    image: kenteMale1,
    category: 'male',
    description: 'Traditional hand-woven kente with bold green and gold patterns. Perfect for ceremonies and special occasions.',
  },
  {
    id: '2',
    name: 'Kings Pride Kente',
    price: 320,
    image: kenteMale2,
    category: 'male',
    description: 'Premium quality kente cloth featuring deep green and red stripes. A symbol of royalty and prestige.',
  },
  {
    id: '3',
    name: 'Queens Elegance Kente',
    price: 280,
    image: kenteFemale1,
    category: 'female',
    description: 'Beautiful red and gold kente design crafted for the modern African queen. Lightweight and elegant.',
  },
  {
    id: '4',
    name: 'Nana Yaa Collection',
    price: 350,
    image: kenteFemale2,
    category: 'female',
    description: 'Exquisite feminine kente with delicate pink and gold patterns. Perfect for weddings and celebrations.',
  },
  {
    id: '5',
    name: 'Heritage Gold Kente',
    price: 200,
    image: kenteUnisex1,
    category: 'unisex',
    description: 'Classic gold and black kente pattern suitable for all. Versatile design for any occasion.',
  },
  {
    id: '6',
    name: 'Unity Kente',
    price: 275,
    image: kenteUnisex2,
    category: 'unisex',
    description: 'Royal blue and gold unisex kente. A perfect blend of tradition and modern style.',
  },
];
