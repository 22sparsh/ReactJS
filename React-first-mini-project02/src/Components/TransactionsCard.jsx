import React from 'react'
import Tslide from './Tslide'

const transactions = [
  {
    cname: "Apple Inc",
    camt: "-$45.00",
    t: "30 min ago",
    type: "brand",
  },
  {
    cname: "Jerry Helfer",
    camt: "-$235.00",
    t: "1 day ago",
    type: "person",
  },
  {
    cname: "Dribbble",
    camt: "-$145.00",
    t: "2 day ago",
    type: "brand",
  },
  {
    cname: "Ekra Food",
    camt: "-$25.00",
    t: "13 feb 2026",
    type: "person",
  },
  {
    cname: "Paypal Payment",
    camt: "+40295.00",
    t: "12 feb 2026",
    type: "brand",
  },
  {
    cname: "Meta Inc",
    camt: "-$44.00",
    t: "11 Jan 2026",
    type: "brand",
  },
];

const TransactionsCard = () => {
  return (
    <div className="tbox rounded-4xl p-3 pt-5 bg-[#CCE5E3] flex flex-col gap-4 ">
      <div className="flex justify-between w-full items-center">
      <h1 className='text-base font-bold'>Transactions</h1>
      <span className='text-xs font-semibold'>See ALL</span>
      </div>
      <div className="">
        {transactions.map((item, index) => (
  <React.Fragment key={index}>
    <Tslide
      cname={item.cname}
      camt={item.camt}
      t={item.t}
      type={item.type}
    />

    {index !== transactions.length - 1 && (
      <span className="block w99% ml-2 h-px mt-2 bg-black/15 rounded-2xl"></span>
    )}
  </React.Fragment>
))}
      </div>
    </div>
  )
}

export default TransactionsCard