import React, { useState } from 'react'

const App=()=>{

  const [user,SetA]=useState('Akshat');
  const changeA=()=>{
    console.log("chalo.!!");
    SetA("Kishika")
  }

  return(
    <div>
      <h1>UserName is {user}</h1>
      <button onClick={changeA}>Change User</button>
    </div>
  )
}

export default App