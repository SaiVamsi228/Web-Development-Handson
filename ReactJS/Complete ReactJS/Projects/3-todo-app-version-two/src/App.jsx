import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },

    {
      name: "Go to College",
      dueDate: "5/10/2024"
    },
    {
      name:"Message HR",
      dueDate: "25/05/2024"
    }
  ];

  return (
    <main>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}></TodoItems>
        
        
      </center>
    </main>
  );
}

export default App;
