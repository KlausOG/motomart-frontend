import { CartItemDTO } from "./cart-items.dto";
export interface CartDTO {
    cartId?: number;
    userId?: number;
    cartItems?: CartItemDTO[];
  }
  