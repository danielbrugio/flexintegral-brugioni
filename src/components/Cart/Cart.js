import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { useNotificationServices } from "../../services/notification/NotificationServices"

const Cart = () => {
    const { products, removeItem, getTotal } = useContext(CartContext)

    const setNotification = useNotificationServices()

    if(products.length === 0) {
        return <h1>There is no items in Cart</h1>
    }

    const handleRemoveItem = (id, name) => {
        removeItem(id)
        setNotification('success', `${name} remove from Cart`)
    }

    return (
        <>
            <h1>Cart</h1>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <h3>{prod.name}</h3>
                            <h3>Cantidad {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
            })}
            <h1>Total: ${getTotal()}</h1>
        </>
    )
}

export default Cart