import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { AddTodoButton } from './AddButton';
import './App.css';

const defaultTodos = [
  { text: 'Homeworkd', completed: true },
  { text: 'Cooking', completed: false },
  { text: 'Celan', completed: true },
  { text: 'Exercice', completed: false },
]

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Todo List</h1>
        <TodoCounter total={15} completed={10} />
      </header>

      <main className="app-main">
        <div>


          <TodoFilter />

          <TodoList>
            {defaultTodos.map(({ text, completed }) => <TodoItem key={text} text={text} completed={completed} />)}
          </TodoList>
          <AddTodoButton />
        </div>
      </main>

    </div>
  );
}

export default App;
