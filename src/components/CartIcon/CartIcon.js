import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import React, { useContext } from 'react';
import CartContext from "../../context/CartContext";


export const CartIcon = () => {
  const { getQuantityTotal } = useContext(CartContext);

  return <div>
      <IconButton aria-label='show cart items'>
          <Badge badgeContent={getQuantityTotal()} color="info" >
          <ShoppingCart fontSize='large' color='info' />
          </Badge>
          </IconButton>
  </div>;
};
