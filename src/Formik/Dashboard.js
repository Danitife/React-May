import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const [currUser, setcurrUser] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:1234/signin").then((res)=>{
            console.log(typeof(res.data));
            console.log(res.data);
            if(!res.data.username){
                alert("No user")
                navigate("/formik_signin")
            }else{
                setcurrUser(res.data.username)
            }
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    
  return (
    <>
        <h1>Welcome to your Dashboard {currUser}</h1>
    </>
  )
}

export default Dashboard