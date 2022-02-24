import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/category/:categoryId' element={<ItemListContainer />} />    
    <Route path='/detail/:productId' element={<ItemDetailContainer />} />    
    </Routes>
    </BrowserRouter>
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default App;
