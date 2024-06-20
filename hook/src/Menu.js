import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { productsContext } from './App'
export default function Menu() {
    const navigate=useNavigate()
    const products=useContext(productsContext)
  return (
    <div>
        {
            products.length>0 && products.map((item)=><p>{item}</p>)
        }
        <button onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}
