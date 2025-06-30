import { useEffect, useState } from 'react'
import { UseActions } from './hooks/UseActions';
import { ListTodo } from './components/ListTodo';
import { FormTodo } from './components/FormTodo';


export const Todo = () => {

  const { data, 
          loading, 
          error, 
          handleGetTodos, 
          handleAddTodo, 
          handleRemoveTodo, 
          handleToggleTodo
         } = UseActions();

  const [stateTodos, setStateTodos] = useState([]);

  
  useEffect(() => {
    handleGetTodos();
  }, []);

  useEffect(() => { 
    setStateTodos(data);
  }, [data]);

  

  return (
    <div className="container">
      <h1 className="text-center mt-4">Todo List</h1>

      <ul className="list-group mt-4">
        {
          stateTodos.map(todo => (
            <ListTodo 
              key={todo.id} 
              todo={todo} 
              loading={loading} 
              handleRemoveTodo={handleRemoveTodo} 
              handleToggleTodo={handleToggleTodo}
            />
          ))
        }   
      </ul>

      <FormTodo handleAddTodo={handleAddTodo} loading={loading} />

    </div>
  )
}