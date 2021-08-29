import React, { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import BurgerConstructor from "./components/BurgerConstructor";
import BurgerIngredients from "./components/BurgerIngredients";

function App(): React.ReactElement {
  const [ingredients, setIngredients] = useState([]);

  // fetch only once
  useEffect(() => {
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((response) => response.json())
      .then(({ data }) => {
        setIngredients(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {ingredients.length > 0 && (
        <div className="container">
          <div className="box container-content">
            <AppHeader />
          </div>
          <div className="box flex-1 container-content">
            <div className="row">
              <div className="col-50">
                <BurgerIngredients ingredients={ingredients} />
              </div>
              <div className="col-50">
                <BurgerConstructor ingredients={ingredients} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
