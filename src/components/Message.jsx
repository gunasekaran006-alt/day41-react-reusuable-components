import React from 'react'
import Button from './Button'


function Message() {
const title = "Click to read this message"

function test (){
  console.log("Test");
}

  return (

<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, et pariatur sapiente rem tempora dicta illo necessitatibus! Consequatur accusantium nulla dolorem, accusamus voluptatum iure ipsam inventore magni quidem eum et.</p>
<Button name = {title} logic ={test}/>
</div>

  )
}

export default Message