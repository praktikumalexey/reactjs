import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "~/interfaces";
import style from "./style.module.css";

export default function Constructor(props: {
  ingredients: Array<TIngredient>;
}): React.ReactElement {
  const listItems = props.ingredients.map((item: TIngredient, i: number) => (
    <div key={item._id} className={style.constructoItem}>
      <div className={style.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        type={
          i === 0 ? "top" : i === props.ingredients.length - 1 ? "bottom" : undefined
        }
        isLocked={true}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
      />
    </div>
  ));

  return (
    <div
      className="mt-25"
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      {listItems}
    </div>
  );
}
