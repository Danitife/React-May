import React from 'react'
import { myInfo } from './Info'

const User2 = () => {
    console.log(myInfo);
  return (
    <div>
        {myInfo.map((el, i)=>{
            <div className='bg-success' key={i}>{el.name}</div>
        })}
    </div>
  )
}

export default User2