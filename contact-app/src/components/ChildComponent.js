import React from 'react'

function ChildComponent({greetHandler}) {
  return (
    <div>
        <button onClick={() => greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent