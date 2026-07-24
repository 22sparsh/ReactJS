import { useState } from 'react';
import './App.css'
import Card from './components/Cards/Card'

function App() {
  // let a=20;
  // instead use the useState
  const [counter, setcounter] = useState(0)
  function btnclick(){
    console.log("clicked" );
  }
  function btnclick2(elem){
    console.log(elem);
  }
  // function change(){
  //   a=30;
  // }
  return (
    <>
    <h1 className='text-black text-6xl font-extrabold'>{counter}</h1>
    <button className='bg-amber-50/25 rounded-2xl hover:bg-red-200 cursor-pointer text-black p-2' onClick={()=>{
      setcounter(counter+1)
    }}>Click Me!</button>
    </>
  )
}

export default App
