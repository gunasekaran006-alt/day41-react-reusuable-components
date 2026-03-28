import React from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Message from './components/Message'


function App() {

const user1 = {
    username: "Gunasekaran",
    useremail: "gunasekaran006@gmail.com",
    status: false,
    loginstatus: true

}


  return (
    <div>

<Header/>
<Message/>


<Login user = {user1}/>


    </div>
  )
}

export default App