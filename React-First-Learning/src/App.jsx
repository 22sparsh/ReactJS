import { useState } from 'react';
import './App.css'

function App() {
  const [Minute, setMinute] = useState(0)
  const [Hour, setHour] = useState(0)
  const [Secound, setSecound] = useState(0)
  const upwork = (whichtime) => {
    if (whichtime === setHour) {
      whichtime(prev => prev + 1)
    }
    else {
      whichtime(prev => (prev + 1) % 60)
    }
  }
  const downwork = (whichtime) => {
    if (whichtime === setHour) {
      whichtime(prev => Math.max(0, prev - 1))
    }
    else {
      whichtime(prev => Math.max(0, (prev - 1) % 60))
    }
  }
  function timer() {
  const id = setInterval(() => {
    setSecound(prevSec => {      
      if (prevSec <= 1) {
        setMinute(prevMin=>{
          console.log(prevMin);
          
          if(prevMin <=0){
            setHour(prevHour =>{
              if(prevHour <=0){
                clearInterval(id)
                return 0;
              }
              else{
                setMinute(59)
                setSecound(59)
              }
              return prevHour-1;
            })
            return 0
          }
          else{
            setSecound(59)
          }
          return prevMin -1
        })
      }
      return prevSec - 1;
    });
  }, 1000);
}

  const startTimer = () => {
    
    if (Minute > 0 || Hour > 0 || Secound > 0) {
      timer()
    }
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#07051c]">
        <div className=" flex p-10  flex-col gap-14">

          <div className="flex text-9xl font-bold  items-center gap-12">
            <div className="flex flex-col justify-center items-center gap-6">
              <button
                className="w-6 h-6 bg-white cursor-pointer"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
                onClick={function () {
                  upwork(setHour)
                }}
              >
              </button>
              <span>{Hour > 9 ? `${Hour}` : `0${Hour}`}</span>
              <button
                className="w-6 h-6 bg-white cursor-pointer"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                }}
                onClick={function () {
                  downwork(setHour)
                }}
              >
              </button>
            </div>
            <span>:</span>
            <div className="flex flex-col justify-center items-center gap-6">
              <button
                className="w-6 h-6 bg-white cursor-pointer"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
                onClick={function () {
                  upwork(setMinute)
                }}
              >
              </button>
              <span><span>{Minute > 9 ? `${Minute}` : `0${Minute}`}</span></span>
              <button
                className="w-6 h-6 bg-white cursor-pointer"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                }}
                onClick={function () {
                  downwork(setMinute)
                }}
              >
              </button>
            </div>
            <span>:</span>
            <div className="flex flex-col justify-center items-center gap-6">
              <button
                className="w-6 h-6 bg-white cursor-pointer"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
                onClick={function () {
                  upwork(setSecound)
                }}
              >
              </button>
              <span><span>{Secound > 9 ? `${Secound}` : `0${Secound}`}</span></span>
              <button
                className="w-6 h-6 bg-white cursor-pointer"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                }}
                onClick={function () {
                  downwork(setSecound)
                }}
              >
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className='bg-red-300 text-black pt-3 pb-3 px-6 py-6 rounded-2xl text-6xl cursor-pointer' onClick={startTimer}>Start</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
