// src/Components/Dashboard.jsx

import React from "react";
import BalanceCard from "./BalanceCard";
import SpendingCard from "./SpendingCard";
import TransactionsCard from "./TransactionsCard";
import ExpensesCard from "./ExpensesCard";
import CreditScoreCard from "./CreditScoreCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-5 mt-4">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left */}
          <div className="col-span-12 lg:col-span-5">
            <BalanceCard />
          </div>

          {/* Middle */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            <SpendingCard />

            {/* Money Tips Card */}
            <div className="rounded-3xl bg-[#dff4ee] p-5 h-full relative overflow-hidden">
              <h2 className="text-xl font-semibold leading-tight">
                How To Manage
                <br />
                Money Well?
              </h2>

              <button className="mt-8 rounded-full bg-[#9db9ff] px-6 py-3 text-white font-medium shadow">
                Learn More
              </button>

              {/* Decorative circles */}
              <div className="absolute top-3 left-64 w-20 h-20 border-[1.5px] border-black/75 rounded-full"></div>
              <div className="absolute right-4 top-12 w-20 h-20 border-[1.5px] border-blue-400 rounded-full"></div>
              <div className="absolute right-6 -top-3 w-20 h-20 border-[1.5px] border-black/75 rounded-full"></div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-12 lg:col-span-4">
            <TransactionsCard />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <ExpensesCard />
          </div>

          <div className="col-span-12 lg:col-span-4">
            <CreditScoreCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;