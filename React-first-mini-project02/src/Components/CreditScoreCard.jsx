import React from 'react'

const CreditScoreCard = () => {
  return (
    <div className='bg-[#edf2fc] h-full flex justify-between flex-col rounded-3xl p-3 gap-3' >
      <div className="flex justify-between w-full items-center">
        <h1 className='text-base font-bold'>Creadit Score</h1>
       <span className='text-xs font-semibold'>See ALL</span>
      </div>
       <div className="relative w-full h-52 flex items-center justify-center">
  <svg
    viewBox="0 0 220 140"
    className="absolute top-0 w-[530px] h-45"
    fill="none"
  >
    {/* Red */}
    <path
      d="M40 110 A70 70 0 0 1 70 45"
      stroke="#FF6B6B"
      strokeWidth="10"
      strokeLinecap="round"
    />

    {/* Yellow */}
    <path
      d="M70 45 A70 70 0 0 1 150 45"
      stroke="#F4B740"
      strokeWidth="10"
      strokeLinecap="round"
    />

    {/* Green */}
    <path
      d="M150 45 A70 70 0 0 1 180 110"
      stroke="#4CD964"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>

  <div className="absolute top-20 flex flex-col items-center">
    <h1 className="text-6xl font-black text-gray-900">1620</h1>
    <span className="text-xl font-semibold text-green-500">
      Excellent
    </span>
  </div>
</div>
      <div className="flex justify-center items-center">
        <button className='bg-[#C7DAFF] cursor-pointer rounded-2xl p-2 pl-4 pr-4'><span className='text-xs font-semibold'>Explore Benefits</span></button>
      </div>
    </div>
  )
}

export default CreditScoreCard