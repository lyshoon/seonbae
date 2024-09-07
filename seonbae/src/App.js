
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx';
import Homepage from './Components/Homepage/homepage.jsx';
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import Info from './Components/Info/Info.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />}/>
        <Route path="/home-page" element={<Homepage />}/>
        <Route path="/user-info" element={<info/>}/>
        <Route path="/update-profile" element={<UpdateProfile />} />
    
      </Routes>
    </Router>
  );
}

export default App;
