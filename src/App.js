import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { AddTodoButton } from './AddButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Hacer despensa', completed: true },
  { text: 'Cocinar', completed: false },
  { text: 'Limpiar', completed: true },
  { text: 'Ejercicio', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter total={15} completed={10} />
      <TodoFilter />

      <TodoList>
        {defaultTodos.map(({ text, completed }) => <TodoItem key={text} text={text} completed={completed} />)}
      </TodoList>

      <AddTodoButton />
    </React.Fragment>
  );
}

export default App;
