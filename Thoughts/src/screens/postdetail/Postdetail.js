import React, { useEffect } from 'react'
import './Postdetail.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
export default function Postdetail() {
 
  const location=useLocation();
  const {state:post}=location;//to get state from post component
  const navigate=useNavigate();

  const handleEdit=()=>{//When a buuton click pass the post to postEdit screen , USE NAVIGATE
    navigate(`/edit/${post._id}`,{state:post})
  }


const {data,optionDetails}=useFetch(`https://thoughts-yyh3.onrender.com/api/${post._id}`,"DELETE");

const handleDelete=()=>{
  optionDetails();
}
useEffect(()=>{
  if(data.length!==0)
  {
    const timer=setTimeout(()=>navigate("/"),3000)
    return ()=>clearTimeout(timer)
  }
},[data,navigate])

  return (
    <div className="jumbotron">
      <h1 className="display-4">{post.title}</h1>
      <hr className="my-4"/>
      <p>{post.body}</p>
      {
      data.length!==0 && <div className="alert alert-success" role="alert">Post is Deleted succesfully!</div>
      }
      <div className="btn">
      <button type="submit" class="btn btn-primary" onClick={handleEdit}>Edit</button>
      <button type="submit" class="btn btn-primary" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}
