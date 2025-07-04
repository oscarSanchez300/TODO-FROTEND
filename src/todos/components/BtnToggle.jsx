
import PropTypes from "prop-types";

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


BtnToggle.propTypes = {
  todo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
}
