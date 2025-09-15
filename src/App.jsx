import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './tasks/task1/components/Header/Header'
import MainContentArea from './tasks/task1/components/MainContentArea/MainContentArea'

function App() {

  return (
    <>
      <Header />
      <MainContentArea />
    </>
  )
}

export default App
