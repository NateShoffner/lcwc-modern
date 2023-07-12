import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query"

interface IncidentPageProps {
  incidentID: number;
}

const IncidentPage = ({incidentID}: IncidentPageProps) => {

  const { isLoading, isError, data, error, refetch } = useQuery(["incident"], () =>
  axios
    .get("http://127.0.0.1:8000/api/v1/incidents/active/" + incidentID)
    .then((res) => res.data)
  );
  
  if (isLoading) return <p>Loading...</p>
  
  if (error) return <p>ERROR</p>

  return (
    <>

    <Container>
    <Row>
      <Col className='md-6'>
        <h1>Incident #{data.number}</h1>
        <p>{data.description}</p>
      </Col>

      <Col className='md-6'>
        <h1>Incident #{data.number}</h1>
        <p>{data.description}</p>
      </Col>
    </Row>


    </Container>





    </>
  )
}

export default IncidentPage