import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import React, { useState , useEffect } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let [todoItems, settodoItems] = useState(JSON.parse(localStorage.getItem('myList'))||[]);

  useEffect(()=>{
    localStorage.setItem("myList",JSON.stringify(todoItems));
  },[todoItems])
  

  const onAddButtonClick = (newtodoName, newtodoDate) => {
    if (newtodoName && newtodoDate) {
      
      settodoItems((currValue)=>{

        const newtodoItems = [
          { name: newtodoName, dueDate: newtodoDate },...currValue
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


  const onDeleteButtonClick = (deltodoName)=>{

    const newtodoItems  = todoItems.filter(item => (
      item.name !== deltodoName
    ))

    settodoItems(newtodoItems)

  }

  return (
    <main>
      <center className="todo-container">
        <AppName />

        <AddTodo
          NewItem={(todoName, dueDate) => onAddButtonClick(todoName, dueDate)} 
        ></AddTodo>

        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>

        <TodoItems todoItems={todoItems}  HandleDeleteButton={(deltodoName)=>onDeleteButtonClick(deltodoName)} ></TodoItems>

      </center>
    </main>
  );
}

export default App;
