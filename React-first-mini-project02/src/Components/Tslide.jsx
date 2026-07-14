import React from 'react'

const Tslide = (prop) => {
  let logo = prop.cname.split(" ")[0].toLowerCase();
  return (
    <>
      <div className="t flex justify-between items-center mt-3">

        <div className='flex gap-4 items-center '>
          <div className="rounded-full p-3 border w-11 h-11  flex items-center font-light justify-center">
            {prop.type === "person" ? (
              <i className="fa-solid fa-user text-xl" ></i>
            ) : (
              <i className={`fa-brands fa-${logo} text-xl`}></i>
            )}
          </div>
          <div className="">
            <h1 className='text-base font-medium'>{prop.cname}</h1>
            <span className='text-sm'>{prop.t}</span>
          </div>
        </div>
        <div className="flex items-center justify-center text-sm font-light">
          <h1>{prop.camt}</h1>
        </div>
      </div>
    </>
  )
}

export default Tslide