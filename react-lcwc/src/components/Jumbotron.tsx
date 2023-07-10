import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {  faCode, faSearch, faFile, faServer } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';

const Jumbotron = () => {
  return (
    <>
    
    <Row className="p-4 mb-4 bg-body-tertiary rounded-3">
        <Container className="container-fluid py-5">
            <h1 className="display-5 fw-bold">LCWC++</h1>
            <p className="fs-4">LCWC++ is an unofficial, open-source project aimed at modernizing the Lancaster County-Wide Communications (LCWC) web service and offering easy access to active and history incident data.</p>
        </Container>

        <Row>

            <Col className='col-sm-12 col-md-6 col-lg-3 text-center mb-5'>
                <h3 className="fw-normal"><FontAwesomeIcon icon={faSearch} /> Search</h3>
                <p>Search for incidents both past and present.</p>
                <p><a className="btn btn-secondary" href="#">Coming Soon</a></p>
            </Col>

            <Col className='col-sm-12 col-md-6 col-lg-3 text-center mb-5'>
                <h3 className="fw-normal"><FontAwesomeIcon icon={faCode} /> REST API</h3>
                <p>Programmatic access to real-time and archived incident information.</p>
                <p><a className="btn btn-secondary" href="#">Coming Soon</a></p>
            </Col>

            <Col className='col-sm-12 col-md-6 col-lg-3 text-center mb-5'>
                <h3 className="fw-normal"><FontAwesomeIcon icon={faGithub} /> Open Source</h3>
                <p>All code is public and contributions are welcome!</p>
                <p><a className="btn btn-secondary" href="#"> Contribute</a></p>
            </Col>

            <Col className='col-xs-12 col-sm-12 col-md-6 col-lg-3 text-center mb-5'>
                <h3 className="fw-normal"><FontAwesomeIcon icon={faServer} /> Stability</h3>
                <p>Not being hosted on a ThinkPad X300 using coffee shop Wi-FI</p>
                
            </Col>
        </Row>
    </Row>

    </>
  )
}

export default Jumbotron