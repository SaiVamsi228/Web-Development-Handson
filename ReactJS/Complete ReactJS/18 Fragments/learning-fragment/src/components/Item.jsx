import styles from "./Item.module.css";

// const Item = (props)=>{
const Item = ({ foodItem ,bought, handleBuyButton }) => {
  //Destructuring while catching as argument

  // let { foodItem } = props //Array destructuring
  // return <li  className="list-group-item">{props.foodItem}</li>

  return (
    <li className={`${styles["sv-item"]} list-group-item ${bought?"active":""}`}>
      <span className={`${styles["sv-span"]}`}>{foodItem}</span>{" "}
      <button className={styles.button} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;
