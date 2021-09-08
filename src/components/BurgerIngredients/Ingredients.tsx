import React from "react";

import { TIngredient } from "~/interfaces";
import get from "lodash/get";
import { tabDictionary } from "~/constants";
import { IngredientElement } from "./IngredientElement";

export const Ingredients = (props: {
  openDetail: (ingredient: TIngredient) => void;
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
            openDetail={props.openDetail}
            key={ingredient._id}
            count={0}
            ingredient={ingredient}
          />
        ))}
      </div>
    </div>
  );
};
