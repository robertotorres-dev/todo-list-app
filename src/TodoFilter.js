function TodoFilter({
  filterValue, setFilterValue
}) {
  return (
    <input
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '10px',
      }}
      placeholder='Type a new task'
      value={filterValue}
      onChange={(event) => {
        setFilterValue(event.target.value)
      }}
    />
  )
}

export { TodoFilter };