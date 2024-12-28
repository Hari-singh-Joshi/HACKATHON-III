import React from 'react';
import logo from '../src/assets/logo.png'
import './App.css'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="#"><img src={logo} style={{height:"60px",width:"120px"}}></img>
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-danger">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/plan">Plan Your Visit</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/monument" >Monument Information</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ticket" >Tickets & Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/map" >Map & Directions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/virtual" >Virtual Tour</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about" >About-Us</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={{height:"2.5rem"}}>Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
