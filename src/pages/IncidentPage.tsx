import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { MarkerF } from '@react-google-maps/api'
import { Coordinates, Unit } from "@api/incident.types";
import { useGetIncident } from "@hooks/useGetIncident";
import { normalizeAgency, normalizeDescription } from "@utils/IncidentUtils";
import { normalizeName } from "normalize-text";

interface MapProps {
    coords: Coordinates;
}

function IncidentStatus({status}: {status: string}) {
    if (status === 'Active') {
        return <span className='badge bg-danger'>{status}</span>
    } else if (status === 'Resolved') {
        return <span className='badge bg-success'>{status}</span>
    } else {
        return <span className='badge bg-secondary'>{status}</span>
    }
}

function Map({coords}: MapProps) {
    const center = { lat: coords.latitude, lng: coords.longitude };
    return (
        <>      
        <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
        </GoogleMap>
      </>
    )
}

const IncidentPage = () => {
    let { incidentNumber } = useParams();

    let incidentNumber2 = Number(incidentNumber)

    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const incident = useGetIncident(incidentNumber2);

    if (incident.isLoading) {
        return (<Alert variant='info'>Loading...</Alert>)
    }
  
    if (incident.isError) {
        return (<Alert variant='danger'>Error Loading Incidents</Alert>)
    }
  
    if (incident.isSuccess) {
        return (
            <>
            <h1>Incident #{incident.data.number}</h1>
            <Row>
            <Col className='md-6'>
            
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Category</td>
                        <td>{incident.data.category}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{normalizeDescription(incident.data.description)}</td>
                    </tr>
                    <tr>
                        <td>Priority</td>
                        <td>{incident.data.priority ?? 'N/A'}</td>
                    </tr>
                    <tr>
                        <td>Agency</td>
                        <td>{normalizeAgency(incident.data.agency)}</td>
                    </tr>
                    <tr>
                        <td>Municipality</td>
                        <td>{normalizeName(incident.data.municipality)}</td>
                    </tr>
                    <tr>
                        <td>Intersection</td>
                        <td>{normalizeName(incident.data.intersection)}</td>
                    </tr>
                    <tr>
                        <td>Units</td>
                        <td>
                            <ul className='list-unstyled'>
                                {
                                    incident.data.units.map((unit: Unit) => (
                                        <li key={unit.id}>{unit.name}</li>
                                    ))
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </Table>

            </Col>

            <Col className='md-6'>
            {!isLoaded ? (
            <h1>Loading Map...</h1>
        ) : (
            <Map coords={incident.data.coordinates}  /> 
        )}
            </Col>
            </Row>
            </>
        )
    }

    return (<></>)
}

export default IncidentPage
