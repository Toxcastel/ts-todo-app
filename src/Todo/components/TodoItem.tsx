/* Nuestro componente recibirá por defecto un argumento, el cual estamos destructurando aquí como {todo}.
    Al dejar solo {todo}, typescript nos arroja error porque define automáticamente como 'any', cosa que se debe evitar
    Para evitarlo, debemos definir el tipado de lo que este componente recibirá, por lo tanto, crearemos aquí una interface */

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";

// el uso de interfaces tiene menos carga de código que type
interface props {
    todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
    const { toggleTodo } = useContext(TodoContext);

    const handleDbClick = () => toggleTodo(todo.id);

    return (
        <li style={{ cursor: "pointer", textDecoration: todo.completed ? "line-through" : "" }} onDoubleClick={handleDbClick}>
            {todo.desc}
        </li>
    );
};
