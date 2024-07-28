import React , { useState , useEffect } from 'react'
import './Dashboard.scss'

import { ToastContainer, toast  , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const [loginAuth , setLoginAuth] = useState();

  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("User Name") === null && localStorage.getItem("Password") === null) {
      setLoginAuth(false);
    }else {
      setLoginAuth(true);
    }
  }, []);

  const confirmBtn = ()=> {
    console.log("is running")

    if(loginAuth === false) {
      toast.warn('You have not Logged in!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      setTimeout(()=>{
        navigate('/')
      }, 6000)

    }else {
      toast.success('You have Logged in!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      setTimeout(()=>{
        navigate('/login')
      }, 6000)

    }
  }

  return (
    <div className='dash-con'>
      <ToastContainer/>
      <div className='dash'>
        <h1> Welcome </h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta illum quam architecto obcaecati voluptatem omnis animi. Tenetur laboriosam tempore hic est similique aliquid distinctio magni, unde quam numquam, odit nisi. </p>
        <button onClick={confirmBtn}> Continue </button>
      </div>
    </div>
  )
}

export default Dashboard