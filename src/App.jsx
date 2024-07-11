import React , {useState , useRef} from 'react'
import './App.scss'

function App() {

  const data1 = useRef()
  const data2 = useRef()

  function addUser() {
    fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    firstName: `${data1.current.value}`,
    lastName: `${data2.current.value}`
    })
  })
  .then(res => res.json())
  .then(console.log);
  }

  return (
    <div className='main-con'>
      <img src="src/assets/bg.png" alt="image" />
      <div className="action-con">
          <div className="title">
            <h1> Welcome </h1>
            <p>Please fill the forms before entering to site</p>
          </div>
          <div className="form-con">
            <input type="text" ref={data1} id='userName' placeholder='User Name'/>
            <input type="text" ref={data2} id='phoneNum' placeholder='Phone Number'/>
            <button onClick={addUser}> Confirm </button>
          </div>
      </div>
    </div>
  )
}

export default App