import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import galaxy from '../assets/galaxy.png';
import ItemCount from '../ItemCount/ItemCount';


export default function ProductItem() {

  const handleOnAdd = (quantity) => {
    console.log(`${quantity} items added to cart`);
  }

  
  return (
    <Card sx={{ 
      maxWidth: 345 }}>
      <CardHeader
      action={
              <Typography
              variant='h6'
              color='textPrimary'
              >
              $65.000
            
              </Typography>
            }
        title="Galaxy A72"
        subheader="SM-A725MZKAARO"
      />
      <CardMedia
        component="img"
        height="220"
        image={galaxy}
        alt="Samsung Galaxy"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
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
        </Typography>
      </CardContent>
      <CardActions sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center' }} >
      <ItemCount stock={10} initial={1} onAdd={handleOnAdd} />
      </CardActions>
    </Card>
  );
}

