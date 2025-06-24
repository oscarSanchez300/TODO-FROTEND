import { useContext, useEffect, useState } from "react"
import { TodosContext } from "./context/store";


export const Todo = () => {

  const { todos, dispatch } = useContext(TodosContext);

  const [stateTodos, setStateTodos] = useState(todos);

  useEffect(() => {
    setStateTodos(todos);
  }, [todos]);

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), title: 'New Todo', completed: false };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  }

  return (
    <div className="container">

      <h1 className="text-center mt-4">Todo List</h1>
      <ul className="list-group mt-4">
        {stateTodos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className={todo.completed ? 'text-decoration-line-through' : ''}>
              {todo.title}
            </span>
            <div>
              <button 
                className="btn btn-sm btn-outline-success me-2" 
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button 
                className="btn btn-sm btn-outline-danger" 
                onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
              >
                Remove
              </button>
            </div>
          </li>
        ))}   
      </ul>

      <button 
        className="btn btn-outline-primary mt-4" 
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  )
}