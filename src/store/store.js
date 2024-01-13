import { create } from "zustand";
function generateRandomId() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomId = '';

    for (let i = 0; i < 5; i++) {
        // Generate a random index to pick a letter from the alphabet
        const randomIndex = Math.floor(Math.random() * alphabet.length);

        // Append the randomly selected letter to the ID
        randomId += alphabet.charAt(randomIndex);
    }

    return randomId;
}
export const useTodoStore = create((set) => ({

    todos: [
        // { id: 1, todo: "Todo 1", completed: false },
        // { id: 2, todo: "Todo 2", completed: true },
        // { id: 3, todo: "Todo 3", completed: false },
    ],
    addTodo: (todo) => set((state) => (state.todos = [...state.todos, { id: generateRandomId(), todo: todo.todo, completed: todo.completed || false }])),
    removeTodo: (id) => set((state) => (state.todos = state.todos.filter((todo) => todo.id !== id))),
    updateTodo: (updatedTodo) => set((state) => (state.todos = state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo))),
    toggleCompleted: (id) => set((state) => (state.todos = state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))),
}))