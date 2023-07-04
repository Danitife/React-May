import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate("/")
    }
  return (
    <>
        <h1>Abi you don miss road....</h1>
        <p style={{fontSize: "10px"}}>
            <button onClick={goToHome} className='btn btn-warning'>Click here</button> 
            <span>to go back to home page</span>
        </p>
    </>
  )
}

export default NotFound