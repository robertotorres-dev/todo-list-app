import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { AddTodoButton } from './AddButton';
import './App.css';

const defaultTodos = [
  { text: 'Do the Homework on the weekend', completed: true },
  { text: 'Cooking', completed: false },
  { text: 'Clean', completed: true },
  { text: 'Exercice', completed: false },
]

function App() {
  const [filterValue, setFilterValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter(({completed}) => !!completed).length
  const totalTodos = todos.length;
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Todo List</h1>
        <TodoCounter total={totalTodos} completed={completedTodos} />
      </header>

      <main className="app-main">
        <div className="centered-components">
          <TodoFilter
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />

          <TodoList>
            {todos
              .filter(({ text }) => filterValue !== ''
                ? text.toLowerCase().includes(filterValue.toLowerCase())
                : true
              )
              .map(({ text, completed }) => <TodoItem key={text} text={text} completed={completed} />)}
          </TodoList>
          <AddTodoButton />
        </div>
      </main>

    </div>
  );
}

export default App;
