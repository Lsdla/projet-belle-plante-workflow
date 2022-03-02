import {Category} from "./category";

export class Product {
  name!: string;
  avatar!: string;
  priceTTC!: number;
  priceTVA!: number;
  rating!: number;
  category!: Category;
  constructor(product: Product) {
    Object.assign(this, product);
  }
}
