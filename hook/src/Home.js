import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    const navigate=useNavigate()
    //Type 1
    // useEffect(()=>{
    //     console.log("Type 1")
    // })

    //Type2
    // useEffect(()=>{
    //     console.log("type 2")
    // },[counter1])

    //Type 3
    // useEffect(()=>{
    //     console.log("type 3")
    // },[])
    const nameRef=useRef()
    const handleClick=()=>{
      console.log(nameRef.current.value)
    }
  return (
    <>
    <h1>{counter1}</h1>
    <h1>{counter2}</h1>

    <button onClick={()=>setCounter1(counter1+1)}>Increment 1</button>
    <button onClick={()=>setCounter2(counter2+1)}>Increment 2</button>
    <button onClick={()=>navigate("/menu")}>Menu</button>
    <input type='text' ref={nameRef} placeholder='Enter your name'/>
    <button onClick={handleClick}>submit</button>
    </>
  )
}
