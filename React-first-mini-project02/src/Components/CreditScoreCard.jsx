import React from 'react'

const CreditScoreCard = () => {
  return (
    <div className='bg-[#C7DAFF] h-full justify-between flex-col rounded-3xl p-3 block' >
      <div className="flex justify-between w-full items-center">
        <h1 className='text-base font-bold'>Spending</h1>
        <span className='text-xs flex items-center justify-center text-center font-semibold bg-amber-50 p-2.5 rounded-4xl'>Month <i className="fa-solid fa-angle-down ml-0.5"></i></span>
      </div>
    </div>
  )
}

export default CreditScoreCard