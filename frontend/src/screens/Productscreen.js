import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


// const Productscreen = ({}) => {
//   const { id } = useParams()
//   const params = useParams()
//   const product = products.find(p => p._id === id)
//   console.log(product)
//   return <div>{product.name}</div>;
// }

const Productscreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === (id));
  console.log(id)
  return <div>{product.name}</div>;
};

export default Productscreen
