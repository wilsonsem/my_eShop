import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, FormControl } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
  
const Productscreen = ({history}) => {

  const[ qty, setQty ] = useState(0)


  const dispatch = useDispatch()
  const productDetails =  useSelector( state => state.productDetails)
  const { loading, error, product } = productDetails
  const params = useParams()

  useEffect (()=> {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params.id])

  const addToCartHandler = () =>{
    history.push(`/cart/${params.id}?qty=${qty}`)
    console.log(history)
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
                  <ListGroupItem>
                    <h4>{product.name}</h4>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Rating value={product.Rating} text={`${product.numReviews} reviews`} />
                  </ListGroupItem>
                  <ListGroupItem>
                    Price : {product.price}
                  </ListGroupItem>
                  <ListGroupItem>
                    Description : {product.description}
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroupItem>
                      <Row>
                        <Col>Price:</Col>
                        <Col><strong>${product.price}</strong></Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>Status:</Col>
                        <Col>{product.countInStock > 0 ? 'Instock' : 'Out of Stock'}</Col>
                      </Row>
                    </ListGroupItem>

                    { product.countInStock > 0 && (
                      <ListGroupItem>
                        <Col>Qty</Col>
                        <Col>
                        <FormControl as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                          {
                            [...Array(product.countInStock).keys()].map(x => (
                              <option key= {x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))
                          }
                        </FormControl>
                        </Col>
                      </ListGroupItem>
                    )}
                    <ListGroupItem>
                      <Button 
                        onClick={addToCartHandler}
                        className='btn-block' 
                        type='button' disabled={product.countInStock === 0}>
                        ADD TO CART
                      </Button>
                    </ListGroupItem>
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
