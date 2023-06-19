import React from 'react'

const MyButton = (props) => {
  return (
    <>
       <button className={props.myClass}>{props.name}</button> 
    </>
  )
}

export default MyButton