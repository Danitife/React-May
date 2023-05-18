import React, {useState} from 'react'
import MyButton from '../MyButton'

const AddUser = ({addUser, setuser}) => {
  return (
    <>
        <input type="text" onChange={(e)=>setuser(e.target.value)} />
        <MyButton 
         myClick = {addUser}
         title="Add Todo" />
    </>
  )
}

export default AddUser