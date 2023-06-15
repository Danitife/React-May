import axios from "axios";

// import { fetchingProduct, fetchingSuccessful, fetchingError } from './Redux/allProdSlice';
import {fetchingProduct,
     fetchingSuccessful,
     fetchingError,
     postingFailed,
     postingSuccessful,
     postingStart
    } from "../Redux/allProdSlice";

export const allProd = (dispatch)=>{
    dispatch(fetchingProduct())
    setTimeout(() => {
        axios.get("http://localhost:1234/posts").then((res) => {
        dispatch(fetchingSuccessful(res.data))
        alert("Fetched successfully")
      }).catch((err) => {
        console.log(err);
        dispatch(fetchingError(err.message))
        console.log(err.message);
      })
      }, 5000);
}

export const addPostt = (dispatch, data)=>{
    dispatch(postingStart())
    axios.post("http://localhost:1234/posts", data).then((res)=>{
        dispatch(postingSuccessful("Created Succesfully"))
    }).catch((err)=>{
        dispatch(postingFailed(err.message))
    })
}