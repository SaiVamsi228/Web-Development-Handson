import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import React, { useState, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";


const todoItemsReducer = (action)=>{

  return [];
} 

function App() {
  // let [todoItems, settodoItems] = useState([]);

  const [newTodoItems, dispatchTodoItems] =  useReducer(todoItemsReducer,[])


  const addNewItem = (newtodoName, newtodoDate) => {
    if (newtodoName && newtodoDate) {
      settodoItems((currValue) => {
        const newtodoItems = [
          { name: newtodoName, dueDate: newtodoDate },
          ...currValue,
        ];
        return newtodoItems;
      });
    } else if (newtodoName) {
      alert("Please Enter Valid Due Date!");
    } else if (newtodoDate) {
      alert("Please Enter Valid Todo Name");
    } else {
      alert("Enter Valid Details");
    }
  };   

  const deleteItem = (deltodoName) => {
    const newtodoItems = todoItems.filter((item) => item.name !== deltodoName);

    settodoItems(newtodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <main>
        <center className="todo-container">
            
          <AppName />

          <AddTodo></AddTodo>

          <WelcomeMessage></WelcomeMessage>

          <TodoItems></TodoItems>

        </center>
      </main>
    </TodoItemsContext.Provider>
  );
}

export default App;
