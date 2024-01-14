import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { AddTodoButton } from './AddButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoFilter />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <AddTodoButton />

    </div>
  );
}

export default App;
