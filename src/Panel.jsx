import React from 'react'
import './Panel.scss'

import { ToastContainer, toast  , Bounce} from 'react-toastify';

import { useNavigate } from 'react-router-dom';

function Panel() {

    const localInfo1 = localStorage.getItem('User Name');
    const localInfo2 = localStorage.getItem('Password');

    const navigate = useNavigate()

    function logOut() {
      localStorage.removeItem("User Name")
      localStorage.removeItem("Password")
      
      toast.warn('Your Account is deleted', {
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

      setTimeout(()=> {
        navigate('/')
      }, 6000)
      
    }

   
    if( localInfo1 !== null && localInfo2 !== null ){
      return(
        <div className='panel-con'>
          <ToastContainer/>
          <div className="panel">
            <div>
              <h1> Welcome </h1>
              <h2> Name: <ins>{localInfo1}</ins> </h2>
              <h2> Password: <ins>{localInfo2}</ins> </h2>
            </div>
            <button onClick={logOut}> Delete acc </button>
          </div>
        </div>
      )
    }else{
      return(
        <h1> Please Login </h1>
      )
    }

}

export default Panel