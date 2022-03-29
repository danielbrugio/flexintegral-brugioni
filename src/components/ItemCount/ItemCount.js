import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="buttons">
      <div className="buttonCount">
        <Button variant="text" onClick={() => decrement()}>
          -
        </Button>
        <h5>{count}</h5>
        <Button variant="text" onClick={() => increment()}>
          +
        </Button>
      </div>
      <div>
        {count === 0 ? (
          <Button
            margin=".5rem 0 0 0"
            widthButton="100%"
            name="Invalid quantity"
          />
        ) : (
          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            aria-label="Add to Cart"
            onClick={() => onAdd(count)}
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
