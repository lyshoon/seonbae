import React, { useState } from 'react';
import axios from "axios";
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [action, setAction] = useState("Login");  

  const handleSignUp = async(e) => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/SignUp", {
        Email,
        Password,
      })

      sessionStorage.setItem("email", response.data.Email);
      sessionStorage.setItem("password", response.data.Password);
      sessionStorage.setItem("userId", response.data._id);

      //Write Code here
    }
    catch(error){
      console.log(error);
      }
    }

    const handleLogIn = async(e) => {
      try {
        const response = await axios.post("http://localhost:8080/api/users/LogIn", {
          Email,
          Password,
        })
  
        sessionStorage.setItem("email", response.data.user.Email);
        sessionStorage.setItem("password", response.data.user.Password);
        sessionStorage.setItem("userId", response.data.user._id);

        //Write Code here
        }
      catch(error){
        console.log(error);
        }
      }

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)}placeholder="Password"/>
        </div>
      </div>

      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}

      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{handleSignUp()}}>Sign up</div>
        <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{handleLogIn()}}>Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;
