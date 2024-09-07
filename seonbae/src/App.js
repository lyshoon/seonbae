import React, { useState } from 'react';
import './App.css';
import Homepage from './Components/Homepage/homepage.jsx';
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx'

function App() {
  
  return (
    <div>
      <LoginSignup/>
      <Homepage/>
    </div>
  );
}

export default App;
