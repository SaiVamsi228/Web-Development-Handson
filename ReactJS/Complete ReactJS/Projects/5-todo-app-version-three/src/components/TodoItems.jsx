import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, HandleDeleteButton }) => {
  // const HandleDeleteButton = (todoName,todoDate){

  // }
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            HandleDeleteButton={() => {
              HandleDeleteButton(item.name);
            }}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
