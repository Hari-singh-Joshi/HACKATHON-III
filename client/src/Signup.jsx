import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './App.css'

export default function Signup(props) {
const[name,setName]=useState()
const[zip,setZip]=useState()
const[city,setCity]=useState()
const[last,setLast]=useState()
const[email,setEmail]=useState()
const[password,setPassword]=useState()
const navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()
axios.post('http://localhost:3001/register',{name,email,password,last,city,zip})
.then(result=>{console.log(result)
navigate("/")
})
.catch(error=>console.log(error))
}
  return (


      <div className="card ">
        <div className="card-header  text-dark ">
          
       
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" placeholder="First name" onChange={(e)=>setName(e.target.value)} required/>
            </div>
            <div className="form-group">
            <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" onChange={(e)=>setLast(e.target.value)} placeholder="Last name" required/>
            </div>
            <div className="form-group">
            <label for="validationDefaultUsername" className="form-label">Email</label>
    
      
      <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" onChange={(e)=>setEmail(e.target.value)} required/>
  
            </div>
            <div className="form-group">
            <label for="validationDefault03" className="form-label">Phone</label>
    <input type="text" className="form-control" id="validationDefault03" onChange={(e)=>setCity(e.target.value)} required/>
            </div>
            
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
         
            <button type="submit"  data-bs-dismiss="modal" className="btn btn-success btn-block mt-3" >Submit</button>
          </form>
        </div>
        <div className="card-footer text-center">
          <p className="mb-0">Already have an account? <Link to="/login">Login </Link></p>
        </div>
      </div>
    </div>


    
 
  )
}
      