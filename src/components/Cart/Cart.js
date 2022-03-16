import { useContext, useState } from "react"
import CartContext from '../../context/CartContext'
import { useNotificationServices } from "../../services/notification/NotificationServices"
import { addDoc, collection,updateDoc, doc, getDoc, writeBatch } from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase"

const Cart = () => {
    const { products, removeItem, clearCart, getTotal } = useContext(CartContext)
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderFinished, setOrderFinished] = useState(false);
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        email: ''
    })


    const confirmOrder = () => {
          setProcessingOrder(true);

    const objOrder = {
        buyer: {
            name: 'Daniel',
            phone: '3516080591',
            address: 'Armengol Tecera 95'
        },
        items: products,
        total: getTotal(),
        date: new Date()
    }
    addDoc(collection(firestoreDb, 'orders'), objOrder).then((response) => {
        console.log(response)
        setProcessingOrder(false)
        clearCart()
    })
    }
    /* const confirmOrder = () => {
        if (
          contact.phone !== "" &&
          contact.address !== "" &&
          contact.comment !== "" &&
          contact.name !== ""
        ) {
          setProcessingOrder(true);

    const objOrder = {
        buyer: {
            name: 'Daniel',
            phone: '3516080591',
            address: 'Armengol Tecera 95'
        },
        items: products,
        total: getTotal(),
        date: new Date()
    }
    console.log(objOrder)
    const batch = writeBatch(firestoreDb);
      const outOfStock = [];

      const executeOrder = () => {
        if (outOfStock.length === 0) {
          addDoc(collection(firestoreDb, "orders"), objOrder)
            .then(({ id }) => {
              batch.commit().then(() => {
                clearCart();
                setNotification(
                  "success",
                  `La orden se genero exitosamente, su numero de orden es: ${id}`
                );
                setOrderFinished(true);
              });
            })
            .catch((error) => {
              setNotification("error", error);
            })
            .finally(() => {
              setProcessingOrder(false);
            });
        } else {
          outOfStock.forEach((prod) => {
            setNotification(
              "error",
              `El producto ${prod} no tiene stock disponible`
            );
            removeItem(prod);
          });
        }
    }

    objOrder.items.forEach((prod) => {
        getDoc(doc(firestoreDb, "products", prod.item.id))
          .then((response) => {
            if (response.data().stock >= prod.quantity) {
              batch.update(doc(firestoreDb, "products", response.id), {
                stock: response.data().stock - prod.quantity,
              });
            } else {
              outOfStock.push(response.data().album);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            executeOrder();
          })
          .finally(() => {
            setProcessingOrder(false);
          });
      });
    } else {
      setNotification(
        "error",
        "Debe completar los datos de contacto para generar la orden"
      );
    }
  }; */



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
                        <div key={prod.name} style={{ display: 'flex'}}>
                            <h3>{prod.name}</h3>
                            <h3>Cantidad {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
            })}
            <h1>Total: ${getTotal()}</h1>
            <button onClick={() => clearCart()} className="Button">
        Cancelar compra
      </button>
      <button onClick={() => confirmOrder()} className="Button">
        Confirmar Compra
      </button>
        </>
    )
}

export default Cart