import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    num: 0,
  }
export const mySlice = createSlice({
    name: "UpdateNumber",
    initialState,
    reducers: {
        increaseNum: (state)=>{
            state.num++;
        },
        increaseByValue: (state, action)=>{
            state.num += action.payload
        }
    },
})
export const {increaseNum, increaseByValue} = mySlice.actions
export default mySlice.reducer