import { Cart } from './cart.model';
import { Product } from './product.model';

export class CartItem {
  cartItemId?: number;
  cart?: Cart;
  product?: Product;
  quantity?: number;
}
