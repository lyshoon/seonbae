import React, { useState } from 'react';
import './signup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Signup = () => {
 
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [action, setAction] = useState('Sign Up'); 

  const handleSignUp = () => {
    console.log('Signing up:', { Email, Password });
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text"> Welcome </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input 
            type="email" 
            value={Email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input 
            type="password" 
            value={Password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
          />
        </div>
      </div>

      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div 
          className={action === "Login" ? "submit gray" : "submit"} 
          onClick={handleSignUp}
        >
          Sign up
        </div>
      </div>
    </div>
  );
}

export default Signup;
