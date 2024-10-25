import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  let [displayItems, setdisplayItems] = useState("");

  const onNumberClick = (item) => {
    console.log(item);
    let newdisplayItems = ""

    if (item ==="AC" || item === "Delete"){
      newdisplayItems = ""
    }
    else if (item==="Backspace" || item === '🔙'){
      newdisplayItems = displayItems.slice(0,(displayItems.length)-1)
    }
    else if (item === "=" || item === "Enter") {
      newdisplayItems = (eval(displayItems) || (eval(displayItems) == 0))?eval(displayItems):"undefined"
    } 
    else {
      newdisplayItems = displayItems + item;
    }
    setdisplayItems(newdisplayItems);
  };

  return (
    <div onKeyDown={(e)=>{
      if(e.key === '+' || e.key === '-' || e.key === '/' || e.key ==='*' || e.key ==='0' || e.key ==='1' || e.key ==='2' || e.key ==='3' || e.key ==='4' || e.key ==='5' || e.key ==='6' || e.key ==='7' || e.key ==='8' || e.key ==='9' || e.key ==='Enter' || e.key === 'Backspace' ||e.key =='Delete'){
        onNumberClick(e.key)
      }
    }}>
      <div className={styles.calculator}>
        <Display displayItems={displayItems}></Display>

        <ButtonsContainer handleButtonEvent={onNumberClick} ></ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
