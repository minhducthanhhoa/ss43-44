import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import Sidebar from './Sidebar';
import Content from './Content';
import "./Admin.scss"

export default function Admin() {
  return (
    <div>
        <div className="app">
            <Header />
            <Container fluid>
                <Row>
                <Col md={2} className="sidebar-col">
                    <Sidebar />
                </Col>
                <Col md={10} className="content-col">
                    <Content />
                </Col>
                </Row>
            </Container>
    </div>
    </div>
  )
}
