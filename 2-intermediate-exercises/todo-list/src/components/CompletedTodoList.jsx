import { useTodoList } from "../stores/todo-list-store";

export const CompletedTodoList = () => {
    const todoList = useTodoList((state) => state.todoList);

    return (
        <div className="mt-5">
            <p className="font-bold">Completed Items</p>
            {todoList
                .filter((todo) => todo.completed === true)
                .map((todo) => (
                    <li key={todo.id} className="list-none">
                        {todo.name}
                    </li>
                ))}
        </div>
    );
};
