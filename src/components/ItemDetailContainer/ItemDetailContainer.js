import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";
import { useNotificationServices } from '../../services/notification/NotificationServices';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [showDetails, setShowDetails] = useState(false);
    const {productId} = useParams()

    const setNotification = useNotificationServices()

  
    
      useEffect(() => {
        setLoading(true);
        getDoc(doc(firestoreDb, `products/${productId}`))
          .then((response) => {
            const product = { productId: response.id, ...response.data() };
            setProduct(product);
          })
          .catch((error) => {
            setNotification('error',`Product not found: ${error}`)
          }) 
          .finally(() => {
            setLoading(false);
            setShowDetails(true);
          });
      }, [productId]); // eslint-disable-line

  
    return(
        <div>
      {showDetails && <ItemDetail product={product} />}
      {loading && <p>Loading...</p>}
    </div>
    )
}
export default ItemDetailContainer