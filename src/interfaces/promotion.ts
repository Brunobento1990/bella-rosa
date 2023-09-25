import { ItemPromotion } from "./items-promotion";

export interface IPromotion {
  description: string;
  dt_Expiration: string;
  id: string;
  number: number;
  itemsPromotion: ItemPromotion[];
}
