import React from 'react'
import './Panel.scss'

function Panel() {

    const localInfo1 = localStorage.getItem('User Name');
    const localInfo2 = localStorage.getItem('Password');

  return (
    <div className='panel-con'>
        <h1> Welcome </h1>
        <h2> {localInfo1} </h2>
        <h2> {localInfo2} </h2>
    </div>
  )
}

export default Panel