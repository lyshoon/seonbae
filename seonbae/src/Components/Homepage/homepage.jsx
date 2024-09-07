import React, { useState, useEffect } from 'react';
import './homepage.css'; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'; 

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [spareUsers, setSpareUsers] = useState([]);
  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsersAll = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users/GetAllUsers');
        const filteredData = response.data.filter(obj => obj.hasOwnProperty('Name'));
        setUsers(filteredData);
        setSpareUsers(filteredData);
      } catch (error) {
        console.error("Failed to fetch Users", error);
      }
    };
    getUsersAll();
  }, []);

  const handleClearSearch = () => {
    setFilterText('');
    setUsers(spareUsers);
  };

  const filtering = () => {
    const filteredData = spareUsers.filter(obj =>
      obj.Major?.toLowerCase().includes(filterText.toLowerCase()) ||
      obj.University?.toLowerCase().includes(filterText.toLowerCase()) ||
      obj.Nationality?.toLowerCase().includes(filterText.toLowerCase())
    );
    setUsers(filteredData);
  };

  const handleSelectUser = (id) => {
    sessionStorage.setItem("selectedUserId", id);
    navigate('/user-info');
  };

  return (
    <div className="homepage-container">
      <div className="top-bar">
        <h1 className="logo">SeonBae</h1>
        <div className="user-controls">
          <button className="logout" onClick = {() => navigate('/')}>Log Out</button>
          <div className="profile-icon" onClick = {() => navigate('/user-edit')}>👤</div> 
        </div>
      </div>

      <div className="search-container">
         <label htmlFor="university-search">Enter Your University or Country or Major :</label>

         <div className="search-input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" onClick = {() => filtering()}/>
          <input
            type="text"
            id="university-search"
            placeholder="Search"
            onChange={(e) => setFilterText(e.target.value)}
          />
          
          {filterText && (
            <FontAwesomeIcon
              icon={faTimes}
              className="clear-icon"
              onClick={ () => handleClearSearch()}
            />)}
          
        </div>
      </div>

      <div className="recommendations">
        <h2>Here are some people from your University</h2>
        {users.map((user, index) => (
          <div key={index} className="profile-card" onClick={() => handleSelectUser(user._id)}>
            <p><strong>{user.Name} ({user.Age})</strong> {user.Nationality}</p>
            <p>{user.Major}</p>
            <p>{user.University}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
