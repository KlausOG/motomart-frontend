export interface ProductDTO {
  productId?: number; // optional for new products
  name: string; // required field
  description: string; // required field
  price: number; // required field
  showroomId?: number; // optional, for product association with showroom
  imageUrl?: string; // optional, for the product image URL
}
