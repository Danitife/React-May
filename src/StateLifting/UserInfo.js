import React from 'react'

const UserInfo = ({addUser, setuserEmail, setusername, setuserCountry}) => {
  return (
    <>
        <form className='w-50 mx-auto border p-3 shadow rounded' action="">
            <h1 className='text-primary'>Add User</h1>
            <input onChange={(e)=>setusername(e.target.value)} type="text" placeholder='Enter your name' className="form-group my-3" />
            <input onChange={(e)=>setuserEmail(e.target.value)} type="email" placeholder='Enter your email' className="form-group my-3" />
            <input onChange={(e)=>setuserCountry(e.target.value)} type="text" placeholder='Enter your nationality' className="form-group my-3" />
            <button onClick={addUser} className='btn btn-primary'>Add User</button>
        </form>

        
    </>
  )
}

export default UserInfo