import React from 'react'
import Tslide from './Tslide'

const TransactionsCard = () => {
  return (
    <div className="tbox rounded-4xl p-3 pt-5 bg-[#CCE5E3] flex flex-col gap-4 ">
      <div className="flex justify-between w-full items-center">
      <h1 className='text-base font-bold'>Transactions</h1>
      <span className='text-xs font-semibold'>See ALL</span>
      </div>
      <div className="">

      <Tslide  cname='Apple Inc' camt="-$45.00" t="30 min ago"type="brand"/>
      <span className="block w-[99%] ml-2 h-px mt-2 bg-black/15 rounded-2xl"></span>
      <Tslide  cname='Jerry Helfer' type="person" camt="-$235.00" t="1 day ago"/>
      <span className="block w-[99%] ml-2 h-px mt-2 bg-black/15 rounded-2xl"></span>

      <Tslide  cname='Dribbble' camt="-$145.00" t="2 day ago"type="brand"/>
      <span className="block w-[99%] ml-2 h-px mt-2 bg-black/15 rounded-2xl"></span>

      <Tslide  cname='Ekra Food' type="person" camt="-$25.00" t="13 feb 2026"/>
      <span className="block w-[99%] ml-2 h-px mt-2 bg-black/15 rounded-2xl"></span>

      <Tslide  cname='Paypal Payment' type="brand" camt="+40295.00" t="12 feb 2026"/>
      <span className="block w-[99%] ml-2 h-px mt-2 bg-black/15 rounded-2xl"></span>
      <Tslide  cname='Meta Inc' type="brand" camt="-$44.00" t="11 Jan 2026"/>
      </div>
    </div>
  )
}

export default TransactionsCard