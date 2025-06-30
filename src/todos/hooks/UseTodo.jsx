import { useReducer } from "react";

// const init = () => [
//                     { id: 1, title: 'Learn React', completed: false },
//                     { id: 2, title: 'Learn Context', completed: false },
//                     { id: 3, title: 'Learn Router', completed: false },
//                 ];

const INIT_STATE = {
    loading : false,
    error   : null,
    todos   : [],
};

export const UseTodo = () => {


    const reducer = ( state, action ) => {

        switch (action.type) {
            case 'START_SET_TODOS':
                return {
                    ...state,
                    loading: true,
                    error: null,
                };
            case 'SET_ERROR':
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                };
            case 'SET_TODOS':
                return {            
                    loading: false,
                    error: null,
                    todos: action.payload,
                };
            case 'ADD_TODO':
                return state = {
                    loading: false,
                    error: null,
                    todos: [...state.todos, action.payload],
                }
            case 'REMOVE_TODO':
                return {
                    loading: false,
                    error: null,
                    todos: state.todos.filter(todo => todo.id !== action.payload),
                };
            case 'TOGGLE_TODO':
                return {    
                    loading: false,
                    error: null,
                    todos: state.todos.map(todo => 
                                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                            )
                }
                
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }

    }

    
    const [ todos , dispatch ] = useReducer(reducer, INIT_STATE);

    return { todos, dispatch };
}