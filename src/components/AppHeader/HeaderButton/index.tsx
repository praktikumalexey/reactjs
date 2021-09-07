import React from "react";
import style from "./style.module.css";

export default function HeaderButton(props: {
  text?: string;
  children?: React.ReactNode;
}): React.ReactElement {
  return (
    <a href="#" className={style.button}>
      <div className={style.buttonInner}>
        {props.children && <div className={style.buttonIcon}>{props.children}</div>}
        {props.text && <div>{props.text}</div>}
      </div>
    </a>
  );
}
