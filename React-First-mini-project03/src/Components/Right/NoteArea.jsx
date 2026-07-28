import React, { useState } from 'react'

const NoteArea = (prop) => {
  const [title, settitle] = useState("")
  return (
    <div className='flex flex-col h-full w-full '>

      <div className="border-b border-black p-3">
        <input className='text-xl font-extrabold outline-none w-full' 
        value={title} onChange={(e)=>{
      settitle(e.target.value)
    }} />
      </div>
      <div className="flex-1">
        <textarea
          className="w-full h-full p-2 text-base outline-none resize-none"
          spellCheck="false"
        ></textarea>
      </div>
    </div>
  )
}

export default NoteArea