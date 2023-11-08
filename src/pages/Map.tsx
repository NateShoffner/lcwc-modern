import { GoogleMap, HeatmapLayerF, MarkerF, useJsApiLoader, LoadScriptProps } from '@react-google-maps/api'
import { useGetActiveIncidents } from '@hooks/useGetIncidents';
import { Alert } from 'react-bootstrap';
import { Incident } from '@api/incident.types';

interface IncidentMapProps {
    incidents: Incident[];
}

const googleMapsLibraries: LoadScriptProps['libraries'] = ["visualization"];

const IncidentMap = ({incidents}: IncidentMapProps) => {

    const lanCo = { lat: 40.0467, lng: -76.1784 }

    const { isLoaded } = useJsApiLoader ({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: googleMapsLibraries
     });

    if (!isLoaded) {
        return (<h1>Loading Map...</h1>)
    }
    else {
        let incidentCoords = Array<google.maps.LatLng>();

        if (incidents.length === 0) {
            return (<Alert variant='info'>No Incidents</Alert>)
        }
        
        incidents.map((incident) => {
            incidentCoords.push(new google.maps.LatLng(incident.coordinates.latitude, incident.coordinates.longitude))
        })

        return (
            <GoogleMap 
                zoom={10}
                center={lanCo}
                mapContainerClassName="full-map-container"
                mapContainerStyle={{width: '600px', height: '400px'}}>
                <HeatmapLayerF data={incidentCoords}/>
            </GoogleMap>
        )
    }
}

const MapPage = () => {
    const activeIncidents = useGetActiveIncidents();

    if (activeIncidents.isLoading) {
        return (<Alert variant='info'>Loading...</Alert>)
    }

    if (activeIncidents.isError) {
        return (<Alert variant='danger'>Error Loading Incidents</Alert>)
    }

    if (activeIncidents.isSuccess) {

        return (
            <>
            <div className='map'>
                <div className='map-container'>
                    <h2 className='mb-5'>Incident Map</h2>
                    <IncidentMap incidents={activeIncidents.data} />
                </div>
            </div>
        </>
        )
    }

    return (
        <>
        <h2 className='mb-5'>Incident Map</h2>
        <Alert variant='danger'>Error Loading Incidents</Alert>
        </>
    )
}

export default MapPage