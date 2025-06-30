
export const BtnToggle = ({todo, loading, handleToggleTodo}) => {
  return (
    <button 
        className="btn btn-sm btn-outline-success me-2" 
        onClick={() => handleToggleTodo(todo.id)}
        disabled={loading}
    >
        {todo.completed ? 'Undo' : 'Complete'}
    </button>
  )
}
