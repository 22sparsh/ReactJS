import React from "react";
import Search from "../Utilities/Search";

const ActiveViewTab = (prop) => {
  function handleAddNote() {
    
  }
  return (
    <div className="border-r text-zinc-800 border-gray-300">
      <div className="flex flex-col h-fit border-b items-center pb-2  border-gray-400">
        <div className=" flex h-fit  w-full justify-between  gap-2 p-3 ">
          <div className="flex justify-between h-fit gap-1 items-center">
            <i
              className={` ${prop.activeView.ico} fa-lg`}
              style={{ marginLeft: 0 }}
            ></i>
            <h1 className="text-[1.3vw]">{prop.activeView.name}</h1>
          </div>
          <div className="">
            <button
              className="bg-blue-400 w-2 h-2 flex justify-center items-center text-white text-xl rounded-full p-4 cursor-pointer active:bg-blue-200 hover:bg-blue-900 hover:text-white"
              onClick={handleAddNote}
            >
              +
            </button>
          </div>
        </div>
        <div className="">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default ActiveViewTab;
