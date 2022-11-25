import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
// import Product from '../components/Product'

const Productscreen = () => {

  const [product, setProduct] = useState({})

  useEffect (()=> {
    const fetchProduct = async () => {

      // const { id } = useParams()
      // console.log(id)
      // const { id } = req.params
      const { data } = await axios.get( `/api/products/5`)


    setProduct(data)
    }

    fetchProduct()
  }, [])

  return <>
   <Link className='btn btn-dark my-3' to = '/'>
    go back
  </Link>
  <Row>
    <Col md={6}>
      <Image src={product.image} alt={product.name} fluid />
    </Col>
    <Col md={3}>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <h3>{product.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <Rating value = {product.Rating} text={`${product.numReviews} reviews`}/>
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
            <Button className='btn-block' type = 'button' disabled ={product.countInStock === 0}>
              ADD TO CART
            </Button>
          </ListGroup.Item>       
        </ListGroup>
      </Card>
    </Col>
  </Row>
  </>
}

export default Productscreen
