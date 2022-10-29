import React, { useState } from 'react'

const Counter = function() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <h3>Func Component</h3>
      <h1>{count}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменшить</button>
    </div>
  )
}

export default Counter
