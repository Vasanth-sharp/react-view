import React, { useEffect, useState } from 'react'
import './Createpost.css'
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
export default function Createpost() {
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const [emptyerror,setEmptyError]=useState("");
  const {data,optionDetails}=useFetch("https://thoughts-yyh3.onrender.com/api","POST");

  const navigate=useNavigate();

  const submit=(e)=>{
    e.preventDefault();
    
    if(!title){
      setEmptyError("Title cannot be empty")
      return
    }
    if(!content){
      setEmptyError("Content cannot be empty")
      return
    }
    setEmptyError("");
    console.log({title,body:content})//sent by data
    optionDetails({title,body:content})
  }
  
  useEffect(()=>{
    if(data.length!==0)
    {
      const timer=setTimeout(()=>navigate("/"),3000)
      return ()=>clearTimeout(timer)
    }
  },[data,navigate])


  return (
   <div className="outer-container">
    <form onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
       <textarea id="content" className='form-control'value={content} onChange={(e)=>{setContent(e.target.value)}}/>
       </div>
       {
        emptyerror && <div className="alert alert-danger" role="alert">{emptyerror}</div>
       }
       {
        data.length!==0 && <div className="alert alert-success" role="alert">Post is Created succesfully!</div>
       }
      <div className="float-end">
      <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
   </div>
  )
}
