import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
// import {Skeleton} from 'antd'
import { Skeleton } from 'antd';

const HttpFetch = () => {
    const [allPost, setallPost] = useState(null);
    const [loader, setloader] = useState(true)
    const [err, seterr] = useState("")
    useEffect(() => {
     setTimeout(() => {
        try {
            fetch("http://localhost:1234/posts")
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data)
                setallPost(data)
                setloader(false)
            }).catch((err)=>{
                console.log(err, "err by server");
                alert("Server error")
                seterr("Server could not respond")
            })
          } catch (error) {
            console.log(error, "Err by me");
            seterr("Failed to fetch data")
            // alert("Failed to fetch data")
          }
     }, 3000);
    }, [])
    
  return (
    <>
        <h1>Helo World</h1>
        
        {!allPost && loader?
          ([...Array(5)].map((el, i)=>(
            <div key={i}>
              <Skeleton active className='w-50 border shadow m-3 p-4 rounded'  />
            </div>
          )))  : null
        }
        {err ? <h1 className='text-danger'>{err}</h1>: null}
        {allPost && 
         allPost.map((el, i)=>(
            <div className='w-50 border shadow m-3 p-4 rounded' key={i}>
                <h1>{el.body}</h1>
                <Link to={`/onepost/${el.id}`}>See more</Link>
                <button className='btn btn-primary py-3 px-5 rounded-pill'>Tweet</button>
            </div>
         ))
        }
    </>
  )
}

export default HttpFetch