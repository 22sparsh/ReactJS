import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-20 text-4xl bg-cyan-400 text-black flex p-2 justify-between'>
        <h1>Hello</h1>
        <div className="flex gap-4">
        <Link to='/'>home</Link>
        <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default NavBar