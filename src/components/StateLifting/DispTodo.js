import React from 'react'

const DispTodo = ({allUser}) => {
    
  return (
    <>
        <div>
            <h1>List of Users</h1>
            {allUser == ""? "There are no user available":
                allUser.map((el, i)=>(
                    <>
                        <p key={i}>{el}</p>
                    </>
                ))
            }
        </div>
    </>
  )
}

export default DispTodo