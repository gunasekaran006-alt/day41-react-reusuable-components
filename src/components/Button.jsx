import React from 'react'

function Button(props) {
  return (
    <div>

<button style={{padding: "15px", backgroundColor: "purple"}}>{props.name}</button>

    </div>
  )
}

export default Button