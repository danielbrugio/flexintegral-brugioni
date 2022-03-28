import * as React from 'react';
import './item.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";



export default function Item({product}) {
    
  return (
    <>
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
      <Typography variant="body2" color="text.secondary">
         Category: {product.category}
        </Typography>
      </CardContent>
      <CardActions sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center' }} >
      <footer>
        <Link to={`/detail/${product.id}`}>
        <Button name="Show Details" />
        </Link>
      </footer>
      </CardActions>
    </Card>
    </>
  );
}

