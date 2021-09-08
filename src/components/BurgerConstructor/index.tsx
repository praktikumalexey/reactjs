import React, { useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Constructor from "./Constructor";
import style from "./style.module.css";
import { TIngredient } from "~/interfaces";
import { OrderDetails } from "./OrderDetails";

export default function BurgerConstructor(props: {
  ingredients: Array<TIngredient>;
}): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orderId, setOrderId] = useState<number>(0);
  const [openOrder, setOpenOrder] = useState<boolean>(false);

  const openDetail = () => {
    setOpenOrder(true);
  };

  const closeDetails = () => {
    setOpenOrder(false);
  };

  return (
    <>
      <OrderDetails id={orderId} isOpen={openOrder} onClose={closeDetails} />
      <div className={`${style.root} container ml-5 mr-5`}>
        <div className="box flex-1 relative">
          <div className={style.constructorBlock}>
            <div
              className={`${style.constructorWrapper} ${style.constructoContainer}`}
            >
              <Constructor ingredients={props.ingredients} />
            </div>
          </div>
        </div>
        <div className="box">
          <div
            className={`${style.constructorWrapper} ${style.constructoContainer} flex-end pb-10 pt-10`}
          >
            <div className={`${style.constructorTotal} pr-10`}>
              <p className="text text_type_digits-medium mr-2">0</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large" onClick={openDetail}>
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
