import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const param= useParams()
    console.log(param.courseId);
    
  return (
    <div>CourseDetails</div>
  )
}

export default CourseDetails