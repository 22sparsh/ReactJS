import React from 'react'
import { Search, Bell, Settings } from "lucide-react";
const NavBar = () => {
  return (
   <nav className="flex items-center justify-between px-8 py-5 bg-amber-800">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-400">
         <i class="fa-solid fa-arrow-trend-up"></i>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Tarr</h1>
      </div>

      {/* Navigation */}
      <ul className="hidden items-center gap-10 text-lg font-medium text-gray-600 lg:flex">
        <li>
          <a href="/" className="">
            All
          </a>
        </li>
        <li>
          <a href="/">Transactions</a>
        </li>
        <li>
          <a href="/">Analysic</a>
        </li>
        <li>
          <a href="/">Expenses</a>
        </li>
        <li>
          <a href="/">Spending</a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="flex h-12 w-80 items-center rounded-full border border-gray-200 bg-amber-50/20  px-5">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-gray-700 outline-none opacity-100"
          />
          <Search size={20} className="text-gray-500" />
        </div>

        {/* Icons */}
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell size={22} />
        </button>

        <button className="rounded-full p-2 hover:bg-gray-100">
          <Settings size={22} />
        </button>

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>
    </nav>
  )
}

export default NavBar