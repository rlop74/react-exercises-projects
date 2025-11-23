import { create } from "zustand";

export const useTodoList = create((set) => ({
    todoList: [],
    addTodoList: (todo) =>
        set((state) => ({
            todoList: [
                ...state.todoList,
                {
                    id: Date.now(),
                    name: todo,
                    completed: false,
                    favorite: false,
                },
            ],
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todoList: state.todoList.filter((t) => t.id != id),
        })),
    completeTodo: (todo) =>
        set((state) => ({
            todoList: [
                ...state.todoList.filter((t) => t.id != todo.id),
                { ...todo, completed: true },
            ],
        })),
    favoriteTodo: (todo) =>
        set((state) => ({
            todoList: [
                ...state.todoList.filter((t) => t.id != todo.id),
                { ...todo, favorite: true },
            ],
        })),
}));
