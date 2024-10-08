
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx';
import Homepage from './Components/Homepage/homepage.jsx';
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import Info from './Components/Info/Info.jsx'; 
import InfoConfirmation from './Components/InfoConfirmation/InfoConfirmation.jsx';
import Edit from './Components/Edit/edit.jsx';
import ProfileEdit from './Components/ProfileEdit/ProfileEdit.jsx'
import Review from './Components/Review/Review.jsx';
import Signup from './Components/Signup/signup.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />}/>
        <Route path="/" element={<Homepage />}/>
        <Route path="/user-info" element={<Info/>}/>
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/user-edit" element={<Edit />} />
        <Route path="/info-confirmation" element={<InfoConfirmation />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/write-review" element={<Review/>} />
        <Route path="/user-signup" element={<Signup />} />
    
      </Routes>
    </Router>
  );
}

export default App;
