import React from 'react'

function Login(props) {
  return (

    <div>

      {props.user.loginstatus ? (

        <div>
          <h1>{props.user.username}</h1>
          <p>{props.user.useremail}</p>
        </div>
      ) : (
        <h1>please login</h1>
      )

      }

    </div>

  )
}

export default Login