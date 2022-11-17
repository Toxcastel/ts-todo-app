import { TodoContext } from "./TodoContext";

/* JSX.Element es un elemento propio de React para definir el tipo de los children.
JSX.Element = si es uno
JSX.Element[] = si son varios  */

interface props {
    children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
    return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
