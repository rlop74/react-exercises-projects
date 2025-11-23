import { useState } from "react";
import { useTodoList } from "../stores/todo-list-store";

export const TodoList = () => {
    const todoList = useTodoList((state) => state.todoList);
    const deleteTodo = useTodoList((state) => state.deleteTodo);
    const completeTodo = useTodoList((state) => state.completeTodo);
    const favoriteTodo = useTodoList((state) => state.favoriteTodo)

    console.log(todoList);

    return (
        <>
            {todoList
                .filter((todo) => todo.completed === false)
                .map((todo) => {
                    return (
                        <>
                            <div className="flex gap-2">
                                <li key={todo.id} className="list-none">
                                    {todo.name}
                                </li>
                                <input
                                    type="checkbox"
                                    onClick={() => completeTodo(todo)}
                                />
                                <input
                                    type="checkbox"
                                    onChange={() => favoriteTodo(todo)}
                                />
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="text-white p-1"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    );
                })}
        </>
    );
};
