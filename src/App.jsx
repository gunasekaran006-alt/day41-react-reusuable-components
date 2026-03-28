import React from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Message from './components/Message'
import Profile from './components/Profile'
import Status from './components/Status'


function App() {

const user1 = {
    username: "Gunasekaran",
    useremail: "gunasekaran006@gmail.com",
    status: false,
    loginstatus: true
}

const user2 = {
    username: "Sekar",
    useremail: "sekar123@gmail.com",
    status: true
}


  return (
    <div>

<Header/>
<Message/>
<Profile userData = {user1} />
<Profile userData = {user2} />
<Status test = {false}/>



<Login user = {user1}/>


    </div>
  )
}

export default App