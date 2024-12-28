import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './App.css'
export default function Login() {
const[email,setEmail]=useState()
const[password,setPassword]=useState()
const navigate=useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
        if(result.data=="Success"){
            navigate("/home")
        }
  
    })
    .catch(error=>console.log(error))
    }

  return (
    <div>
      

      <div class="card">
       
        <div class="card-body">
          <form onSubmit={handleSubmit}> 
            <div class="form-group">
              <label for="username">Email:</label>
              <input type="text" class="form-control" id="username" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter username" required/>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password"  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required/>
            </div>
            <button type="submit" data-bs-dismiss="modal" class="btn btn-warning btn-block mt-3">Login</button>
          </form>
        </div>
        <div class="card-footer text-center">
          <p class="mb-0">Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  

  )
}
