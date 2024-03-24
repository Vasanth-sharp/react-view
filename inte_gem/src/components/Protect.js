import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

const auth=()=>{
  const token=JSON.parse(sessionStorage.getItem("token"))||null
  if(token){
    return true
  }
  return false
}

export default function Protect() {
  const isAuth=auth()
  
  useEffect(()=>{
    if(isAuth===false){
      toast.error("session expired")
    }
  },[isAuth])

  return isAuth?<Outlet/>:<Navigate to="/login"/>
}
