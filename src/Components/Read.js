import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Read = () => {
    const[data,setData]=useState([]);
    // in this function we will get data from api. 
    function getData(){
        axios
        .get("https://6552be335449cfda0f2dc8c4.mockapi.io/users")
        .then ((res)=>{
            console.log(res.data);
            setData(res.data);
        

        
        })
        .catch(err => {
            console.log(err);
        });
        
    }
    // through this function we will delete our data from the api by using id. 
    function handleDelete(id){
        axios.delete(`https://6552be335449cfda0f2dc8c4.mockapi.io/users/${id}`)
        .then(()=>{
            getData();
        });
    }

    const setToLocalStorage =(id, name, position, email)=>{
        localStorage.setItem("id" , id);
        localStorage.setItem("name" , name);
        localStorage.setItem("position" , position);
        localStorage.setItem("email" , email);

    };

    useEffect(()=>{
        getData();
    },[]);

    // getData();


  return (
    <>
    <div className ="d-flex justify-content-between m-2">
    <h2>List of Employees</h2>
    <hr></hr>
    <Link to="/">
    <button className="btn btn-primary">Back to Data Entry</button>
    </Link>

    </div>
    
        
        <table className="table my-2">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                
                </tr>
            </thead>
     {/* here we will map the data into the table */}
            {data.map((eachData)=>{
                    return(
                        <>
                            <tbody>
                                <tr>
                                <th scope="row">{eachData.id}</th>
                                <td>{eachData.name}</td>
                                <td>{eachData.position}</td>
                                <td>{eachData.email}</td>
                                
                                <td>
                                    <Link to ="/update">
                                        <button className="btn btn-info"
                                        onClick={()=> setToLocalStorage(
                                            eachData.id,
                                            eachData.name,
                                            eachData.position,
                                            eachData.email
                                        )}>
                                        Edit</button>
                                    </Link>
                                </td>
                                <td><button className="btn btn-danger justyfy-content-between" 
                                onClick={()=> handleDelete(eachData.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </>
                    )
                })
            }
        </table>
    </>
  )
}

export default Read
