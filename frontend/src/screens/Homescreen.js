import React from "react"
import products from "../product"
import { Row, Col} from "react-bootstrap"
import Product from "../components/Product"

const Homescreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product product = {product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Homescreen
