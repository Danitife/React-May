import React, {useState} from 'react'
import AddUser from './AddUser'
import DispTodo from './DispTodo'

const Users = () => {

    const [user, setuser] = useState("");
    const [allUser, setallUser] = useState([])

    const addUser = ()=>{
        alert("Hello")
        setallUser([...allUser, user])
    }
  return (
    <>
       <AddUser
        setuser = {setuser}
        addUser={addUser} /> 
       
       <DispTodo
        allUser= {allUser} />
    </>
  )
}

export default Users