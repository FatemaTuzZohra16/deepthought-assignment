import React from 'react'
import TitlePart from '../TitlePart/TitlePart'
import Intro from '../Intro/Intro'
// import Card from '../Cards/Card'
import TaskPage from '../Cards/TaskPage'

const ContentArea = () => {
  return (
    <div className='flex-grow'>
        <TitlePart />
        <Intro />
        <TaskPage />
    </div>
  )
}

export default ContentArea