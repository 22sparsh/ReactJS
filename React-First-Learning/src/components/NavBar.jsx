import React from "react";
import { Link } from "react-router-dom";

const NavBar = (prop) => {
  
  return (
    <div className="h-20 text-4xl items-center bg-cyan-800 text-white flex pl-9 pr-9 justify-between">
      <h1 className="text-4xl font-black">Tarr</h1>
      <div className="flex gap-4 text-2xl items-center font-black">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Products</Link>
        <button onClick={()=>{
          if(prop.theme === 'Light'){
            prop.setTheme('Dark')
          }
        else{
            prop.setTheme('Light')
        }
        }} className="bg-cyan-500 border-s-amber-900 text-base p-3 rounded-[13px] cursor-pointer active:scale-95">
          Change theme
        </button>
      </div>
    </div>
  );
};

export default NavBar;
