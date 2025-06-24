import { UseTodo } from "../hooks/UseTodo";
import { TodosContext } from "./store";


export const TodoProvider = ({ children }) => {

    const { todos, dispatch } = UseTodo();

    
    return (
        <TodosContext.Provider value={{
            todos,
            dispatch
        }}>
            { children }
        </TodosContext.Provider >
    )

}

