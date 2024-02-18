function TodoCounter({ total, completed }) {
  return (
    <h1>
      You've completed { completed } / { total } TODOS
    </h1>
  )
}

export { TodoCounter };