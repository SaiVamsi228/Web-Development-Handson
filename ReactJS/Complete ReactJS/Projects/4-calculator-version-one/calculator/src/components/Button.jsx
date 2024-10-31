import styles from "./Button.module.css"
import React, { useState, useEffect } from "react";



const Button = ({buttonName , handleButtonEvent}) => {

    const [bgColor, setBgColor] = useState("initial");
    const handleClick = () => {
        setBgColor("highlight"); // set the background color to highlight on click
        handleButtonEvent(); // trigger the handleButtonEvent function with the button label
      };
    
      useEffect(() => {
        let timer;
        if (bgColor === "highlight") {
          timer = setTimeout(() => {
            setBgColor("initial"); // reset the background color after 1 second
          }, 50);
        }
        return () => clearTimeout(timer); // clean up the timer on unmount or when bgColor changes
      }, [bgColor]);
    return <>
    <button className={styles.myButton} onClick={handleButtonEvent,handleClick} style={{ backgroundColor: bgColor === "initial" ? "white" : "grey" }} >{buttonName}</button>
    </>
}

export default Button