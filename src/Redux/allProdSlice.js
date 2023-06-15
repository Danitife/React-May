import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    allProduct: [],
    fetchingFailed: null,
    isPosting: false,
    postingSuccess: null,
    postingError: null
}

export const allProdSlice = createSlice({
    name: "allProduct",
    initialState,
    reducers: {
        fetchingProduct: (state)=>{
            state.isFetching = true
            state.allProduct = []
            state.fetchingFailed = null
        },
        fetchingSuccessful: (state, action)=>{
            state.isFetching = false
            state.allProduct = action.payload
            state.fetchingFailed = null
        },
        fetchingError: (state, action)=>{
            state.isFetching = false
            state.allProduct = []
            state.fetchingFailed = action.payload
        },
        postingStart: (state)=>{
            state.isPosting = true;
            state.postingSuccess = null;
            state.postingError = null
        },
        postingSuccessful: (state, action)=>{
            state.isPosting = false;
            state.postingSuccess = action.payload;
            state.postingError = null
        },
        postingFailed: (state, action)=>{
            state.isPosting = false;
            state.postingSuccess = null;
            state.postingError = action.payload
        }
    }
})

export default allProdSlice.reducer
export const {
    fetchingProduct, 
    fetchingSuccessful, 
    fetchingError,
    postingStart,
    postingSuccessful,
    postingFailed
} = allProdSlice.actions