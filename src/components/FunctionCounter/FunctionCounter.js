import React, { useState, useEffect } from 'react'

export const FunctionCounter = (props) => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Componente se monto')
  }, [count]);

  console.log('Voy a renderizar')

  const decrement = () => {
    if (count > 0) {
      setCount(count-1)
    }
    
  }

  const increment = () => {
    setCount(count+1)
  }

  return (
    <>
      <h3>Function Counter</h3>
      <h3>{count}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}
