import { useContext } from 'react';
import {TodosContext} from '../context/store'

import axios from 'axios';

// const baseUrl = import.meta.env.VITE_BASE_URL;
const baseUrl = 'http://localhost:3000/api';


export const UseActions = () => {

    const { todos, dispatch } = useContext(TodosContext);
    const { todos: data, loading, error } = todos;

    const handleGetTodos = async() => {

        try {

            dispatch({ type: 'START_SET_TODOS' });

            const response = await axios.get(`${baseUrl}/todos`);
            // console.log(response.data);

            dispatch({ type: 'SET_TODOS', payload: response.data });

            return response.data;

        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }


    }


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

            // console.log({id})

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



  return {
    data,
    loading,
    error,

    //Methods
    handleGetTodos,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo,
  }

}
