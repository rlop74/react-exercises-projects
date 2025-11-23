import { useTodoList } from "../stores/todo-list-store";

export const FavoriteTodoList = () => {
    const todoList = useTodoList((state) => state.todoList);

    return (
        <div className="mt-5">
            <p className="font-bold">Favorite Todos</p>
            {todoList
                .filter((todo) => todo.favorite === true)
                .map((todo) => (
                    <li key={todo.id} className="list-none">
                        {todo.name}
                    </li>
                ))}
        </div>
    );
};
