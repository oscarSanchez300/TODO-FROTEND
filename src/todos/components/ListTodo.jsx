import PropTypes from 'prop-types'
import { BtnDelete } from "./BtnDelete"
import { BtnToggle } from "./BtnToggle"

export const ListTodo = ({todo, loading, handleRemoveTodo, handleToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <span className={todo.completed ? 'text-decoration-line-through' : ''}>
            {todo.text}
        </span>
        <div>
            <BtnToggle todo={todo} loading={loading} handleToggleTodo={handleToggleTodo}/>
            <BtnDelete id={todo.id} loading={loading} handleRemoveTodo={handleRemoveTodo}/>
        </div>
    </li>
  )
}


ListTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
}