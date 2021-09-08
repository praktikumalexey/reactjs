export enum EIngredientType {
  bun = "bun",
  main = "main",
  sauce = "sauce",
}

export type TIngredientType = keyof typeof EIngredientType;

export type TIngredient = {
  _id: string;
  name: string;
  type: TIngredientType;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
};

export type TGroupIngredietnts = {
  [key in EIngredientType]?: Array<TIngredient>;
};
