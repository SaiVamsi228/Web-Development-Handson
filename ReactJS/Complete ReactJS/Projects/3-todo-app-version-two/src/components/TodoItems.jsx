import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

const TodoItems = ({todoItems}) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map(item => (
            <TodoItem key={item} todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
