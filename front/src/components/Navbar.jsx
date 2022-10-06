import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./nav.css"

export const Navbar = () => {
    const location=useLocation()
    console.log("LOCATION",location.pathname)
  return (
    <div className='nav navContainer'>        
        <Link to="/" className='link'>Home</Link>
        <Link to="/hiring" className='link'>Hiring Posibility</Link>
        <Link to="/shifts-taken" className='link'>Shifts Taken</Link>
        <Link to="/remaining" className='link'>Remaining Job Spots</Link>
    </div>
  )
}
