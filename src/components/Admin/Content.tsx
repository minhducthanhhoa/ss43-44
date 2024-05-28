import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

export default function Content() {
  return (
    <div>
         <div className="content">
            <Row>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Users</Card.Title>
                    <Card.Text>100 active users</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Products</Card.Title>
                    <Card.Text>50 active products</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Orders</Card.Title>
                    <Card.Text>25 new orders</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    </div>
  )
}
