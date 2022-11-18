import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction = { type: "addTodo"; payload: Todo } | { type: "toggleTodo"; payload: { id: string } };

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case "addTodo":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        // cuando hacemos spread de estas cosas nos estamos asegurando de que estamos creando objetos nuevos y no referencias. En JS todos los objetos pasan por referencia, entonces con esto nos evitamos mutarlos
        case "toggleTodo":
            return {
                ...state,
                todos: state.todos.map(({ ...todo }) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                }),
            };

        default:
            return state;
    }
};
