import { Favorite } from '@mui/icons-material'
import React from 'react'
import "./../StyleSheet/Card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Cardd = ({ offerPrice, actualPrice, image, name }) => {

  const [count, setcount] = useState(null)
  return (
    <div className=' mt-3 card'>

      <Card style={{ width: '18rem' }}>
        <div className=' cart '><ShoppingCartIcon /> <span className='count'>{count}</span></div>
        <div className=' image'> <Card.Img variant="top" src={image} /></div>

        <Card.Body><div className='pt-2 svg'><Favorite /></div>
          <h3 className='name'>{name}</h3>
          <Card.Title>Offer-Price-   ${offerPrice}</Card.Title>
          <Card.Title className='price'>${actualPrice}</Card.Title>
          <Card.Text>
            Size - 5,6,7,8
          </Card.Text>

          <Button variant="primary" onClick={() => setcount(count + 1)}>Add </Button>
        </Card.Body>
      </Card></div>
  )
}

export default Cardd