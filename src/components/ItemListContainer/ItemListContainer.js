import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../asyncmock';
import { useParams } from 'react-router-dom';
/* import { useNotificationServices } from '../../services/notification/NotificationServices' */

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();

  /* const setNotification = useNotificationServices() */

  useEffect(() => {
    if (categoryId) {
      setTimeout(() => {
        getProductsByCategory(categoryId).then((products) => {
          setProducts(products);
          setLoading(false);
        });
      }, 2000);
    } else {
      getProducts().then((products) => {
        setProducts(products);
        setLoading(false);
      });
    }
  }, [categoryId]);
    

  return <div>
      <h1 className='titulo'>PRODUCTS</h1>
      <div className="products">
      {
                loading ? 
                    <h1>Loading...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No products found!</h1>
            }
            </div>
  </div>;
};


export default ItemListContainer