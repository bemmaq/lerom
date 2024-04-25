import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Room from './pages/Catalog/livingRooms/Room'
import New from './pages/Catalog/newProducts/New'
import Hallways from './pages/Catalog/hallways/Hallways'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/room'element={<Room/>}/>
        <Route path='/new'element={<New/>}/>
        <Route path='/hall'element={<Hallways/>}/>
      </Routes>
    </div>
  )
}

export default App