import axios from "axios";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { useQuery } from "react-query"

const IncidentPage = () => {
    let { incidentNumber } = useParams();

  const { isLoading, isError, data, error, refetch } = useQuery(["incident"], () =>
  axios
    .get("http://127.0.0.1:8000/api/v1/incidents/active/" + incidentNumber)
    .then((res) => res.data)
  );
  
  if (isLoading) return <p>Loading...</p>
  
  if (error) return <p>ERROR</p>

  return (
    <>

    <Container>

    <Row>

        <h1 className="mb-5">Incident #{data.number}</h1>

        <Col className='md-6'>
            <h4 className="mb-5">Details</h4>

            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Category</td>
                        <td>{data.category}</td>
                    </tr>
                    <tr>
                        <td>Priority</td>
                        <td>{data.priority ?? 'N/A'}</td>
                    </tr>
                    <tr>
                        <td>Agency</td>
                        <td>{data.agency}</td>
                    </tr>
                    <tr>
                        <td>Municipality</td>
                        <td>{data.municipality}</td>
                    </tr>
                    <tr>
                        <td>Intersection</td>
                        <td>{data.intersection}</td>
                    </tr>
                </tbody>
            </Table>
        </Col>

        <Col className='md-6'>

        </Col>
    </Row>


    </Container>





    </>
  )
}

export default IncidentPage