// src/Components/Dashboard.jsx

import React from "react";
import BalanceCard from "./BalanceCard";
import SpendingCard from "./SpendingCard";
import TransactionsCard from "./TransactionsCard";
import ExpensesCard from "./ExpensesCard";
import CreditScoreCard from "./CreditScoreCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 mt-4">
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
              <h2 className="text-2xl font-semibold leading-tight">
                How To Manage
                <br />
                Money Well?
              </h2>

              <button className="mt-8 rounded-full bg-[#9db9ff] px-6 py-3 text-white font-medium shadow">
                Learn More
              </button>

              {/* Decorative circles */}
              <div className="absolute right-0.5 top-5 w-24 h-24 border border-black/45 rounded-full"></div>
              <div className="absolute right-0 top-20 w-24 h-24 border border-blue-300 rounded-full"></div>
              <div className="absolute right-20 bottom-0 w-24 h-24 border border-black/20 rounded-full"></div>
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