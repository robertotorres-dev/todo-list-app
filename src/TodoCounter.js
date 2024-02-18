function TodoCounter({ total, completed }) {
  return (
    <h1>
      Completed { completed } / { total } TODOS
    </h1>
  )
}

export { TodoCounter };