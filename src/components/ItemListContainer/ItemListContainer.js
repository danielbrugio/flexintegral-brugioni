import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();

  const setNotification = useNotificationServices()

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId).then(response => {
        setProducts(response)
    }).catch((error) => {
        setNotification('error', error)
    }).finally(() => {
        setLoading(false)
    })

    return (() => {
        setProducts()
    })          
}, [categoryId]) // eslint-disable-line

return (
  <div className="ItemListContainer">
      {
          loading ? 
              <h1>Cargando...</h1> :  
          products.length ? 
              <ItemList products={products}/> : 
              <h1>No se encontraron productos!</h1>
      }
  </div>
)    

}


export default ItemListContainer