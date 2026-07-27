import React, { useEffect, useRef, useState } from 'react'
import LeftSection from './left/ViewsTab'
import MidSection from './Mid/ActiveViewTab'
import Note from './Right/Note'

const AppLayout = () => {
    let views = [
    {
      id:0,
      name: "Notes",
      ico: "fa-regular fa-file-lines w-5  text-center text-base ml-2",
      content:{}
    },
    {
      id:1,
      name: "Starred",
      ico: "fa-regular fa-star w-5  text-center text-base ml-2",
      content:{}
    },
    {
      id:2,
      name: "Archived",
      ico: "fa-regular fa-bookmark w-5  text-center text-base ml-2 ",
      content:{}
    },
    {
      id:3,
      name: "Trash",
      ico: "fa-regular fa-trash-can w-5  text-center text-base ml-2",
      content:{}
    }
  ]
  const [activeview, setactiveview] = useState(views[0])
  const [prevrefid, setprevrefid] = useState(0)
  const viewsR = useRef({})
  useEffect(() => {
    viewsR.current[prevrefid]?.classList.remove("bg-white");
    viewsR.current[activeview.id]?.classList.add("bg-white");
  }, [activeview])
  
  
    return (
        <div className="grid  text-zinc-800 grid-rows-[1fr_auto] grid-cols-[250px_260px_1fr] bg-white h-screen">
            <LeftSection views={views} status={setactiveview}  refrence={viewsR} prevref={setprevrefid} midtop={activeview} />
            <MidSection status={activeview} />
            <Note />
            <div className="col-span-3 border-t-2  border-gray-200">
                Footer
            </div>
        </div>
    )
}

export default AppLayout