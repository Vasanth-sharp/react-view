import React from 'react'
import { useParams } from 'react-router-dom'

export default function Users() {
    const {id}=useParams()
  return (
    <div>
        <h2>User ID:<b>{id}</b></h2>
    </div>
  )
}
