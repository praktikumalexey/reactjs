import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "~/interfaces";

export default function Constructor(props: {
  ingredients: Array<TIngredient>;
}): React.ReactElement {
  const listItems = props.ingredients.map((item: TIngredient) => (
    <React.Fragment key={item._id}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
      />
    </React.Fragment>
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
