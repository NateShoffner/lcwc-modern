import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Badge, Button, Form } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { useEffect, useState } from 'react';
import { faHome, faTriangleExclamation, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetActiveIncidents } from '../../hooks/useGetIncidents';

const Navigation = () => {

    const activeIncidents = useGetActiveIncidents();
    let incidentCount = 0;

    if (activeIncidents.isError) {
        incidentCount = 0;
    }

    if (activeIncidents.isSuccess) {
        incidentCount = activeIncidents.data.length;
    }

  return (
    <>
    <Navbar expand="md" className="bg-body-tertiary fixed-top">
        <Container>
            <Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link >LCWC++</Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">     
                <LinkContainer to="/">
                    <Nav.Link className='mx-2'><FontAwesomeIcon icon={faHome} className='me-2' /> Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="incidents">
                    <Nav.Link className='mx-2'><FontAwesomeIcon icon={faTriangleExclamation} className='me-2' /> Active Incidents: <Badge bg="danger" className='ms-2'>{ incidentCount }</Badge></Nav.Link>
                </LinkContainer>
                <LinkContainer to="map">
                    <Nav.Link className='mx-2'><FontAwesomeIcon icon={faMap} className='me-2' /> Incident Map</Nav.Link>
                </LinkContainer>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default Navigation