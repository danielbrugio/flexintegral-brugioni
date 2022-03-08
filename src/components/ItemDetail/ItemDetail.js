import React, { useContext, useState } from "react";
import './itemDetail.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { useNotificationServices } from '../../services/notification/NotificationServices'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  const setNotification = useNotificationServices()

  const handleOnAdd = (quantity) => {
    setCounter(quantity)

    const productToAdd = {
      id,
      name,
      price,
      img,
      category,
      description,
      stock
  }

  addItem(productToAdd, quantity)
  setNotification('success',`Se agrego ${name} al carrito`)
}


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
              ${price}
            
              </Typography>
            }
        title={name}
        subheader={description}
      />
      <CardMedia
        className='itemImg'
        component="img"
        image={img}
        alt={name}
      />
      <CardContent>
         <Typography variant="body2" color="text.secondary">
         Category: {category}
        </Typography>
      </CardContent>
      <CardActions sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center' }} >
       {counter > 0 ? 
        <Link to="/cart"> <Button name="Ckeckout" /> </Link>    :
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
      }
      </CardActions>
      
    </Card>
    </>
      )
}

export default ItemDetail