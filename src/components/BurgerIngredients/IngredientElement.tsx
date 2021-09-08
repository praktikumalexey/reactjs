import React from "react";
import style from "./style.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "~/interfaces";

export const IngredientElement = (props: {
  ingredient: TIngredient;
  count: number;
  openDetail: (ingredient: TIngredient) => void;
}): React.ReactElement => {
  const { ingredient, count = 0, openDetail } = props;

  return (
    <div className="col-50" onClick={() => openDetail(ingredient)}>
      <div className={`${style.ingredientElement} m-3 mt-6 mb-2`}>
        {count > 0 && <Counter count={count} size="default" />}
        <div className={style.ingredientImg}>
          <img src={ingredient.image} />
        </div>
        <div className={`${style.ingredientPrice} mt-1 mb-2`}>
          <span className="text text_type_digits-default mr-2">
            {ingredient.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${style.ingredientName} text text_type_main-default`}>
          {ingredient.name}
        </div>
      </div>
    </div>
  );
};
