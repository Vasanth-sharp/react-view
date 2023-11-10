import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate();
    const handleSubmit=()=>{
        // code to validate
        navigate('/dashboard');
    }
  return (
    <div>
        <form>
            <h2>Login</h2>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login