import React, { useState } from 'react'
import LeftSection from './left/ViewsTab'
import MidSection from './Mid/ActiveViewTab'
import Note from './Right/Note'

const AppLayout = () => {
    let views = [
    {
      name: "Notes",
      ico: "fa-regular fa-file-lines w-5  text-center text-base ml-2",
      content:{}
    },
    {
      name: "Starred",
      ico: "fa-regular fa-star w-5  text-center text-base ml-2",
      content:{}
    },
    {
      name: "Archived",
      ico: "fa-regular fa-bookmark w-5  text-center text-base ml-2 ",
      content:{}
    },
    {
      name: "Trash",
      ico: "fa-regular fa-trash-can w-5  text-center text-base ml-2",
      content:{}
    }
  ]
  const [midsectiontopings, setmidsectiontopings] = useState(views[0])
  
    return (
        <div className="grid  text-zinc-800 grid-rows-[1fr_auto] grid-cols-[250px_260px_1fr] bg-white h-screen">
            <LeftSection views={views} status={setmidsectiontopings} />
            <MidSection status={midsectiontopings} />
            <Note />
            <div className="col-span-3 border-t-2  border-gray-200">
                Footer
            </div>
        </div>
    )
}

export default AppLayout