import React from 'react'
import Bar from './Bar'

const SpendingCard = () => {
  return (
    <div className='bg-[#C7DAFF] h-full flex justify-between flex-col rounded-3xl p-3 pb-4 gap-9'> 
      <div className="flex justify-between w-full items-center">
        <h1 className='text-base font-bold'>Spending</h1>
        <span className='text-xs flex items-center justify-center text-center font-semibold bg-amber-50 p-2.5 rounded-4xl'>Month <i className="fa-solid fa-angle-down ml-0.5"></i></span>
      </div>
      <div className="p-3 flex gap-4">
       <Bar month="Jun" amt={3455}/>
       <Bar month="Jul" amt={34}/>
       <Bar month="Aug" amt={345}/>
       <Bar month="Sep" amt={49}/>
       <Bar month="Oct" amt={34505}/>
       <Bar month="Nov" amt={11002}/>
       <Bar month="Dec" amt={3455}/>
       

      </div>
    </div>
  )
}

export default SpendingCard