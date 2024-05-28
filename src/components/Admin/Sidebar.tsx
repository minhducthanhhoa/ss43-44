import React from 'react'
import { ListGroup } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <div>
        <div className="sidebar">
            <ListGroup>
                <ListGroup.Item action href="#">
                Dashboard
                </ListGroup.Item>
                <ListGroup.Item action href="#">
                Users
                </ListGroup.Item>
                <ListGroup.Item action href="#">
                Products
                </ListGroup.Item>
                <ListGroup.Item action href="#">
                Orders
                </ListGroup.Item>
                <ListGroup.Item action href="#">
                Settings
                </ListGroup.Item>
            </ListGroup>
        </div>
    </div>
  )
}
