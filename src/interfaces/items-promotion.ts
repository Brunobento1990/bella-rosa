import { Product } from "./product";

export interface ItemPromotion {
  id: string;
  number: number;
  promotionId: string;
  productId: string;
  product: Product;
  unit_price: number;
}
