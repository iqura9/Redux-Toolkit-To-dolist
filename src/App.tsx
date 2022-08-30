import './App.css';
import {AddTodo} from "./components/AddTodo";
import {TodoList} from "./components/TodoList";

export const App = () => {
  return (
      <div className="app">
        <h1 className="app-title">My Tasks</h1>
        <AddTodo />
        <TodoList />
      </div>
  );
}


