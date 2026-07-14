import React from 'react'

const Bar = (prop) => {
let v=Math.log10(prop.amt);

  
  return (
    <div className='flex flex-col w-fit justify-end items-center gap-1 h-full bottom-0'>
        <div id="barlen" className='block bg-white rounded-full w-5' style={{ height: `${v * 26}px` }}></div>
        <h1 className='text-xs'>{prop.month}</h1>
    </div>
  )
}

export default Bar