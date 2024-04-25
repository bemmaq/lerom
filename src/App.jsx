import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Hallways from './pages/Catalog/Hallways/Hallways';
import Home from './pages/Home/Home';
import Room from './pages/Catalog/LivingRooms/Room';
import NewProduct from './pages/Catalog/NewProduct/NewProduct';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room' element={<Room />} />
        <Route path='/hall' element={<Hallways />} />
        <Route path='/new' element={<NewProduct />} />
      </Routes>
    </div>
  );
};

export default App;
