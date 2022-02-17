import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock'

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])

    
  useEffect(() => {
      getProducts().then(products => {
          console.log(products)
          setProducts(products)
      })
  }, [])



  return <div>
      <h1 className='titulo'>PRODUCTS</h1>
      <h3 className='subtitle'>There will be more products for you very soon!</h3>
      <div className="products">
            
               <ItemList products={products} />
                   
            </div>
  </div>;
};
