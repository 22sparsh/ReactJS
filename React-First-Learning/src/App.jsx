import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
    const sectionRef = useRef();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
   <div>
      <button
        onClick={scrollToSection}
        className="w-19 h-10 items-center flex justify-center bg-amber-50 rounded-2xl p-3 text-black active:bg-red-500"
      >
        Go Down
      </button>
<div className="h-screen block"></div>
      <div className="h-200"></div>

      <div
        ref={sectionRef}
        className="h-40 bg-green-500 flex items-center justify-center text-white"
      >
        Target Section
      </div>
    </div>
  )
}

export default App
