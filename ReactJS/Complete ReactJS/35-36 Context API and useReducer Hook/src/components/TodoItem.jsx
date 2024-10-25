import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  
  const {deleteItem}  = useContext(TodoItemsContext)

  return (
    <div className="container">
      <div className="row  sv-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={()=>{deleteItem(todoName)}}
          >
            <MdOutlineDeleteOutline
              className={styles.MdOutlineDeleteOutline}
            ></MdOutlineDeleteOutline>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
