import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-20 text-4xl items-center bg-cyan-800 text-white flex p-2 justify-between'>
        <h1>Tarr</h1>
        <div className="flex gap-4">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Products</Link>
        </div>
    </div>
  )
}

export default NavBar