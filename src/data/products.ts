import kenteMale1 from '@/assets/kente-male-1.jpg';
import kenteMale2 from '@/assets/kente-male-2.jpg';
import kenteFemale1 from '@/assets/kente-female-1.jpg';
import kenteFemale2 from '@/assets/kente-female-2.jpg';
import kenteUnisex1 from '@/assets/kente-unisex-1.jpg';
import kenteUnisex2 from '@/assets/kente-unisex-2.jpg';
import kenteUnisex2 from '@/assets/kente-unisex-2.jpg';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';
import kenteUnisex2 from '@/assets/';


export interface LocalProduct {
  id: string;
  name: string;
  price: number;
  img: string;
  category: 'male' | 'female' | 'unisex';
  created: number;
  description: string;
}

export const localProducts: LocalProduct[] = [
  {
    id: 'f1',
    name: 'Queens Elegance Kente',
    price: 280,
    img: kenteFemale1,
    category: 'female',
    description: 'Beautiful red and gold kente design crafted for the modern African queen. Lightweight and elegant.',
    created: Date.now(),
  },
  {
    id: 'f2',
    name: 'Nana Yaa Collection',
    price: 350,
    img: kenteFemale2,
    category: 'female',
    description: 'Exquisite feminine kente with delicate pink and gold patterns. Perfect for weddings and celebrations.',
    created: Date.now(),
  },
  {
    id: 'm1',
    name: 'Royal Adinkra Kente',
    price: 250,
    img: kenteMale1,
    category: 'male',
    description: 'Traditional hand-woven kente with bold green and gold patterns. Perfect for ceremonies and special occasions.',
    created: Date.now(),
  },
  {
    id: 'm2',
    name: 'Kings Pride Kente',
    price: 320,
    img: kenteMale2,
    category: 'male',
    description: 'Premium quality kente cloth featuring deep green and red stripes. A symbol of royalty and prestige.',
    created: Date.now(),
  },
  {
    id: 'u1',
    name: 'Heritage Gold Kente',
    price: 200,
    img: kenteUnisex1,
    category: 'unisex',
    description: 'Classic gold and black kente pattern suitable for all. Versatile design for any occasion.',
    created: Date.now(),
  },
  {
    id: 'u2',
    name: 'Unity Kente',
    price: 275,
    img: kenteUnisex2,
    category: 'unisex',
    description: 'Royal blue and gold unisex kente. A perfect blend of tradition and modern style.',
    created: Date.now(),
  },
];
