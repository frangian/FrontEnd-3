import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleSumar = () => {
    setCount(count + 1)
  }
  
  const handleRestar = () => {
    setCount(count > 0 ? count - 1: count)
  }

  console.log(count);
  return (
    <div>
      <h1>La cuenta que se lleva {count}</h1>
      <button onClick={handleSumar}>sumar</button>
      <button onClick={handleRestar}>restar</button>
    </div>
  )
}

export default App