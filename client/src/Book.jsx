import React, { useState, useRef } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
export default function Book() {
  const formRef = useRef();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mon, setMon] = useState('');
  const [city, setCity] = useState('');
  const [adhar, setAdhar] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [qrData, setQRData] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send form data to server
      const response = await axios.post('http://localhost:3001/book', {
        name,
        email,
        phone,
        adhar,
        mon,
        city,
        date,
        number
      });
  
      console.log(response); // Log server response
  
      // If server request is successful, proceed to generate QR code
      const qrData = `Name: ${name}\nCity: ${city}\nMonument Name: ${mon}\nEmail: ${email}\nAdhar Number: ${adhar}\nWhatsapp Number: ${phone}\nDate: ${date}\nNumber of Tickets: ${number}`;
      setQRData(qrData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const handleDownload = () => {
    const canvas = document.getElementById('qrCanvas');
    const imageURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'ticket.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_romy9gr', 'template_2bibr4m', formRef.current, 'uu3E7Xls74b-Rm7Ms')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );

    formRef.current.reset();
  };
  const handleAdharChange = (e) => {
    const formattedAdhar = e.target.value
      .replace(/\D/g, '') // Remove non-digit characters
      .slice(0, 12) // Limit to 12 characters
      .replace(/(\d{4})(\d{0,4})(\d{0,4})/, '$1-$2-$3'); // Insert hyphens

    setAdhar(formattedAdhar);
  };

  return (
    <div className='container'>
      <div><Navbar/></div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Book Your Trip</h5>
          <h6 className="card-subtitle mb-2 text-muted">You are welcome</h6>
          <p className="card-text">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="validationDefault01" className="form-label">Full name</label>
                <input type="text" className="form-control" id="validationDefault01" placeholder="First name" onChange={(e) => setName(e.target.value)} name="to_name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="validationDefault02" className="form-label">City</label>
                <input type="text" className="form-control" id="validationDefault02" onChange={(e) => setCity(e.target.value)} placeholder="City name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="validationDefault03" className="form-label">Monument Name:</label>
                <input type="text" className="form-control" id="validationDefault03" value="Taj Mahal" onChange={(e) => setMon(e.target.value)} placeholder="Monument Name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="validationDefaultUsername" className="form-label">Contact Email</label>
                <input type="text" className="form-control" name="reply_to" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"  onChange={(e) => setEmail(e.target.value)} required/>
                
              </div>
              <div className="form-group">
                <label htmlFor="validationDefault04" className="form-label">Adhar Number</label>
                <input  type="text"
      className="form-control"
      name="message"
      maxLength={14} // Increased to accommodate hyphens
      id="validationDefault04"
      value={adhar}
      onChange={handleAdharChange}
      placeholder="xxxx-xxxx-xxxx"
      required/>
              </div>
              <div className="form-group">
                <label htmlFor="validationDefault05" className="form-label">Whatsapp Number</label>
                <input type="number" className="form-control" maxLength={10} id="validationDefault05" placeholder="Whatsapp Number" onChange={(e) => setPhone(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" className="form-control"  id="date" placeholder="Enter date" onChange={(e) => setDate(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="ticket" className="form-label">Number of Tickets:</label>
                <input type="number" className="form-control" id="ticket" maxLength={10} placeholder="Enter number of tickets" onChange={(e) => setNumber(e.target.value)} required/>
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-3">Book</button>
            </form>
          </p>
          {qrData && (
            <div>
              <QRCode value={qrData} id="qrCanvas" />
              <button onClick={handleDownload} className="btn btn-success btn-block mt-3">Download Ticket</button>
              <Link to="/monument"> <button onClick={sendEmail} className="btn btn-info btn-block mt-3">Send Email</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
