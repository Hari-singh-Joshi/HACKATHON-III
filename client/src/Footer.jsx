import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';
import './App.css'; // Import your custom CSS file for styling

function Footer() {
  return (
    <div className='container-fluid'>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="kasla">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <img src={logo} style={{height:"60px",width:"120px"}} alt="Logo" />
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>No Queue
                </h6>
                <p>
                  A ticketless booking system for monuments can provide several features to enhance the visitor experience and streamline the booking process. Here are some key features that such a system could include:
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">About</h6>
                <p><Link to="/" className="text-reset">About Recreation.gov</Link></p>
                <p><Link to="/" className="text-reset">Rules & Reservation Policies</Link></p>
                <p><Link to="/" className="text-reset">Accessibility</Link></p>
                <p><Link to="/" className="text-reset">Media Center</Link></p>
                <p><Link to="/" className="text-reset">Site Map</Link></p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Plan a Trip</h6>
                <p><Link to="/" className="text-reset">Find Trip Inspiration</Link></p>
                <p><Link to="/" className="text-reset">Build a Trip</Link></p>
                <p><Link to="/" className="text-reset">Buy a Pass</Link></p>
                <p><Link to="/" className="text-reset">Enter a Lottery</Link></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Help & Support</h6>
                <p><Link to="/" className="text-reset">Help Center</Link></p>
                <p><Link to="/" className="text-reset">Contact</Link></p>
                <p><Link to="/" className="text-reset">Submit Feedback</Link></p>
                <p><Link to="/" className="text-reset">Responsible Disclosure</Link></p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
        </div>
      </footer>
    </div>
  );
}

export default Footer;
