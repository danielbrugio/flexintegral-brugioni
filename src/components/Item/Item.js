import * as React from 'react';
import './item.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';


export default function Item({product}) {
  const handleOnAdd = (quantity) => {
    console.log(`${quantity} items added to cart`);
  }

  
  return (
    <Card className='itemCard'>
      <CardHeader
      className='itemHeader'
      action={
              <Typography
              variant='h6'
              color='textPrimary'
              >
              ${product.price}
            
              </Typography>
            }
        title={product.name}
        subheader={product.description}
      />
      <CardMedia
        className='itemImg'
        component="img"
        image={product.img}
        alt={product.name}
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
        - Cámara 64MP HR con estabilizador de imagen
        </Typography>
        <Typography variant="body2" color="text.secondary">
        - Resistencia a agua y polvo IP67
        </Typography>
        <Typography variant="body2" color="text.secondary">
        - Batería de 2 días
        </Typography>
        <Typography variant="body2" color="text.secondary">
        - Infinity-O Display
        </Typography> */}
      </CardContent>
      <CardActions sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center' }} >
      <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
      </CardActions>
    </Card>
  );
}

