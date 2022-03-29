import "./CartItem.css";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CartContext from "../../context/CartContext";
import Button from "../Button/Button";

const CartItem = ({ id, name, img, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div className="container">
      <Card className="itemCard">
        <CardHeader className="itemHeader" title={name} />
        <CardMedia className="itemImg" component="img" image={img} alt={name} />
        <CardActions className="cardFooter">
          <p className="InfoCartItem">Unit price: ${price}</p>
          <p className="InfoCartItem">Quantity: {quantity}</p>
          <p className="InfoCartItem">Subtotal: ${price * quantity}</p>
          <Button
            margin="10px"
            fontSize="10px"
            backgroundColor="red"
            colorText="white"
            handleClick={() => handleRemove()}
            name="Remove from Cart"
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
