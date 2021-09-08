import React from "react";
import Modal from "~/components/Modal";
import style from "./style.module.css";
import done from "~/image/done.png";

export const OrderDetails = (props: {
  onClose: () => void;
  isOpen: boolean;
  id: number;
}): React.ReactElement => {
  return (
    <Modal caption="" isOpen={props.isOpen} onClose={props.onClose}>
      <div className={style.order}>
        <div className="text text_type_digits-large mt-15">034536</div>
        <div className="text text_type_main-medium mt-10">индентефикатор заказа</div>
        <div className={`${style.orderIco} pt-15`}>
          <img src={done} />
        </div>
        <div className="text text_type_main-default mt-15">
          Ваш заказ начали готовить
        </div>
        <div className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </div>
      </div>
    </Modal>
  );
};
