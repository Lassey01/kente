export type Category = 'male' | 'female' | 'unisex' | 'all';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
