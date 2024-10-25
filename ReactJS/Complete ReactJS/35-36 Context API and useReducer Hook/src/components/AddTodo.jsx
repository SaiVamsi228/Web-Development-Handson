import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {

  const {addNewItem} =  useContext(TodoItemsContext)

  const todoNameElement = useRef()
  const dueDateElement = useRef()
  

  const handleAddButton = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value
    let dueDate = dueDateElement.current.value
    todoNameElement.current.value = ""
    dueDateElement.current.value = ""
    addNewItem(todoName,dueDate)
  };

  return (
    <div className="container text-center">
      <form className="row sv-row" onSubmit={(event)=>handleAddButton(event)} >
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            name=""
            id=""
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-outline-primary">
            <IoMdAddCircleOutline
              className={styles.IoMdAddCircleOutline}
            ></IoMdAddCircleOutline>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
