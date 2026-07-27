import React, { useEffect } from 'react'
import Search from '../Utilities/Search';


const LeftSection = (prop) => {
  function handleViewClick(index) {
    prop.prevref(prop.midtop.id)
    prop.status(prop.views[index])
  }
  return (
    <div className='flex flex-col text-zinc-800 gap-5 bg-gray-200 h-full'>
      <div className=" flex h-15  justify-start items-center gap-3 p-3 border-b-2 border-gray-900 ">
        <img src="/logo.svg" alt="File" width={30} height={10} />
        <h1 className='text-xl font-bold'>NoteBench</h1>
      </div>
      <div className="text-base  font-medium flex flex-col gap-4">
        <h1 className='ml-3 text-base font-black'>Views</h1>
        <div className="text-base font-light flex flex-col justify-start items-center gap-3">
          {
            prop.views.map((ele, index) => (
              <div
                key={index}
                ref={(el) => {
                  prop.refrence.current[index] = el;
                }}
                className="flex gap-1 items-center w-full hover:bg-white cursor-pointer active:bg-indigo-400"
                onClick={() => { handleViewClick(index) }}
              >
                <i className={ele.ico}></i>
                <h1 className="font-light">{ele.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LeftSection