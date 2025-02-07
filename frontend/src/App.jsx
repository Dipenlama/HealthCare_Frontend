import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App=() => {
  return (
    <div className='text-green-500'>
      tailwind testing
      <Routes>
        <Route path='/' element={<home/>}/>
      </Routes>
    </div>
  )
}

export default App