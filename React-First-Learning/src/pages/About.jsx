import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={()=>{
          navigate('/')
        }}
        className="bg-indigo-600 text-2xl p-3 rounded-xl cursor-pointer active:scale-95"
      >
        Return to Home
      </button>
      <button
        onClick={()=>{
          navigate(-1)
        }}
        className="bg-indigo-600 ml-2 text-2xl p-3 rounded-xl cursor-pointer active:scale-95"
      >
        Back
      </button>
      <div className="text-4xl font-bold">About</div>
    </>
  );
};

export default About;
