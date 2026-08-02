import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div className='text-4xl font-bold'>Product</div>
    <Outlet />
    </>
  )
}

export default Product