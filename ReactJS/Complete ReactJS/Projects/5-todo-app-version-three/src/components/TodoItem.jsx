import styles from "./TodoItem.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";

function TodoItem({ todoName, todoDate, HandleDeleteButton }) {
  return (
    <div className="container">
      <div className="row  sv-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={HandleDeleteButton}
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
