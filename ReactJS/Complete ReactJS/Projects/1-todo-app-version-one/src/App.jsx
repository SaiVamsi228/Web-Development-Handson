import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
TodoItem2
import "./App.css"

function App() {
  return (
    <main>
      <center class="todo-container">
      <AppName/>
      <AddTodo/>
      <div className="items-container">
      <TodoItem1/>
      <TodoItem2/>
      </div>
      
    </center> 
    </main>
  );
}

export default App;
