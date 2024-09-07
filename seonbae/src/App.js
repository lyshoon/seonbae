
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx':
import Homepage from './Components/Homepage/homepage.jsx';
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import Info from './Components/Info/Info.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
