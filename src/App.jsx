import { Todo } from './todos/Todo';
import { TodoProvider } from './todos/context/todoProvider';

import './App.css';

export const App = () => {

  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  )
}
