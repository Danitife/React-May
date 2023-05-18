import React from 'react'

const Landin = () => {
  return (
    <div>
        <h1 className='text-primary'>{Math.random()}</h1>
        <i className="fa fa-users"></i>
        <img src={require('./img/cpanel error.PNG')} alt="" />
    </div>
  )
}

export default Landin