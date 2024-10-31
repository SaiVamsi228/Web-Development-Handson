import Button from "./Button";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({handleButtonEvent}) => {
  let buttonArr = [
    "AC",
    "🔙",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "✈️",
    0,
    ".",
    "=",
  ];

  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonArr.map((item) => (
          <Button
            key={item}
            buttonName={item}
            handleButtonEvent={() => {
              handleButtonEvent(item);
            }}
          ></Button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
