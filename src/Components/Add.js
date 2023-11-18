import React, { useState } from 'react'
import "../App.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Add = () => {

  const [name, setName]= useState("")
  const [position, setPosition]= useState("")
  const [email, setEmail]= useState("");
  const history = useNavigate();

  const header={ "Access-Control-Allow-Origin": "*"};

  const handleAdd=(e)=>{
    e.preventDefault();
    // console.log("clicked")
    //here we post the data to mock API through post method. 
    axios.post(
      'https://6552be335449cfda0f2dc8c4.mockapi.io/users',
      {name:name, 
        position: position, 
        email: email,
        // header,
        
      })

      .then(()=>{
        history("/read");
      });
    
  };

  return (
    <div className="container">
          <div className="d-flex justify-content-between m-2">
          <h2>Add Employee</h2>
          <Link to="/read">
          <button className="btn btn-success">Show Data</button>
          
          </Link>
          
          </div>
          
          <div className = "card my-5">
            <form  id="frm" className="container ">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" id="name" className="form-control"
                onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Position</label>
                <input type="text"  id="position" className="form-control"
                onChange={(e)=>setPosition(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" id="email" className="form-control" 
                aria-describedby="emailHelp"
                onChange={(e)=>setEmail(e.target.value)}/>
                <div  className="form-text"></div>
              </div>

            
              <button type="submit" className="btn btn-primary" onClick={handleAdd}>Add Employee</button>
            
              <br /><br />
              <a class="fragment" href="google.com">
                  <div>
                      <span id='close' onclick='this.parentNode.parentNode.remove(); return false;'>x</span>
                      
                    
                  
                  </div>
              </a>
            </form>
          </div>
    </div>
    
  )
}

export default Add;