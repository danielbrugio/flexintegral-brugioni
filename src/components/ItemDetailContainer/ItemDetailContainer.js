import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const {productId} = useParams()

    
    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })
        
    }, [productId])

    return(
     <ItemDetail product={product} />
    )
}
export default ItemDetailContainer