import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import React from 'react';


export const CartIcon = () => {
  return <div>
      <IconButton aria-label='show cart items'>
          <Badge badgeContent={2} color="info" >
          <ShoppingCart fontSize='large' color='info' />
          </Badge>
          </IconButton>
  </div>;
};
