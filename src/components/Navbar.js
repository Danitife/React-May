import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* <a href="/" className="navbar-brand">Logo</a> */}
        <Link to="/">Logo</Link>
        <ul className="nav">
            <li className="nav-item">
                {/* <a href="/information" className="nav-link">Information</a> */}
                <Link to="/information">Information</Link>
            </li>
            <li className="nav-item">
                {/* <a href="/profile" className="nav-link">Profile</a> */}
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
      </nav>  
    </>
  )
}

export default Navbar