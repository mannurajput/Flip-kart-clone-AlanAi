import './../StyleSheet/Signup.css';
import React from 'react'
import login from './../image/login.jpeg';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const logiin = useNavigate();
  function Sign() {
    var mobile = document.getElementById("hii").value
    var password = document.getElementById("hi").value
    if (mobile !== null && mobile !== "" && password !== null && password !== "") {
      logiin("/")
      console.log(mobile);
      console.log(password)
    }
    else {
      alert("All field are mandatory")
    }
  }
  return (

    <div className='signn'>
      <div><img src={login} alt="ff"></img></div>
      <div className='phone'><input type="text" placeholder='Enter Your Mobile' id='hii'></input></div>
      <div className='password'><input type="password" placeholder='Enter Your Password' id='hi'></input></div>
      <div className='h'><h>Forgot?</h></div>
      <div className='login' onClick={Sign}><button >Login</button></div>
      <div className='sign'><button>New to Flipkart? Signup</button></div>
      <div className='h2'><p>we longer support login via social accounts .to recover you old account .please contact
        the fkart care</p></div>
    </div>
  )
}

export default Signup;