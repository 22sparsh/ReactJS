import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <>
    <button onClick={() => setCount(count + 1)} className='bg-red-200 text-2xl text-black  p-4 active:bg-indigo-700 cursor-pointer'>
      {count}
    </button>
    </>
  )
}

export default App
