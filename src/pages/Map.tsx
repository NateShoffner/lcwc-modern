import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  LoadScriptProps,
  InfoWindowF,
} from "@react-google-maps/api";
import { useGetActiveIncidents } from "@hooks/useGetIncidents";
import { Alert, Col, Row, Table } from "react-bootstrap";
import { Incident } from "@api/incident.types";
import { useState } from "react";
import { normalizeAgency, normalizeDescription } from "@utils/IncidentUtils";
import { normalizeName } from "normalize-text";

interface IncidentMapProps {
  incidents: Incident[];
}

const googleMapsLibraries: LoadScriptProps["libraries"] = ["visualization"];

const IncidentMap = ({ incidents }: IncidentMapProps) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedIncident, setselectedIncident] = useState(null);
  const lanCo = { lat: 40.06879178, lng: -76.23630587 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: googleMapsLibraries,
  });

  if (!isLoaded) {
    return <h1>Loading Map...</h1>;
  } else {
    let incidentCoords = Array<google.maps.LatLng>();
    incidents.map((incident) => {
      incidentCoords.push(
        new google.maps.LatLng(
          incident.coordinates.latitude,
          incident.coordinates.longitude,
        ),
      );
    });

    const containerStyle = {
      width: "800px",
      height: "400px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    };

    const options = {
      disableDefaultUI: true,
    };

    const handleActiveMarker = (marker: any) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };

    const handleOnLoad = (map: google.maps.Map) => {
      const bounds = new google.maps.LatLngBounds();
      incidentCoords.forEach((coord) => {
        bounds.extend(coord);
      });
      map.fitBounds(bounds);
    };

    return (
      <Row>
        <Col xs={12} md={6}>
          <GoogleMap
            zoom={12}
            options={options}
            center={lanCo}
            onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
            mapContainerClassName="full-map-container"
            mapContainerStyle={containerStyle}
          >
            {incidents.map((incident) => (
              <MarkerF
                key={incident.number}
                onClick={() => handleActiveMarker(incident.number)}
                position={
                  new google.maps.LatLng(
                    incident.coordinates.latitude,
                    incident.coordinates.longitude,
                  )
                }
              >
                {activeMarker === incident.number ? (
                  <InfoWindowF
                    onCloseClick={() => setActiveMarker(null)}
                    position={
                      new google.maps.LatLng(
                        incident.coordinates.latitude,
                        incident.coordinates.longitude,
                      )
                    }
                  >
                    <div>
                      <h6>{incident.category} Incident</h6>

                      <Table striped bordered hover>
                        <tbody>
                          <tr>
                            <td>Incident Number</td>
                            <td>{incident.number}</td>
                          </tr>
                          <tr>
                            <td>Priority</td>
                            <td>{incident.priority}</td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td>{normalizeName(incident.municipality)}</td>
                          </tr>
                          <tr>
                            <td>Dispatched</td>
                            <td>
                              {new Intl.DateTimeFormat("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                              }).format(Date.parse(incident.dispatched_at))}
                            </td>
                          </tr>
                          <tr>
                            <td>Primary Agency</td>
                            <td>{normalizeAgency(incident.agency)}</td>
                          </tr>
                          <tr>
                            <td>Current Units</td>
                            <td>
                              {incident.units
                                .map((unit) => unit.short_name)
                                .join(", ")}
                            </td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td>{incident.intersection}</td>
                          </tr>

                          <tr>
                            <td>Public Type</td>
                            <td>{incident.description}</td>
                          </tr>
                        </tbody>
                      </Table>

                      <a href={`/incident/${incident.number}`}>View Incident</a>
                    </div>
                  </InfoWindowF>
                ) : null}
              </MarkerF>
            ))}
          </GoogleMap>
        </Col>
      </Row>
    );
  }
};

const MapPage = () => {
  const activeIncidents = useGetActiveIncidents();

  if (activeIncidents.isLoading) {
    return <Alert variant="info">Loading...</Alert>;
  }

  if (activeIncidents.isError) {
    return <Alert variant="danger">Error Loading Incidents</Alert>;
  }

  if (activeIncidents.isSuccess) {
    return (
      <>
        <div className="map">
          <div className="map-container">
            <h2 className="mb-5">Incident Map</h2>
            <IncidentMap incidents={activeIncidents.data} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="mb-5">Incident Map</h2>
      <Alert variant="danger">Error Loading Incidents</Alert>
    </>
  );
};

export default MapPage;
