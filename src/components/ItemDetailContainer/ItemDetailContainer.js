import { useEffect, useState } from 'react'
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    
    useEffect(() => {
        getProduct().then(product => {
            console.log(product)
            setProduct(product)
        })
    }, [])

    return(
     <ItemDetail product={product} />
    )
}
export default ItemDetailContainer