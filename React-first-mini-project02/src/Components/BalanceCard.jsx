import React from 'react'
import Tbutton from './Tbutton'
import WCard from './WCard'

const BalanceCard = () => {
  return (
    <div className="b bg-white/45 rounded-4xl p-3 flex flex-col gap-4.5">
        <h1 className='text-base'>TotalBalance</h1>
        <h1 className='font-bold text-4xl'>$31,180.<span className='text-lg text-gray-400'>24</span></h1>
        <div className="tbut flex gap-2">

    <Tbutton status="Send"/>
    <Tbutton status="Recieve"/>
        </div>
<h1 className='text-xl font-semibold mt-3'>My cards</h1>
<div className="w-full block h-full bg-amber-100 ">
  <WCard />
  <WCard />
</div>
    </div>
  )
}

export default BalanceCard