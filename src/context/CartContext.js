import { createContext, useState } from "react"

const Context = createContext()

export const CartContext = ({ children }) => {
    const [products, setProducts] = useState([])  
    console.log(products)

    const addItem = (item, quantity) => {

        const productToAdd = {
            ...item,
            quantity
        } 

        isInCart(item.id) ? updateItemInCart(productToAdd) : addItemToCart(productToAdd) 
    }

    const isInCart = (id) => {
        return products.some(prod => prod.id === id)
    }

    const updateItemInCart = (productToAdd) => {
        const updatedCart = products.map(prod => {
            if(prod.id === productToAdd.id) {
                const updatedProduct = {
                    ...prod,
                    quantity: prod.quantity + productToAdd.quantity
                }
                return updatedProduct
            } else {
                return prod
            }
        })

        setProducts(updatedCart)
    }

    const addItemToCart = (productToAdd) => {
        setProducts([...products, productToAdd])
    }

    const removeItem = (id) => {
        const newProducts = products.filter(prod => prod.id !== id)
        setProducts(newProducts)
    }

    const clearCart = () => {
        setProducts([])
    }

    const getTotal = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    return (
        <Context.Provider value={{
            products,
            addItem,
            removeItem,
            clearCart,
            getTotal,
            getQuantity
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context