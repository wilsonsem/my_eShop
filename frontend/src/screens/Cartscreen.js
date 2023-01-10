import React, { useEffect } from "react"
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ }) => {

  const params = useParams()
  const location = useLocation()
  const productId =  params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  // console.log(qty)

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  console.log(cartItems)

  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div>
      <h1>CART</h1>
    </div>
  )
}

export default CartScreen

