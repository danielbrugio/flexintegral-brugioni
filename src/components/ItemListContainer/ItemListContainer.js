import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


export const ItemListContainer = () => {
  const [products, setProducts] = useState([])

    
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
        .then(response => {
           return response.json()
        }).then(res => {
            setProducts(res.results)
            console.log(res.results)
        })
        
}, [])



  return <div>
      <h1 className='titulo'>PRODUCTS</h1>
      <div className="products">
            
               <ItemList products={products} />
                   
            </div>
  </div>;
};
