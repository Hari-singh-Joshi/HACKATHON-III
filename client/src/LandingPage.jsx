import React from 'react';
import Signup from './Signup';
import {Link} from 'react-router-dom'
import Login from './Login';

import namaste from '../src/assets/namaste.jpg'
import backg from '../src/assets/backg.jpg'
import Footer from './Footer';
export default function LandingPage() {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary  fixed-top">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="#"><h1 className='fw-bolder text-warning'>No Queue</h1>
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-danger">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/plan">Plan Your Visit</Link>
        </li>
       
      </ul>
      <form className="d-flex">
<div className='col m-1'>
      <button
        type="button"
        className="btn btn-primary m-1 "
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
       
      >
        Sign-Up
      </button>
     
     
      <button
        type="button"
        className="btn btn-warning "
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
        
      >
      Login
      </button>
      </div>

      </form>
    </div>
  </div>
</nav>
<div className='container-fluid p-0' >
        <div className='row p-0'>
         
<div className="col-6">
      <div className="modal fade" id="signupModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog">
          <div className="modal-content p-0">
            <div className="modal-header text-center ">
              <h3 className="modal-title text-success " >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Register</b></h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <Signup  />
            </div>
            <div className="modal-footer">
              
            </div>
          </div>
        </div>
      </div>
      </div>
      <br/>
      <br/>
<div className='col-6 '>

    
      <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header text-center">
            <h3 className="modal-title text-warning" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Login</b></h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
             <Login/>
            </div>
            <div className="modal-footer">
              
            </div>
          </div>
        </div>
      </div>
      

</div>

</div>

    </div>
    <div className='container'>
      <marque>
<h1 className='fw-bolder' style={{color:"gray",textAlign:"center"}}>Welcome to Our Ticketless Entery System No Queue</h1></marque>
<div className='row'>
  <div className='col-6'>

  <div className="card" >
  <img src={backg} style={{height: "30rem"}} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-warning"> Visitors: <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Location:<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience:<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p>
  </div>
</div>
  </div>
  <div className='col-6'>
   <img src={namaste} style={{position:"relative",left:"35%",top:"20%"}} />
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <p className="font-monospace">Embark on a Journey through Time, Unfettered by Tickets,<br></br> Embracing the Heritage of Our Past, Seamlessly Guided into the Wonders of History and Culture</p>
  </div>
  
</div>
    </div>
    <div><Footer/></div>
    </div> 
  );
}
