// esto no es un componente que retorna algo, por eso no es tsx

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
    const { todoState, toggleTodo } = useContext(TodoContext);
    const {todos} = todoState;

    return {
        todos: todos,
        pendingTodos: todos.filter(todo => todo.completed),
        toggleTodo,
    };
};
