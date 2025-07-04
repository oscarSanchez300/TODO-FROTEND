import PropTypes from 'prop-types';


export const BtnDelete = ({id, loading, handleRemoveTodo}) => {
  return (
    <button 
        className="btn btn-sm btn-outline-danger" 
        onClick={() => handleRemoveTodo(id)}
        disabled={loading}
        data-testid="test-delete"
        role="dialog"
        aria-label='btn-delete'
    >
        Delete
    </button>
  )
}

BtnDelete.propTypes = {
  id: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
}
