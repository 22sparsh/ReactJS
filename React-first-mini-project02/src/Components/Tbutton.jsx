import React from 'react'

const Tbutton = (prop) => {
  return (
    <div className='flex bg-amber-50 rounded-full p-1 justify-center items-center gap-1 pr-24'>
        <div className="rounded-full bg-blue-200 p-3 "><i className="fa-solid fa-download text-2xl"></i></div>
        <h1>{prop.status}</h1>
    </div>
  )
}

export default Tbutton