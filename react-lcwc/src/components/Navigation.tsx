import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Badge, Button, Form } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react';

const Navigation = () => {

    const [incidentCount, setIncidentCount] = useState(0);

    function getIncidents() {
        console.log("Getting incidents...");
        
        fetch(`${import.meta.env.VITE_API_BASE_URL}/incidents/active`).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            const incidents = jsonResponse;
            setIncidentCount(incidents.length);
            setTimeout(getIncidents, 5000);
        })
    }

    getIncidents();

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
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="incidents">
                    <Nav.Link >Active Incidents: <Badge bg="danger" className='ms-2'>{ incidentCount }</Badge></Nav.Link>
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