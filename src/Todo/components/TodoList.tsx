import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    /* Adentro del <ul> necesitamos ver los 'Todo' que están en nuestro State. 
    Para hacerlo nos traemos el useContext
    El context va a ser de tipo 'TodoContext', definido en los contextos
    El inconveniente es que inicialmente TodoContext está definido como objeto vacío {}*/

    /* Sin el hook que creamos 'useTodos', tendríamos que haber sacado el state del context, tal como aparece aquí: 
    const { todoState } = useContext(TodoContext);
    const {todos} = todoState;
*/
    const { todos } = useTodos();

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
