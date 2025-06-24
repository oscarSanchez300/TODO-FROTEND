import { useReducer } from "react";

export const UseTodo = () => {

    const init = () => [
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Learn Context', completed: false },
        { id: 3, title: 'Learn Router', completed: false },
    ]


    const reducer = ( state, action ) => {

        switch (action.type) {
            case 'ADD_TODO':
                return [...state, action.payload];
            case 'REMOVE_TODO':
                return state.filter(todo => todo.id !== action.payload);
            case 'TOGGLE_TODO':
                return state.map(todo => 
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                );
            default:
                return state;
        }

    }

    
    const [ todos , dispatch ] = useReducer(reducer, {}, init);

    return { todos, dispatch };
}