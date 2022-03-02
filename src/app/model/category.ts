export class Category {
  id!: number
  label!: string;
  description!: string;
  constructor(category: Category) {
    Object.assign(this, category);
  }
}
