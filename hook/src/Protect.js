import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const authUser=()=>{
    let key=JSON.parse(sessionStorage.getItem("key"))
    if(key)
        return true;
    return false;
}
export default function Protect() {
    const auth=authUser()
    useEffect(()=>{
        if(!auth)
            toast.error("Invalid")
    },[auth])
  return auth?<Outlet/>:<Navigate to="/"/>
}
