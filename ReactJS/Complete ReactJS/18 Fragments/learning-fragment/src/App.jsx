import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [items, setFoodItems] = useState([]);

  let [activeItems, setActiveItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...items, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
    // setTextState(event.target.value);
  };

  const onClickBuy = (item) => {
    let newActiveItems = [...activeItems, item];
    setActiveItems(newActiveItems);
  };

  return (
    <>
      <Container>
        <main>
          <h1 className="food-heading">Healthy Foods</h1>
          <FoodInput handleKeyDown={onKeyDown}></FoodInput>
          <ErrorMessage foodItems={items}></ErrorMessage>
          <FoodItems foodItems={items} activeItems={activeItems} handleBuyButton={onClickBuy}></FoodItems>
        </main>
      </Container>
    </>
  );
}

export default App;
