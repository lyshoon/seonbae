import React from 'react';
import './homepage.css'; 

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Top Bar */}
      <div className="top-bar">
        <h1 className="logo">SeonBae</h1>
        <div className="user-controls">
          <button className="logout">Log Out</button>
          <div className="profile-icon">👤</div> 
        </div>
      </div>

      <div className="search-container">
        <label htmlFor="university-search">Enter Your University :</label>
        <input type="text" id="university-search" placeholder="search"/>
      </div>

      <div className="recommendations">
        <h2>Here are some people from your University</h2>
        <div className="profile-card">
          <p><strong>Su Lei Lei Naing (23)</strong> MYANMAR</p>
          <p>Software Engineering Department</p>
          <p>Kyung Hee University</p>
        </div>
        {/* Add more profile cards here as needed */}
      </div>
    </div>
  );
};

export default Homepage;
