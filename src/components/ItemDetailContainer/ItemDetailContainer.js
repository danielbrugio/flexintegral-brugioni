import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState('button')
    const {productId} = useParams()

    
    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })
        
    }, [productId])

    const handleCount = () => {
        if(counter === 'button'){
            setCounter('input')
        } else {
            setCounter('button')
        }
    }

    return(
        <div className="ItemDetailContainer" >
            <button onClick={handleCount}>Cambiar count</button>
            { 
                loading ? 
                    <h1>Cargando...</h1> :
                product ? 
                    <ItemDetail  product={product} inputType={counter}/> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )
}
export default ItemDetailContainer