import { useTodo } from "../stores/todo-store";
import { useTodoList } from "../stores/todo-list-store";

export const AddTodo = () => {
    const todo = useTodo((state) => state.todo);
    const getTodo = useTodo((state) => state.getTodo);
    const addTodoList = useTodoList((state) => state.addTodoList);

    return (
        <>
            <input
                value={todo}
                onChange={(event) => getTodo(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" ? addTodoList(todo) : ""}
                className="border-1"
            />
            <button onClick={() => addTodoList(todo)} className="text-white">
                Add ToDo
            </button>
        </>
    );
};
