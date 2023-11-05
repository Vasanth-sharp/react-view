import React, { useEffect, useState } from 'react'
import './Editpost.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
export default function Editpost() {

    const location=useLocation();
    const {state:post}=location;
    console.log(post._id)
    const {data,optionDetails}=useFetch(`https://thoughts-yyh3.onrender.com/api/${post._id}`,"PATCH");
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const[emptyerror,setEmptyError]=useState("")
    const[modified,setModified]=useState({});


    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title){
            setEmptyError("Title Cannot be Empty")
            return
        }
        else if(!content){
            setEmptyError("Content cannot be empty")
            return
        }
        setEmptyError("")
        console.log(modified)
       optionDetails(modified)
    }


    useEffect(()=>{
        setTitle(post.title)
        setContent(post.body)
        if(data.length!==0)
        {
          const timer=setTimeout(()=>navigate("/"),3000)
          return ()=>clearTimeout(timer)
        }
      },[data,navigate,post.title,post.body])
    

      const onTitleChange=(e)=>{
        setTitle(e.target.value)
        setModified({...modified,title:e.target.value})
    }
    const onContentChange=(e)=>{
        setContent(e.target.value)
        setModified({...modified,body:e.target.value})
    }

  return (
    <div className="outer-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' className='form-control' value={title} onChange={onTitleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea id="content" className='form-control' value={content} onChange={onContentChange}/>
            </div>
            {
                emptyerror && <div className="alert alert-danger" role="alert">{emptyerror}</div>
            }
            {
                data.length!==0 && <div className="alert alert-success" role="alert">Post is Editted succesfully!</div>
            }
            <div className="float-end">
            <button type="submit" class="btn btn-primary">Save and Exit</button>
            </div>
        </form>
    </div>
  )
}
