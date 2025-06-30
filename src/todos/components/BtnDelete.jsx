
export const BtnDelete = ({id, loading, handleRemoveTodo}) => {
  return (
    <button 
        className="btn btn-sm btn-outline-danger" 
        onClick={() => handleRemoveTodo(id)}
        disabled={loading}
    >
        Delete
    </button>
  )
}
