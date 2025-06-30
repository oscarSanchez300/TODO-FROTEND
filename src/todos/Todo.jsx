import { useContext, useEffect, useState } from 'react'
import { TodosContext } from './context/store';
import { ListTodo } from './components/ListTodo';
import { FormTodo } from './components/FormTodo';

import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;


export const Todo = () => {

  const { todos, dispatch } = useContext(TodosContext);
  const { todos: data, loading, error } = todos;
  const [stateTodos, setStateTodos] = useState([]);

  const handleGetTodos = async () => {

    try {

      dispatch({ type: 'START_SET_TODOS' });

      const response = await axios.get(`${baseUrl}/todos`);
      // console.log(response.data);

      dispatch({ type: 'SET_TODOS', payload: response.data });

    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }

   
  }


  useEffect(() => {
    handleGetTodos();   
  }, []);

  useEffect(() => { 
    setStateTodos(data);
  }, [data]);

  const handleAddTodo = async(newTodo) => {

     // Check if the newTodo has a title
    if (!newTodo.text) {
      throw new Error("Todo title cannot be empty");
    }

    // Simulate an API call
    try {

      dispatch({ type: 'START_SET_TODOS' });

      const response = await axios.post(`${baseUrl}/todos`, newTodo);
      // console.log(response.data);

      dispatch({ type: 'ADD_TODO', payload: response.data });

      
    } catch (error) {
      console.error("Error adding todo:", error);
      dispatch({ type: 'SET_ERROR', payload: error.message });
      return;
      
    }

  }

  const handleRemoveTodo = async(id) => {

    try {
      
      dispatch({ type: 'START_SET_TODOS' });

      console.log({id})

      const response = await axios.delete(`${baseUrl}/todos/${id}`);
      // console.log(response.data);

      dispatch({ type: 'REMOVE_TODO', payload: id });

    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }

  }

  const handleToggleTodo = async(id) => {

    try {
      
      dispatch({ type: 'START_SET_TODOS' });

      const response = await axios.put(`${baseUrl}/todos/${id}`);
      // console.log(response.data);

      dispatch({ type: 'TOGGLE_TODO', payload: id });

    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }

  }

  return (
    <div className="container">

      <h1 className="text-center mt-4">Todo List</h1>

      <ul className="list-group mt-4">
        {stateTodos.map(todo => (
          <ListTodo key={todo.id} todo={todo} loading={loading} handleRemoveTodo={handleRemoveTodo} handleToggleTodo={handleToggleTodo} />
        ))}   
      </ul>

      <FormTodo handleAddTodo={handleAddTodo} loading={loading} />

    </div>
  )
}