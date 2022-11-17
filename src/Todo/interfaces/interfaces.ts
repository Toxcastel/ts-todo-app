// Este archivo no es tsx porque no es un componente de React
// Definir el objeto no es con comas, es con punto y coma


export interface Todo {
    id: string;
    desc: string;
    completed: boolean;
}

// interface que vincula a otra
export interface TodoState {
    todoCount: number;
    todos: Todo[];
    completed: number;
    pending: number;
}