import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import Footer from './Footer';
export default function Monument() {
  // Sample data for demonstration


const Objects = [
  {
    title: "Taj Mahal",
    img: "https://source.unsplash.com/1400x400/?tajmahal",
    description: "Explore algorithms, data structures, and software development for creating innovative solutions in the digital world.",
    price:"₹600"
  },
  {
    title: "Gurkha Fort",
    img: "https://source.unsplash.com/1400x400/?Gurkha Fort",
    description: "This page offers up-to-date information of Gurkha Fort in the city of Dehradun, India. On this page, you can find the most important logistical information about Gurkha Fort like its address, phone number and location.",
    price:"₹400"
  },
  {
    title: "Agra Fort",
    img: "https://source.unsplash.com/1400x400/? Agra Fort",
    description: "Agra Fort, also known as the Red Fort of Agra, is a historical fortress located in Agra, Uttar Pradesh, India. It is situated about 2.5 kilometers northwest of the Taj Mahal, another iconic landmark in the city.",
    price:"₹600"
  },
  {
    title: "Ram Bagh",
    img: "https://source.unsplash.com/1400x400/?Ram Bagh",
    description: "Ram Bagh, also known as the Aram Bagh or the Garden of Relaxation, is one of the oldest Mughal gardens in India. It is located in Agra, Uttar Pradesh, and was built by the Mughal Emperor Babur in 1528 AD.",
    price:"₹1300"
  },
  {
    title: "Buddhist Monuments At Guntapalli",
    img: "https://source.unsplash.com/1400x400/?Buddhist Monuments,Guntapalli",
    description: "Chandragiri was under the rule Vijayanagara empire for about three centuries and came under the control of the Vijayanagara rulers in 1367.",
    price:"₹600"
  },
  {
    title: "Ajanta Caves",
    img: "https://source.unsplash.com/1400x400/?Ajanta Caves",
    description: "The Ajanta Caves are 29 rock-cut Buddhist cave monuments dating from the second century BCE to about 480 CE in the Aurangabad district of Maharashtra state in India.",
    price:"₹300"
  },
  {
    title: "Aurangabad Caves",
    img: "https://source.unsplash.com/1400x400/?Aurangabad Caves",
    description: "The Aurangabad caves are twelve rock-cut Buddhist shrines located on a hill running roughly east to west, close to the city of Aurangabad, Maharashtra.",
    price:"₹1100"
  },
  {
    title: "Daulatabad Fort",
    img: "https://source.unsplash.com/1400x400/?Daulatabad Fort",
    description: "Around the 6th century CE, Devagiri emerged as an important uplands town near present-day Aurangabad, along caravan routes going towards western and southern India.",
    price:"₹600"
  },
  {
    title: "Ellora Caves",
    img: "https://source.unsplash.com/1400x400/?Ellora Caves",
    description: "Ellora Caves is an impressive archaeological site located near the city of Aurangabad in Maharashtra, India. It is renowned for its spectacular rock-cut temples and caves.",
    price:"₹600"
  },
  {
    title: "Archaeological Museum, Halebidu",
    img: "https://source.unsplash.com/1400x400/?Archaeological Museum, Halebidu",
    description: "The Archaeological Museum in Halebidu is a significant cultural institution located in Halebidu, a town in the Hassan district of Karnataka, India.",
    price:"₹600"
  },
  {
    title: "Palace Of Tipu Sultan, Bengaluru",
    img: "https://source.unsplash.com/1400x400/?Palace Of Tipu Sultan, Bengaluru",
    description: "The Palace of Tipu Sultan, also known as the Tipu Sultan Summer Palace, is a historic landmark located in Bengaluru (Bangalore), Karnataka, India.",
    price:"₹400"
  },
  {
    title: "Gwalior Fort",
    img: "https://source.unsplash.com/1400x400/? Gwalior Fort",
    description: "Gwalior Fort is a majestic hill fort located in the city of Gwalior in the state of Madhya Pradesh, India. It is one of the largest and most prominent forts in India.",
    price:"₹1600"
  },
  {
    title: "Gingee Fort",
    img: "https://source.unsplash.com/1400x400/?Gingee Fort",
    description: "Gingee Fort, also known as Senji Fort, is a majestic hilltop fortress located in the town of Gingee (Senji) in the Villupuram district of Tamil Nadu, India.",
    price:"₹500"
  },
  {
    title: "Jantar Mantar",
    img: "https://source.unsplash.com/1400x400/?Jantar Mantar",
    description: "Jantar Mantar is a collection of architectural astronomical instruments built by Maharaja Jai Singh II of Jaipur, Rajasthan, India.",
    price:"₹600"
  },
  {
    title: "Purana Qila",
    img: "https://source.unsplash.com/1400x400/?Purana Qila",
    description: "Purana Qila, also known as the Old Fort, is a historic fortress located in Delhi, India. It holds significant historical and architectural importance.",
    price:"₹700"
  },
  {
    title: "Qutub Minar",
    img: "https://source.unsplash.com/1400x400/?Qutub Minar",
    description: "Qutub Minar is an iconic landmark located in Delhi, India. It is the tallest brick minaret in the world and is recognized as a UNESCO World Heritage Site.",
    price:"₹600"
  },
  {
    title: "Red Fort",
    img: "https://source.unsplash.com/1400x400/?Red Fort",
    description: "The Red Fort, also known as Lal Qila, is an iconic historical monument located in the heart of Old Delhi, India.",
    price:"₹600"
  },
  {
    title: " Tughlaqabad Fort",
    img: "https://source.unsplash.com/1400x400/? Tughlaqabad Fort",
    description: "Tughlaqabad Fort is a medieval fortress located in the southern part of Delhi, India. It was constructed by Ghiyas-ud-din Tughlaq, the founder of the Tughlaq dynasty.",
    price:"₹700"
  },
  {
    title: "Gol-Gumbaz",
    img: "https://source.unsplash.com/1400x400/?Gol-Gumbaz, Vijayapura",
    description: "Gol Gumbaz is a grand mausoleum located in Vijayapura (formerly known as Bijapur) in the Indian state of Karnataka.",
    price:"₹400"
  },
  {
    title: "Upper Fort Aguada",
    img: "https://source.unsplash.com/1400x400/?Upper Fort Aguada",
    description: "The Aguada Fort is a well-known Portuguese fortification located in the state of Goa, India. It is situated in the village of Sinquerim, near the popular tourist destination of Candolim.",
    price:"₹700"
  },
  {
    title: "Golghar",
    img: "https://source.unsplash.com/1400x400/?Golghar,Bihar",
    description: "The Golghar is a historic granary located in the city of Patna, the capital of the Indian state of Bihar. It is one of the most iconic landmarks.",
    price:"₹400"
  },
  {
    title: "Bihar Museum",
    img: "https://source.unsplash.com/1400x400/?Bihar Museum",
    description: "The Bihar Museum is a state-of-the-art museum located in the city of Patna, the capital of the Indian state of Bihar. It is one of the largest museums.",
    price:"₹500"
  },
  {
    title: "Golden Temple",
    img: "https://source.unsplash.com/1400x400/?GoldenTemple, Punjab",
    description: "The Golden Temple, also known as Sri Harmandir Sahib, is a revered Sikh gurdwara located in the city of Amritsar, in the state of Punjab, India.",
    price:"₹900"
  },
  {
    title: "Hawa Mahal",
    img: "https://source.unsplash.com/1400x400/?Hawa Mahal",
    description: "Hawa Mahal, also known as the Palace of Winds, is a prominent historical monument located in the heart of Jaipur, the capital city of Rajasthan, India.",
    price:"₹800"
  }
];
const [title, setTitle] = useState('');

function Monu(tite) {
  setTitle(tite);
  document.cookie = `myKey=${title}; path=/book`;

    // Redirect user to /book
    navigate("/book");
}

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const rows = chunkArray(Objects, 3);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <br />
      <br />
      <div className='container'>
        {rows.map((row, rowIndex) => (
          <div className='row mt-5' key={rowIndex}>
            {row.map((Subjects, colIndex) => (
              <div className='col' key={colIndex}>
                <div className="card" style={{ height: "30rem", width: "23rem" }}>
                 <img src={Subjects.img} style={{ height: "320px", width: "350px" }} className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 class="card-title">{Subjects.title}</h5>
    <p class="card-text">{Subjects.description}</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Link to="/book"><button 
                        onClick={() => Monu(Subjects.title)}
                        className="btn btn-primary"
                      >
                        Book
                      </button></Link>
  <h5 className='text-right'>{Subjects.price}</h5>
</div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
   <div className='container-fluid'>
    <Footer/>
   </div>
    </div>
  );
}
