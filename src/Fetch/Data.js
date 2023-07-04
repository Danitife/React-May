import React, { useEffect, useState } from 'react'
import axios from 'axios'
import http from './http'

const Data = () => {
    const [loading, setloading] = useState(false)
    const [err, seterr] = useState(null)
    const [data, setdata] = useState()
    useEffect(() => {
        try {
            setloading(true)
            http.get('/todos').then((res)=>{
                console.log(res);
                setloading(false)
            }).catch((err)=>{
                console.log(err);
                console.log("The error came from the server");
                seterr(err.message)
                setloading(false)
            })
        } catch (error) {
            console.log(error);
            console.log("The error came from me");
            seterr(error.message)
        }
        
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(response => response.json())
        // .then(json => console.log(json))
    }, [])
    
  return (
    <>
        <h1>This is where the fetched data will be displayed</h1>
        {loading? <h1 className='text-warning'>Loading...</h1> : null}
        {err ? <h1 className='text-danger'>{err}</h1> : null}
    </>
  )
}

export default Data