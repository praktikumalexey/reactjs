import React from "react";
import {
  Logo,
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "./HeaderButton";
import style from "./style.module.css";

function AppHeader(): React.ReactElement {
  return (
    <div className={`${style.header} pb-3 pt-3`}>
      <div className={style.left}>
        <div className={style.buttonGroup}>
          <HeaderButton text={"Конструктор"}>
            <BurgerIcon type="primary" />
          </HeaderButton>
          <HeaderButton text={"Лента заказов"}>
            <ListIcon type="primary" />
          </HeaderButton>
        </div>
      </div>
      <div className={style.middle}>
        <Logo />
      </div>
      <div className={style.right}>
        <HeaderButton text={"Личный кабинет"}>
          <ProfileIcon type="primary" />
        </HeaderButton>
      </div>
    </div>
  );
}

export default AppHeader;
