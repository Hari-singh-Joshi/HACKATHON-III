import React from 'react'
import Navbar from './Navbar'
import first from '../src/assets/first.jpg'
import second from '../src/assets/second.jpg'
import third from '../src/assets/third.jpg'
import Footer from './Footer'
export default function Home() {
    
  return (
    <div className='container-fluid '>
      <div><Navbar/></div>
      <div className='container-fluid mt-5'>
      <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={first} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Taj Mahal</h3>
        <p className="card-text text-warning"> Visitors: <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Location:<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience:<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p>
 
      </div>
    </div>
    <div className="carousel-item">
      <img src={second} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3 className='text-warning'>Jal Mahal</h3>
        <p className="card-text text-warning"> Visitors: <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Location:<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience:<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p>
 
      </div>
    </div>
    <div className="carousel-item">
      <img src={third} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Gwalior Fort</h3>
        <p className="card-text text-warning"> Visitors: <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Location:<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience:<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p>
 
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>

<div>
<Footer/>
</div>
    </div>
  )
}
