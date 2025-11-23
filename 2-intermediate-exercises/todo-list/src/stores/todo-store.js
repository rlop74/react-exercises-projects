import { create } from "zustand";

export const useTodo = create((set) => ({
    todo: "",
    getTodo: (todo) =>
        set((state) => ({
            todo: todo,
        })),
}));
