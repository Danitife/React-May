import React from 'react'

const Card = (props) => {
  return (
    <>
       <div className={props.myClass}>
        <h1>{props.text}</h1> 
       </div> 
    </>
  )
}

export default Card