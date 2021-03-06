import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useNotificationServices } from "../../services/notification/NotificationServices";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  const setNotification = useNotificationServices();

  useEffect(() => {
    setLoading(true);

    getProductById(productId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        setNotification("error", `Product not found: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productId]); // eslint-disable-line

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <h1>Loading...</h1>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <h1>Product not found</h1>
      )}
    </div>
  );
};
export default ItemDetailContainer;
