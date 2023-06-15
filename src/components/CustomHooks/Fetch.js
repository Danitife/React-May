import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useFetch = (url) => {
    const [data, setdata] = useState([])
    const [err, seterr] = useState()
    useEffect(() => {
        axios.get(url)
        .then((res)=> {
            console.log(res);
            setdata(res.data)
        })
        .catch((error)=>{
            console.log(error);
            seterr(error)
        })

        // axios.create({
        //     baseURL: `http://localhost:1234/${url}`,
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        // })
    }, [url])
    return {data, err}
    
  return (
    <>
    </>

  )
}

export default useFetch