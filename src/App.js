import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prevCount => prevCount + 1)
  const decrement = () => setCount(prevCount => prevCount - 1)
  const reset = () => setCount(0)
  const x2 = () => setCount(prev => prev * 2)
  const divideBy3 = () => setCount(prev => prev % 3 === 0 ? prev / 3 : prev)

  return (
    <>
      <div>Count { count }</div>
      <button onClick={ increment }>
        Count Up
      </button>
      <button onClick={ decrement }>
        Count Down
      </button>
      <button onClick={ reset }>
        Reset
      </button>
      <button onClick={ x2 }>
        x2
      </button>
      <button onClick={ divideBy3 }>
        ３の倍数のときだけ３で割る
      </button>
    </>

  )
}

export default App
