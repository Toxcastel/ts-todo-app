import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

/* el contexto aloja toda la información que quiero compartir a lo largo de mis componentes 
    Siempre tenemos que especificar la información que va a proveer el Provider! */

export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: (id: string) => void;
};

// createContext es un genérico que lo que va a fluir internamente es un TodoContextProps
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
