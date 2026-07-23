import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Jan', expenses: 400 },
  { name: 'Feb', expenses: 300 },
  { name: 'Mar', expenses: 500 },
  { name: 'Apr', expenses: 450 },
  { name: 'May', expenses: 700 },
  { name: 'Jun', expenses: 600 },
  { name: 'Jul', expenses: 800 },
]

const ExpensesCard = () => {
  return (
    <div className="bg-white/45 h-full flex flex-col rounded-3xl p-4 gap-2">

      {/* Header */}
      <div className="flex justify-between w-full items-center">
        <h1 className="text-base font-bold">
          Expenses
        </h1>

        <span className="text-xs flex items-center justify-center text-center font-semibold bg-amber-50 p-2.5 rounded-4xl">
          Month
          <i className="fa-solid fa-angle-down ml-0.5"></i>
        </span>
      </div>

      {/* Chart Section */}
      <div className="flex flex-col flex-1 min-h-0">

        {/* Graph */}
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#000000"
                fill="#8DB5FF"
                fillOpacity={0.45}
              />

            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  )
}

export default ExpensesCard