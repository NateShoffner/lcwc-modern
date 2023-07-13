import axios from "axios";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import {MarkerF} from '@react-google-maps/api'
import { useQuery } from "react-query"
import { useMemo } from "react";
import { Coordinates, Unit } from "../lcwc/incident";


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
    const center = useMemo(() => ({ lat: coords.latitude, lng: coords.longitude }), []);
  
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

    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: "AIzaSyBLLVgK6Cbix6hX4Ft73ZOH9G5dPBMtwWs"
      });

    const { isLoading, isError, data, error, refetch } = useQuery(["incident"], () =>
    axios
        .get("http://127.0.0.1:8000/api/v1/incident/" + incidentNumber)
        .then((res) => res.data)
    );


    if (error) return <p>ERROR</p>

  return (
    <>

    <Container>

    <Row>

        <Col className='md-6'>
        {!isLoaded ? (
            <h1>Loading Incident...</h1>
        ) : (
            <>
        <h1 className="mb-5">Incident #{data.number}</h1>

        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>Status</td>
                    <td><IncidentStatus status={data.status} /></td>
                </tr>
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
                <tr>
                    <td>Units</td>
                    <td>
                        <ul className='list-unstyled'>
                            {
                                data.units.map((unit: Unit) => (
                                    <li>{unit.name}</li>
                                ))
                            }
                        </ul>
                    </td>
                </tr>
            </tbody>
        </Table>
            </>
            )}
        </Col>

        <Col className='md-6'>
        {!isLoaded ? (
        <h1>Loading Map...</h1>
      ) : (
        <Map coords={data.coordinates}  /> 
      )}
        </Col>
    </Row>


    </Container>





    </>
  )
}

export default IncidentPage
