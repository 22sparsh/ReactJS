import './App.css'
import React from 'react'
import LeftSection from './Components/left/LeftSection'
import MidSection from './Components/Mid/MidSection'
import Note from './Components/Right/Note'

function App() {
  return (
    <>
     <div className="grid  grid-rows-[1fr_auto] grid-cols-[250px_200px_1fr] bg-white h-screen">
      <LeftSection />
      <MidSection />
      <Note />
  <div className="col-span-3 border-t-2  border-gray-200">
    Footer
  </div>

</div>
    </>
  )
}

export default App
