import React, { useState } from 'react';
import './homepage.css'; 

const Homepage = () => {

  const [users, setUsers] = useState([
    {
      name: 'Byun Baekhyun',
      age: 21,
      country: 'Korea',
      department: 'Computer Science and Engineering',
      university: 'Korea University',
    },
    {
      name: 'Shoon Lei May',
      age: 21,
      country: 'Myanmar',
      department: 'Computer Science and Engineering',
      university: 'Korea University',
    },
    
  ]);

  return (
    <div className="homepage-container">
      
      <div className="top-bar">
        <h1 className="logo">SeonBae</h1>
        <div className="user-controls">
          <button className="logout">Log Out</button>
          <div className="profile-icon">👤</div> 
        </div>
      </div>

      <div className="search-container">
        <label htmlFor="university-search">Enter Your University or Country or Major :</label>
        <input type="text" id="university-search" placeholder="search" />
      </div>

      <div className="recommendations">
        <h2>Here are some people from your University</h2>
        
        
        {users.map((user, index) => (
          <div key={index} className="profile-card">
            <p><strong>{user.name} ({user.age})</strong> {user.country}</p>
            <p>{user.department}</p>
            <p>{user.university}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
