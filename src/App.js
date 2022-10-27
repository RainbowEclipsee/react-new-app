import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [like, setLike] = useState(0)
  const [value, setValue] = useState('Введите текст')

  function increment() {
    setLike(like + 1)
  }
  function decrement() {
    setLike(like - 1)
  }

  return (
    <div className="App">
      <h1>{like}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      {/* Reusable Сomponents */}
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
