
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx'

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
