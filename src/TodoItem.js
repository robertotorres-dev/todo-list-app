import { FaCheck, FaTimes } from 'react-icons/fa'; // Import icons from react-icons library


function TodoItem({ text, completed }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      {/* Render checkmark icon if task is completed */}
      {completed ? <FaCheck style={{ color: 'green', marginRight: '10px' }} /> : null}
      <p style={{ flex: 1, margin: 0, textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>

      {/* Render delete icon */}
      <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
    </li>
  )
}

export { TodoItem };