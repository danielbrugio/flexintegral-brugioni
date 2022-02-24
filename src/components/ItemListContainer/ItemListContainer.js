import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';


export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

    
  useEffect(() => {
    getProducts().then(item => {
        setProducts(item)
      }).catch(err  => {
        console.log(err)
    }).finally(() => {
        setLoading(false)
    })

    return (() => {
        setProducts()
    })          
}, [])



  return <div>
      <h1 className='titulo'>PRODUCTS</h1>
      <div className="products">
      {
                loading ? 
                    <h1>Cargando...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
            </div>
  </div>;
};


