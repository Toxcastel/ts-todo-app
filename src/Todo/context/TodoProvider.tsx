import { useReducer } from "react";
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

/* JSX.Element es un elemento propio de React para definir el tipo de los children.
JSX.Element = si es uno
JSX.Element[] = si son varios  */

interface props {
    children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Devovler las piedras',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
};
export const TodoProvider = ({ children }: props) => {

    /* Normalmente el reducer viene como: useReducer(reducer, initialState, init) , donde init es una opción para carga peresoza que crea un initial state. Aquí no se necesita eso */
    const [todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE)

    return <TodoContext.Provider value={{todoState}}>{children}</TodoContext.Provider>;
};
