import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { useNotificationServices } from "../../services/notification/NotificationServices";

const ItemDetail = ({ product, quantity }) => {
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  const setNotification = useNotificationServices();

  const onAdd = (quantity) => {
    setCounter(quantity);
    addItem(product, quantity);
    setNotification("success", `${product.name} added to Cart`);
  };

  return (
    <div className="container">
      <Card className="itemCard">
        <CardHeader
          className="itemHeader"
          action={
            <Typography variant="h6" color="textPrimary">
              ${product.price}
            </Typography>
          }
          title={product.name}
          subheader={product.description}
        />
        <CardMedia
          className="itemImg"
          component="img"
          image={product.img}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Category: {product.category}
          </Typography>
        </CardContent>
        <CardActions className="cardFooter">
          {counter ? (
            <Link to="/cart">
              <Button name="Ckeckout" />
            </Link>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          )}
        </CardActions>
      </Card>
    </div>
  );
};
export default ItemDetail;

