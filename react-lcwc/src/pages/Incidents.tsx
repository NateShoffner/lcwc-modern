import {Incident} from '../lcwc/incident';
import { useEffect, useState } from 'react';
import IncidentsTable from '../components/IncidentsTable';

const Incidents = () => {

const [incidents, setIncidents] = useState(Array<Incident>());

function getIncidents() {
    console.log("Getting incidents...");
    fetch('http://127.0.0.1:8000/api/v1/incidents/active').then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        const incidents = jsonResponse;
        setIncidents(incidents);
    })
}

useEffect(() => {
    getIncidents();

    const interval = setInterval(() => {
        getIncidents();
      }, 5000);
    
      return () => clearInterval(interval);
    }, [])

  return (
    <>
    <h2 className='mb-5'>Active Incidents: ({incidents.length}) </h2>

    <IncidentsTable incidents={incidents} />
    </>
  )
}

export default Incidents