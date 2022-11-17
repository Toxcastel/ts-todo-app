import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
    /* Adentro del <ul> necesitamos ver los 'Todo' que están en nuestro State. 
    Para hacerlo nos traemos el useContext
    El context va a ser de tipo 'TodoContext', definido en los contextos
    El inconveniente es que inicialmente TodoContext está definido como objeto vacío {}*/
    const { todoState } = useContext(TodoContext);
    const {todos} = todoState;
    return (
        <ul>
            {todos.map(todo => todo.desc)}
        </ul>
    );
};
