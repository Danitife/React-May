import React from 'react'

const MyButton = (props) => {
  return (
    <>
        <button onClick={props.myClick} className='btn btn-info'>{props.title}</button>
    </>
  )
}

export default MyButton