import React from 'react'

function Button(props) {
  return (
    <div>

<button onClick = {props.logic} style={{padding: "15px", backgroundColor: "purple"}}>{props.name}</button>

    </div>
  )
}

export default Button