import React from 'react';
import './itemCount.css';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useState} from 'react';

const ItemCount = ({ stock = 1, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
    
  }

  const increment = () => {
    if (quantity < stock)
    setQuantity(quantity + 1)
  }

  return (
    <div className='buttons'>
    <div className='buttonsQuantity'>
        <Button variant="text"  onClick={decrement}  >
              -
          </Button>
          <h5>{quantity}</h5>
          <Button variant="text"  onClick={increment}  >
              +
          </Button>
      </div>
        <div className='buttonsAddToCart'>
          <Button variant="contained" startIcon={<AddShoppingCartIcon  />} aria-label="Add to Cart" onClick={() => onAdd(quantity)} >
          Add to cart
          </Button>
        </div>
    </div>
  )
}

export default ItemCount