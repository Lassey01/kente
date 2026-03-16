export type Category = 'male' | 'female' | 'unisex' | 'all';

export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  category: Category;
  description: string;
  created: number;
}

export interface CartItem extends Product {
  quantity: number;
}
