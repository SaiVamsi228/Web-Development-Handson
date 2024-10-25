import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
  
  return (
    <input
      type="text"
      className={styles.FoodInputBox}
      placeholder="Search Mutton"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
