import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import axios from 'axios';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

const MapPage = () => {
    const lanCo = { lat: 40.0467, lng: -76.1784 }

    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
     });

     const [incidents, setIncidents] = useState([]);

    /*
    let incidentCoords = Array<google.maps.LatLng>();
    incidents.map((incident) => {
        incidentCoords.push(new google.maps.LatLng(incident.coordinates.latitude, incident.coordinates.longitude))
    })
    */

     const data = useMemo(() => {
        const incidentCoords = new Array(incidents.length)
        return incidentCoords
      }, [])

     function getIncidents() {
         console.log("Getting incidents...");
 
         const { isLoading, isError, data, error, refetch } = useQuery(["activeIncidents"], () =>
         axios
             .get(`${import.meta.env.VITE_API_BASE_URL}/incidents/active`)
             .then((res) => res.data).then(jsonResponse => {
                 const incidents = jsonResponse;
                 setIncidents(incidents);
             })
         );
     }
 
     getIncidents();

    return (
        <>
        <div className='map'>
            <div className='map-container'>
                <h2 className='mb-5'>Incident Map</h2>
                
                {!isLoaded ? (
                <h1>Loading Map...</h1>
      ) : (

        <GoogleMap 
            zoom={10}
            center={lanCo}
            mapContainerClassName="full-map-container"
            mapContainerStyle={{width: '600px', height: '400px'}}>
            { 
                incidents.map((incident) => ( 
                    <MarkerF position={{ lat: incident.coordinates.latitude, lng: incident.coordinates.longitude }} />
                ))
            }
        </GoogleMap>
      )}

            </div>
        </div>
    </>
    )
}

export default MapPage