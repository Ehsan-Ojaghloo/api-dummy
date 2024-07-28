import React , { useContext } from 'react'
import './Page.scss'

import { Link } from 'react-router-dom'


import { CounterContext } from './context/CounterContext'

function Page() {

    const {counter , setCounter} = useContext(CounterContext);

  return (
    <div className='page-con'>
        <button onClick={()=> setCounter(prevState => prevState + 1)}>+</button>
        <span>{counter}</span>
        <Link to='/'> Page </Link>
    </div>
  )
}

export default Page