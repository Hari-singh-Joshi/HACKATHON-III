import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png'; // Assuming your logo image file is in the same directory
import './App.css';
import Footer from './Footer';

const Virtual = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vlogs, setVlogs] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDAlMusiiXwPXraQa4Vsxt2C1wZnsjhFKg&q=${searchQuery}&part=snippet&type=video`
      );
      setVlogs(response.data.items);
    } catch (error) {
      console.error('Error fetching vlogs:', error);
    }
  };

  return (
    <div>
      <div className='container mt-5'>
  <h3 style={{textAlign:"center",color:"green"}}>Visit Your Tour Virtually</h3>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="Logo" style={{ height: "60px", width: "120px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-danger">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plan">Plan Your Visit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/monument">Monument Information</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ticket">Tickets & Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">Map & Directions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/virtual">Virtual Tour</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About-Us</Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search for vlogs..." aria-label="Search" value={searchQuery} onChange={handleChange} />
              <button className="btn btn-outline-success" type="submit" style={{ height: "2.5rem" }}>Search</button>
            </form>
          </div>
        </div>
        
      </nav>

      <div>
        {vlogs.map((vlog) => (
          <div key={vlog.id.videoId}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${vlog.id.videoId}`}
              title={vlog.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{vlog.snippet.title}</h3>
            
          </div>
        ))}
      </div>
      <div className='container mt-5'>
        <Footer/>
        </div>
    </div>
  );
};

export default Virtual;
