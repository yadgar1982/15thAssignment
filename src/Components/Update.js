import React,{useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const[id,setId]=useState(0);
    const[name,setName]=useState("");
    const[position,setPosition]=useState("");
    const[email,setEmail]=useState("");
    const navigate =useNavigate();

    useEffect(()=>{
       setId( localStorage.getItem("id"));
       setName( localStorage.getItem("name"));
       setPosition( localStorage.getItem("position"));
       setEmail( localStorage.getItem("email"));
    },[]);

    const handleUpdate= (e)=>{
        e.preventDefault();
        axios.put(`https://6552be335449cfda0f2dc8c4.mockapi.io/users/${id}`,
            {   
                name:name, 
                position: position, 
                email: email,
             }
        
        ).then (()=>{
            navigate("/read");
            
        });
    };   
    
  return (
    <>
    <h2>Update Employee</h2>
        <div className = "card my-5">
        <form  id="frm" className="container  my-3">
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" id="name" className="form-control" value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>
            <div className="mb-3">
            <label className="form-label">Position</label>
            <input type="text"  id="position" className="form-control" value={position}
            onChange={(e)=>setPosition(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" id="email" className="form-control" value={email}
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <div  className="form-text"></div>
            </div>

        
            <button type="Update" className="btn btn-success form-control" onClick={handleUpdate}> Update Employee</button>
            
        </form>
        </div>
 
    </>
  )
};

export default Update;