import React from 'react'
import Search from '../Utilities/Search';

const MidSection = () => {
  const iconStyle = "w-5  text-center text-base ml-2 ";

  return (
    <div className='border-r-2 border-gray-300'>

      <div className="flex flex-col h-fit border-b-2 items-center pb-2  border-gray-200 border-dashed ">

        <div className=" flex h-fit  w-full justify-between  gap-2 p-3 ">
          <div className="flex justify-center h-fit items-center">
            <i className={`fa-solid fa-file-lines ${iconStyle}`}></i>
            <h1 className='text-xl font-bold'>Notes</h1>
          </div>
          <div className="">
            <button className="bg-blue-400 w-2 h-2 flex justify-center items-center text-white text-xl rounded-full p-4 cursor-pointer active:bg-blue-200 hover:bg-blue-50 hover:text-black">+</button>
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