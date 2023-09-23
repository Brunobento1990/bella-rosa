import { Category } from "./category";

export interface Product {
    id: string,
    description: string,
    technical_specification?: string,
    photograph?: string,
    size?: string,
    color?: string,
    price: number,
    pricePromotion: number,
    dt_Expiration_Promotion?: string,
    categoryId: string,
    category: Category,
    emphasis: boolean
}