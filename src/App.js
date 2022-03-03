import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContext } from './context/CartContext';
import Cart from './pages/Cart/Cart';

export const MyContext = React.createContext();

const App = () => {

  return (
    <CartContext>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/category/:categoryId' element={<ItemListContainer />} />    
    <Route path='/detail/:productId' element={<ItemDetailContainer />} />    
    <Route path='/cart' element={<Cart />} />    
    </Routes>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
