import React from "react";
import style from "./style.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

export interface IBurgerIngredient {
  img: string;
  count?: number;
  price: number;
  name: string;
}

export const IngredientElement = (props: IBurgerIngredient): React.ReactElement => {
  const count = props.count || 0;
  return (
    <div className="col-50">
      <div className={`${style.ingredientElement} m-3 mt-6 mb-2`}>
        {count > 0 && <Counter count={count} size="default" />}
        <div className={style.ingredientImg}>
          <img src={props.img} />
        </div>
        <div className={`${style.ingredientPrice} mt-1 mb-2`}>
          <span className="text text_type_digits-default mr-2">{props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${style.ingredientName} text text_type_main-default`}>
          {props.name}
        </div>
      </div>
    </div>
  );
};
