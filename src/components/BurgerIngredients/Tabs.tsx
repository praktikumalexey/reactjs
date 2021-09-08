import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";
import { tabDictionary } from "~/constants";
import get from "lodash/get";

export const Tabs = (props: {
  change: (value: string) => void;
  tabs: Array<string>;
  current: string;
}): React.ReactElement => {
  const [current, setCurrent] = React.useState(props.current);

  const onchange = (value: string) => {
    setCurrent(value);
    props.change(value);
  };

  return (
    <div className={style.tabs}>
      {props.tabs.map((item: string) => (
        <Tab key={item} value={item} active={current === item} onClick={onchange}>
          {get(tabDictionary, item, "")}
        </Tab>
      ))}
    </div>
  );
};
