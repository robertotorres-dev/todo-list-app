function TodoItem({ text, completed }) {
  return (
    <li>
      <span>C</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem };