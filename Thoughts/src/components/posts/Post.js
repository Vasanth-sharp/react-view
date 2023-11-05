import React from 'react'
import './Post.css'
import { useNavigate } from 'react-router-dom'
export default function Post({post}) {
  const navigate=useNavigate();
  const passthepost=()=>{
    navigate(`/post/${post._id}`,{state:post})
  }
  return (
    <div className="card" onClick={passthepost}>
    <div className="card-header">
      {post.title}
    </div>
    <div className="card-body">
      <p className="card-text">{post.body}</p>
    </div>
  </div>
  )
}
