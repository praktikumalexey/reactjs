import React from "react";
import logo from "./logo.svg";
import * as data from "./utils/data.json";
import syles from "./styles/index.module.css";
// import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

console.log(data[0], syles);

function App(): React.ReactElement {
  return (
    <div className="App">
      {/* <Logo /> */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className={syles.redText}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
