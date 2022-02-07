import React from 'react';
import './ItemListContainer.css';
import ProductItem from '../ProductItem/ProductItem';

export const ItemListContainer = () => {
  return <div>
      <h1 className='titulo'>PRODUCTS</h1>
      <h3 className='subtitle'>There will be more products for you very soon!</h3>
      <ProductItem />
  </div>;
};
