import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-between items-center bg-gray-800 text-white p-4 top-0 left-0 right-0 fixed z-10'>
        <div className="left text-2xl font bold ">
            <Link to ="/home">home </Link>
        </div>
        <div className="right">
            <Link to ="/about">about</Link>
        </div>

    </div>
  )
}

export default Navbar