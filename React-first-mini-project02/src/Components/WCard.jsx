import React from 'react'

const WCard = (prop) => {
  return (
    <>
    <div className='h-50 relative  overflow-hidden rounded-3xl p-4' style={{ background: prop.color}}>
      <div className="absolute -top-28 -rotate-12 -right-10 w-45 h-40 border-2 border-black rounded-b-[70px]"></div>
      <div className="absolute -top-25 -rotate-18 -right-8 w-45 h-40 border-2 border-black rounded-b-[60px]"></div>
      <div className="flex h-full flex-col justify-between ">
        <div className="text-base font-bold">Visa</div>
        <div className="flex p-2 justify-between items-center">
          <div className="flex flex-col items-start ">
            <h1 className='text-base font-semibold'>**** **** 1234</h1>
            <h1 className='font-semibold text-sm'>Joha Wick</h1>
          </div>
          <div className="flex">
            <div className="bg-white/75 w-6 h-6 rounded-full  ring-white"></div>
            <div className="-ml-2 bg-white/75 w-6 h-6 rounded-full ring-white"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WCard