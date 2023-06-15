import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseNum, increaseByValue } from './Redux/mySlice';
import { allProd } from './services/allProd';
const Home = () => {
  const { isFetching, allProduct, fetchingFailed } = useSelector((state) => state.allProdSlice)
  const [addNum, setaddNum] = useState(null)
  const dispatch = useDispatch();
  const { num } = useSelector((state) => state.mySlice)
  useEffect(() => {
    dispatch(allProd)
  }, [])

  const add = () => {
    dispatch(increaseNum())
  }
  const byValue = () => {
    dispatch(increaseByValue(Number(addNum)))
  }
  return (
    <>
      {isFetching && <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>}
      <h1>Welcome to my Home page</h1>
      <h1 className="text-primary">{num}</h1>
      <button className='btn btn-primary' onClick={add}>Increase num</button><br /><br />
      <input onChange={(e) => setaddNum(e.target.value)} type="text" />
      <button onClick={byValue}>Increase By Input Value</button>
    </>
  )
}

export default Home