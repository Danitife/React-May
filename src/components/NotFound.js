import React from 'react'
import MyButton from './MyButton'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const goHome = ()=>{
        navigate("/")
    }
  return (
    <>
       <h1>You've lost your way...</h1>
       <MyButton
        myClick={goHome}
        title="Go Home" />
    </>
  )
}

export default NotFound