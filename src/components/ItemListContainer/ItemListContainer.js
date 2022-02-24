import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';


export const ItemListContainer = () => {
  const [products, setProducts] = useState([])

    
  useEffect(() => {
    getProducts().then(item => {
        setProducts(item)
    })

    return (() => {
        setProducts()
    })          
}, [])



  return <div>
      <h1 className='titulo'>PRODUCTS</h1>
      <div className="products">
            
               <ItemList products={products} />
                   
            </div>
  </div>;
};
