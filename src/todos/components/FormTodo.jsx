import React from "react";

export const FormTodo = React.memo(({handleAddTodo, loading}) => {


  const handleNewTodo = (e) => {
    e.preventDefault(); 

    // Create a new todo object    
    const newTodo = {
      text: e.target.todo.value,
      completed: false
    } 

    handleAddTodo(newTodo);
    
    e.target.todo.value = '';   
  }

  return (
    <form onSubmit={handleNewTodo} className="mt-4">
      <div className="input-group">
          <input 
              type="text" 
              name="todo" 
              className="form-control" 
              placeholder="Add a new todo" 
              required
          />
      </div>
        <button 
            className="btn btn-outline-primary mt-4" 
            type="submit"
            disabled={loading}
        >
          Add Todo
        </button>
    </form>
  )
})
