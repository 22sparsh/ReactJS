import React, { useEffect } from "react";
import Search from "../Utilities/Search";

const ViewsTab = (prop) => {
  function handleViewClick(id) {
    prop.onViewChange(id);
  }
  return (
    <div className="flex flex-col text-zinc-800 gap-5 border-r border-gray-400 bg-gray-200 h-full">
      <div className=" flex h-15  justify-start items-center gap-3 p-3 border-b border-gray-900 ">
        <img src="/logo.svg" alt="File" width={30} height={10} />
        <h1 className="text-[1.5vw] font-bold">NoteBench</h1>
      </div>
      <div className="text-[0.9vw]  font-medium flex flex-col gap-4">
        <h1 className="ml-3 font-black">Views</h1>
        <div className="font-light flex flex-col justify-start  gap-0.5">
          {prop.views.map((view) => (
            <div
              key={view.id}
              onClick={() => handleViewClick(view.id)}
              className={`flex items-center p-2 bg red-900 cursor-pointer  ${
                view.id === prop.activeViewId ? "bg-white" : ""
              }`}
            >
              <i className={view.ico}></i>
              <h1 className="font-light">{view.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewsTab;
