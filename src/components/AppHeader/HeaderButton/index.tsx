import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";

export default function HeaderButton(props: {
  text?: string;
  children?: React.ReactNode;
}): React.ReactElement {
  return (
    <Button type="primary">
      <div className={style.buttonInner}>
        {props.children && <div className={style.buttonIcon}>{props.children}</div>}
        {props.text && <div>{props.text}</div>}
      </div>
    </Button>
  );
}
