import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
const OnePost = () => {
    const route = useParams()
    const id = route.id
    console.log(route);
    useEffect(() => {
      fetch(`http://localhost:1234/posts/${id}`)
      .then((res)=>res.json())
      .then((data)=>console.log(data))
    }, [])
    
  return (
    <>
        <h1>Viewing One Post</h1>
    </>
  )
}   

export default OnePost