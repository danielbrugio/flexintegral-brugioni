import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [showDetails, setShowDetails] = useState(false);
    const {productId} = useParams()

    
    useEffect(() => {
        getProducts().then((products) => {
          setProduct(products[parseInt(productId)]);
          setLoading(false);
          setShowDetails(true);
        });
      }, [productId]);

  
    return(
        <div>
      {showDetails && <ItemDetail product={product} />}
      {loading && <p>Loading...</p>}
    </div>
    )
}
export default ItemDetailContainer