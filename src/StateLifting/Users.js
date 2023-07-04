import React, { useState } from 'react'
import UserInfo from './UserInfo'
import DispUser from './DispUser'

const Users = () => {
    const [username, setusername] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userCountry, setuserCountry] = useState("")
    const [allUser, setallUser] = useState([])

    const addUser = (e)=>{
        e.preventDefault()
        let user_data = {username, userEmail, userCountry}
        setallUser([...allUser, user_data])
    }
  return (
    <>
       <UserInfo
        addUser = {addUser} 
        setusername = {setusername}
        setuserEmail = {setuserEmail}
        setuserCountry = {setuserCountry}
        />
       <DispUser allUser={allUser} /> 
    </>
  )
}

export default Users