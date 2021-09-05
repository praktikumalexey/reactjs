import React from "react";
import Modal from "~/components/Modal";
import { TIngredient } from "~/interfaces";
import style from "./style.module.css";

export const IngredientDetails = (props: {
  ingredient: null | TIngredient;
  onClose: () => void;
}): React.ReactElement => {
  const { ingredient } = props;
  return (
    <Modal
      caption="Детали ингредиента"
      isOpen={props.ingredient !== null}
      onClose={props.onClose}
    >
      <div className={style.detailBlock}>
        <div className={style.detailImage}>
          <img src={ingredient?.image_large} />
        </div>
        <div className={`${style.detailName} text text_type_main-medium pt-5`}>
          {ingredient?.name}
        </div>
        <div className={`${style.detailInfo} mt-8`}>
          <div className={`${style.detailInfoValue}`}>
            <div className="text text_type_main-default">Калории, ккал</div>
            <div className="text text_type_digits-default">
              {ingredient?.calories}
            </div>
          </div>
          <div className={`${style.detailInfoValue}`}>
            <div className="text text_type_main-default">Белки, г</div>
            <div className="text text_type_digits-default">
              {ingredient?.proteins}
            </div>
          </div>
          <div className={`${style.detailInfoValue}`}>
            <div className="text text_type_main-default">Жиры, г</div>
            <div className="text text_type_digits-default">{ingredient?.fat}</div>
          </div>
          <div className={`${style.detailInfoValue}`}>
            <div className="text text_type_main-default">Углеводы, г</div>
            <div className="text text_type_digits-default">
              {ingredient?.carbohydrates}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
