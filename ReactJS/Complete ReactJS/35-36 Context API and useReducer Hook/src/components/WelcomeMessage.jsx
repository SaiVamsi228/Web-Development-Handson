import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {

  const contextObj =  useContext(TodoItemsContext)

  const todoItems = contextObj.todoItems

  return (
    <>
      {todoItems.length === 0 && (
        <div className={styles.WMcontainer}>
          <h1>
            Enjoy Your Day!
          </h1>
        </div>
      )}
    </>
  );
};

export default WelcomeMessage;
