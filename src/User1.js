import React, { useEffect, useState } from 'react'
import { myInfo, details } from './Info'

const User1 = () => {
    const [state1, setstate1] = useState(false)
    const [username, setusername] = useState("")
    const [allUser, setallUser] = useState([])
    const [todo, settodo] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            settodo(data)
        })
    }, [username, state1])

    const changeState = ()=>{
        setstate1(!state1)
        
    }
  return (
    <div>
        <h1>User1</h1>
        {details.map((el, i)=>(
            <div className='bg-info' key={i}>{el.det}</div>
        ))}
        {todo && todo.map((el, i)=>(
            <div className={el.completed ? "bg-success" : "bg-danger"} key={i}>{el.title}</div>
        ))}
        <input onChange={(e)=>{setusername(e.target.value)}} type="text" placeholder='Enter your name' />
        <button onClick={changeState}>Change State</button>
        {allUser && allUser.map((el, i)=>(
            <div key={i}>{el}</div>
        ))}
    </div>
  )
}

export default User1