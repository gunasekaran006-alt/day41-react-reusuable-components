import React from 'react'
import Button from './Button'

function Message() {
const title = "Click to read this messsage"

  return (
    <div>

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat maxime iusto repellat labore, consectetur rerum magni mollitia aliquam accusamus, nesciunt voluptate, sint vel praesentium numquam facere eius veritatis nihil eum.</p>
<Button name= {title} />
    </div>
  )
}

export default Message