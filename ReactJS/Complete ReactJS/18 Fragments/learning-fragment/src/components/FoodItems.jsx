import Item from "./Item";

const FoodItems = ({ foodItems, activeItems,handleBuyButton }) => {


  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={() => handleBuyButton(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
