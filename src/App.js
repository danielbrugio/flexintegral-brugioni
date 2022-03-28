import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContext } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationServicesProvider } from './services/notification/NotificationServices';
import Footer from './components/Footer/Footer';

export const MyContext = React.createContext();

const App = () => {

  return (
    <div>
      <NotificationServicesProvider>
      <CartContext>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer />} />
      <Route path='/detail/:productId' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      </CartContext>
      </NotificationServicesProvider>
    </div>
  );
}

export default App;
