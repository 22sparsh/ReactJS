import React from 'react'
import Search from '../Utilities/Search';


const LeftSection = (prop) => {

  let views = [
    {
      name: "Notes",
      ico: "fa-regular fa-file-lines w-5  text-center text-base ml-2"
    },
    {
      name: "Starred",
      ico: "fa-regular fa-star w-5  text-center text-base ml-2"
    },
    {
      name: "Archived",
      ico: "fa-regular fa-bookmark w-5  text-center text-base ml-2 "
    },
    {
      name: "Trash",
      ico: "fa-regular fa-trash-can w-5  text-center text-base ml-2"
    }
  ]

  return (
    <div className='flex flex-col gap-5 bg-gray-200 h-full'>
      <div className=" flex h-15  justify-start items-center gap-3 p-3 border-b-2 border-gray-900 ">
        <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
        <h1 className='text-xl font-bold'>NoteBench</h1>
      </div>
      <div className="text-base  font-medium flex flex-col gap-4">
        <h1 className='ml-3 text-base font-black'>Views</h1>
        <div className="text-base font-light flex flex-col justify-start items-center gap-3">
          {
            views.map((ele, index) => (
              <div
                key={index}
                className="flex gap-1 items-center w-full hover:bg-white cursor-pointer"
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