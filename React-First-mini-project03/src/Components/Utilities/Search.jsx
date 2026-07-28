import React from 'react'

const Search = () => {
  return (
    <div  className='flex w-fit p-[0.2vw] border border-black bg-gray-100 text-gray-400 rounded-2xl gap-3.5'>
    <i className="fa-solid fa-magnifying-glass"></i>
    <input className='text-xs outline-none text-zinc-800' placeholder='Search...'/>
    </div>
  )
}

export default Search