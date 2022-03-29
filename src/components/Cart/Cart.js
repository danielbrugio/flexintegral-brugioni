import { useState, useContext, useRef } from "react";
import "./Cart.css";
import Togglable from "../Togglable/Togglable";
import ContactForm from "../ContactForm/ContactForm";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import {
  writeBatch,
  getDocs,
  collection,
  addDoc,
  Timestamp,
  where,
  query,
  documentId,
} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";
import { useNotificationServices } from "../../services/notification/NotificationServices";
import Button from "../Button/Button";

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });
  const { products, clearCart, getTotal, removeItem } = useContext(CartContext);

  const contactFormRef = useRef();

  const setNotification = useNotificationServices();

  const confirmOrder = () => {
    if (
      contact.phone !== "" &&
      contact.address !== "" &&
      contact.email !== "" &&
      contact.name !== ""
    ) {
      setProcessingOrder(true);

      const objOrder = {
        buyer: contact,
        items: products,
        total: getTotal(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(firestoreDb);
      const outOfStock = [];

      const ids = objOrder.items.map((i) => i.id);

      getDocs(
        query(
          collection(firestoreDb, "products"),
          where(documentId(), "in", ids)
        )
      )
        .then((response) => {
          response.docs.forEach((docSnapshot) => {
            if (
              docSnapshot.data().stock >=
              objOrder.items.find((prod) => prod.id === docSnapshot.id).quantity
            ) {
              batch.update(docSnapshot.ref, {
                stock:
                  docSnapshot.data().stock -
                  objOrder.items.find((prod) => prod.id === docSnapshot.id)
                    .quantity,
              });
            } else {
              outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() });
            }
          });
        })
        .then(() => {
          if (outOfStock.length === 0) {
            addDoc(collection(firestoreDb, "orders"), objOrder).then(
              ({ id }) => {
                batch.commit();
                clearCart();
                setNotification(
                  "success",
                  `Order succesfully generated, your order ID is: ${id}`
                );
              }
            );
          } else {
            outOfStock.forEach((prod) => {
              setNotification(
                "error",
                `There are no available stock for ${prod.name}`
              );
              removeItem(prod.id);
            });
          }
        })
        .catch((error) => {
          setNotification("error", error);
        })
        .finally(() => {
          setProcessingOrder(false);
        });
    } else {
      setNotification("error", "Please complete contact information");
    }
  };

  if (processingOrder) {
    return <h1>Your order it's been processing</h1>;
  }

  if (products.length === 0) {
    return (
      <div className="cart">
        <h1>Cart</h1>
        <h2>There are no products in Cart</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="container">
        <div className="cartItems">
          {products.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
        </div>
        <div className="contactForm">
          <h3>Total: ${getTotal()}</h3>
          <Togglable
            buttonLabelShow={
              contact.phone !== "" &&
              contact.address !== "" &&
              contact.email !== "" &&
              contact.name !== ""
                ? "Edit contact"
                : "Add contact information"
            }
            ref={contactFormRef}
          >
            <ContactForm
              toggleVisibility={contactFormRef}
              setContact={setContact}
            />
          </Togglable>
          <div className="finalButtons">
            <Button
              margin="20px"
              backgroundColor="red"
              colorText="white"
              handleClick={() => clearCart()}
              name="Cancel"
            />
            <Button handleClick={() => confirmOrder()} name="Confirm" />
          </div>
          {contact.phone !== "" &&
            contact.address !== "" &&
            contact.email !== "" &&
            contact.name !== "" && (
              <div>
                <h4>Name: {contact.name}</h4>
                <h4>Telephone: {contact.phone}</h4>
                <h4>Address: {contact.address}</h4>
                <h4>Email: {contact.email}</h4>
                <Button
                  name="Delete contact information"
                  handleClick={() =>
                    setContact({ phone: "", address: "", email: "" })
                  }
                  backgroundColor="red"
                  colorText="white"
                />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
