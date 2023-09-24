import { Product } from "./product"

export interface IPromotion {
    description: string,
    price: number,
    productId: string,
    product: Product,
    dt_Expiration: string,
    id: string,
    number: number
}