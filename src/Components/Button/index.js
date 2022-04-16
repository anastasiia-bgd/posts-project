import React from 'react'
export const click = () => {
      alert('Есть контакт!')
  }
export const Button = () => {
  return (
    <div>
        <button onClick={click}>Click</button>
    </div>
  )
}
