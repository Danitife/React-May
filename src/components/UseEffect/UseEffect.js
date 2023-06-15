import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const UseEffect = () => {
  const { isFetching, allProduct, fetchingFailed } = useSelector((state) => state.allProdSlice)
  const [array, setarray] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setarray(data))
  }, [])
  console.log(allProduct);
  return (
    <>
      <h1>Alert Goog morning</h1>
      {isFetching && <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>}

      {allProduct && 
        allProduct.map((el, i)=>(
          <div key={i}>
            <h1>{el.body}</h1>
          </div>
        ))
      }
      {array.map((el) => (
        <>
          <div>{el.title}</div>
        </>
      ))}
    </>
  )
}

export default UseEffect