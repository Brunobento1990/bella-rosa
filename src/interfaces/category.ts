import { Product } from "./product";

export interface Category {
    id: string,
    description: string;
    number: number;
    products: Product[]
}