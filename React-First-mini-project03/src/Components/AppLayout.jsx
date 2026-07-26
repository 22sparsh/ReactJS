import React from 'react'
import LeftSection from './left/LeftSection'
import MidSection from './Mid/MidSection'
import Note from './Right/Note'

const AppLayout = () => {
    return (
        <div className="grid  grid-rows-[1fr_auto] grid-cols-[250px_260px_1fr] bg-white h-screen">
            <LeftSection />
            <MidSection />
            <Note />
            <div className="col-span-3 border-t-2  border-gray-200">
                Footer
            </div>
        </div>
    )
}

export default AppLayout