import React from "react";
import { Tabs } from "./Tabs";
import { Ingredients } from "./Ingredients";
import style from "./style.module.css";
import { TIngredient, TGroupIngredietnts } from "~/interfaces";
import get from "lodash/get";

const ingredientsGroup = (ingredients: Array<TIngredient>): TGroupIngredietnts => {
  return ingredients.reduce(
    (result: TGroupIngredietnts, ingredient: TIngredient) => {
      if (!Array.isArray(result[ingredient.type])) {
        result[ingredient.type] = [];
      }
      result[ingredient.type] = result[ingredient.type]
        ? result[ingredient.type]
        : [];

      (result[ingredient.type] as Array<TIngredient>).push(ingredient);
      return result;
    },
    {}
  );
};

export default function BurgerIngredients(props: {
  ingredients: Array<TIngredient>;
}): React.ReactElement {
  const mapIngredient = ingredientsGroup(props.ingredients);
  const groupsName: Array<string> = Object.keys(mapIngredient);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refs = groupsName.reduce((result: any, value: string) => {
    result[value] = React.createRef();
    return result;
  }, {});

  const changeTabs = (groupsName: string) => {
    refs[groupsName].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className={`${style.root} container ml-5 mr-5`}>
        <div className="box">
          <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
          <Tabs change={changeTabs} tabs={groupsName} current={groupsName[0]} />
        </div>
        <div className="box flex-1 relative">
          <div className={style.ingredientsBlock}>
            <div className="pt-2">{/* separator */}</div>
            {groupsName.map((name) => (
              <div key={name} ref={refs[name]}>
                <Ingredients
                  groupName={name}
                  ingredients={get(mapIngredient, name)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
