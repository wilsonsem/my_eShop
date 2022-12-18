import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
  
const Productscreen = () => {

  const dispatch = useDispatch()
  const productDetails =  useSelector( state => state.productDetails)
  const { loading, error, product } = productDetails
  const params = useParams()

  useEffect (()=> {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params.id])

  if(product){
    console.log("true")
  }else{
    console.log("fffffff")
  }

  return <>
  { 
    loading ? <Loader /> :
    error ? <Message variant = 'danger'>{error}</Message> :
  (
  <><h1>{product.name}</h1><Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h4>{product.name}</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating value={product.Rating} text={`${product.numReviews} reviews`} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Price : {product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Description : {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col><strong>${product.price}</strong></Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>{product.countInStock > 0 ? 'Instock' : 'Out of Stock'}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                        ADD TO CART
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row><Link className='btn btn-dark my-3' to='/'>
                go back
              </Link></>
  
        )
  }
  </>
}

export default Productscreen
