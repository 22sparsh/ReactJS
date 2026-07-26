import React from 'react'
import Search from '../Utilities/Search';

const MidSection = (prop) => {
  return (
    <div className='border-r text-zinc-800 border-gray-300'>
      
      <div className="flex flex-col h-fit border-b items-center pb-2  border-gray-200">

        <div className=" flex h-fit  w-full justify-between  gap-2 p-3 ">
          <div className="flex justify-between h-fit gap-1 items-center">
            <i className={` ${prop.status.ico} fa-lg`}
            style={{ marginLeft: 0 }}></i>
            <h1 className='text-2xl'>{prop.status.name}</h1>
          </div>
          <div className="">
            <button className="bg-blue-400 w-2 h-2 flex justify-center items-center text-white text-xl rounded-full p-4 cursor-pointer active:bg-blue-200 hover:bg-blue-300 hover:text-black">+</button>
          </div>
        </div>
        <div className="">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default MidSection