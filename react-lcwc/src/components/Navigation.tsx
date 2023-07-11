import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button, Form } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
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
                    <Nav.Link >Incidents</Nav.Link>
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