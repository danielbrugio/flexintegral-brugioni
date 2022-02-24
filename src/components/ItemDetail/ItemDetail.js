import React, { useState } from "react";
import './itemDetail.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Select from "../Select/Select";

const InputCount = ({onConfirm, stock, initial=0}) => {
  const [count, setCount] = useState(initial)

  const handleChange = ({target}) => {
      if(target.value <= stock && target.value >= 0) {
          setCount(target.value)
      }
  }

  return (
      <div>
          <input type='number' onChange={handleChange} value={count}/>
          <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
      </div>
  )
}

const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
      if(count < stock) {
          setCount(count + 1)
      }
  }

  const decrement = () => {
      if(count > initial) {
          setCount(count - 1)
      }
  }

  return (
      <div>
          <p>{count}</p>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
      </div>
  )
}

const ItemDetail = ({product, inputType="button"}) => {
  const [option, setOption] = useState()
  const options = [{ value: 1, text: 'Azul'}, { value:2, text:'Rojo'}]

  const optionSelected = (value) => {
      console.log(value)
      setOption(value)
  }

  const Count = inputType === "button" ? ButtonCount : InputCount

  const onConfirm = () => {
      console.log('agregue al carrito')
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
        <Select options={options} onSelect={optionSelected} defaultOption={1}/>
      </CardContent>
      <CardActions sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center' }} >
       <Count onConfirm={onConfirm} stock={product.stock} inicial={1}/>
      </CardActions>
      <h3>El valor del select es {option}</h3>
    </Card>
    </>
      )
}

export default ItemDetail