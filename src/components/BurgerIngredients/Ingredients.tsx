import React from "react";

import { TIngredient } from "~/interfaces";
import get from "lodash/get";
import { tabDictionary } from "~/constants";
import { IngredientElement } from "./IngredientElement";

export const Ingredients = (props: {
  groupName: string;
  ingredients: Array<TIngredient>;
}): React.ReactElement => {
  const { ingredients } = props;
  return (
    <div className="m-0 p-0">
      <div className="mt-8 text text_type_main-medium">
        {get(tabDictionary, props.groupName, "")}
      </div>
      <div className="row pl-1 pr-1">
        {ingredients.map((ingredient) => (
          <IngredientElement
            key={ingredient._id}
            count={0}
            price={ingredient.price}
            img={ingredient.image}
            name={ingredient.name}
          />
        ))}
      </div>
    </div>
  );
};
