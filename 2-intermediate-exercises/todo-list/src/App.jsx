
import "./App.css";

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { CompletedTodoList } from "./components/CompletedTodoList";
import { FavoriteTodoList } from "./components/FavoriteTodoList";

function App() {


    return (
        <div className="flex flex-col gap-2 bg-white p-50 rounded-xl text-black">
            <h1>To-Do List</h1>
            <AddTodo />
            <TodoList />
            <CompletedTodoList />
            <FavoriteTodoList />
        </div>
    );
}

export default App;
