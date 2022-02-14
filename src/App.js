import React from 'react';
/* import ClassCounter from './components/ClassCounter/ClassCounter';
import { FunctionCounter } from './components/FunctionCounter/FunctionCounter'; */
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar />
    {/* <FunctionCounter />
    <ClassCounter /> */}
    <ItemListContainer />
    </>
  );
}

export default App;
