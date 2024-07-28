import React , { useState , useEffect , useRef} from 'react'

import { ToastContainer, toast  , Bounce} from 'react-toastify';

import { useNavigate } from 'react-router-dom';

function Login() {

  const [userName , setUserName] = useState("");
  const [passWord , setPassword] = useState("");

  const navigate = useNavigate();

  const data1 = useRef()
  const data2 = useRef()

  const local1 = localStorage.getItem("User Name", userName);
  const local2 = localStorage.getItem("Password", passWord);

  function addUser(confirm) {
      confirm.preventDefault();

      if (userName !== "" && passWord !== "" && local1 == data1.current.value && local2 == data2.current.value ) {
          fetch('https://668fe602c0a7969efd9a0985.mockapi.io/users/data' , {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  firstname: userName,
                  password: passWord
              })
          })
          .then((res) => res.json())
          .then((output) => console.log(output))

           


          toast.success(<span>Welcome {data1.current.value} &#128512;</span>, {
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
            navigate('/panel')
          }, 6000)

      } else{
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
      }

    }
    
  return (
   <div className='main-con'>
      <img src="src/assets/bg.png" alt="image" />
      <ToastContainer/>
      <div className="action-con">
          <div className="title">
            <h1> Login </h1>
            <p>Please fill the forms before entering to site</p>
          </div>
          <div className="form-con">
            <input type="text" ref={data1} id='userName' placeholder='User Name' onInput={(input) => {setUserName(input.target.value)}}/>
            <input type="text" ref={data2} id='lastName' placeholder='Password' onInput={(input) => {setPassword(input.target.value)}}/>
            <button onClick={addUser}> Confirm </button>
          </div>
      </div>
    </div>
  )
}

export default Login