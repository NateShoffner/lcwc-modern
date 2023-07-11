import React from 'react'
import Incident from '../lcwc/incident';
import { useEffect, useState } from 'react';
import IncidentsTable from '../components/IncidentsTable';
import IncidentList from '../components/IncidentList';


const Incidents = () => {

const [incidents, setIncidents] = useState(Array<Incident>());
const [fireIncidents, setFireIncidents] = useState(Array<Incident>());
const [medicalIncidents, setMedicalIncidents] = useState(Array<Incident>());
const [trafficIncidents, setTrafficIndidents] = useState(Array<Incident>());

function getIncidents() {
    console.log("Getting incidents...");
    fetch('http://127.0.0.1:8000/api/v1/incidents/active').then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        const fireIncidents = new Array();
        const medicalIncidents = new Array();
        const trafficIncidents = new Array();
        const incidents = new Array();
        
        jsonResponse.forEach((incident: any) => {
            if (incident['category'] === 'Fire') {
                fireIncidents.push(incident);
            } else if (incident['category'] === 'Medical') {
                medicalIncidents.push(incident);
            } else if (incident['category'] === 'Traffic') {
                trafficIncidents.push(incident);
            }

            incidents.push(incident);
        });
        
        setIncidents(incidents);
        setFireIncidents(fireIncidents);
        setMedicalIncidents(medicalIncidents);
        setTrafficIndidents(trafficIncidents);
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
    <h2 className='mb-5'>Active Incidents</h2>

    <IncidentsTable categoryName='Fire' incidents={incidents} />
                    
    <IncidentList categoryName='Fire' incidents={fireIncidents} />
    <IncidentList categoryName='Medical' incidents={medicalIncidents} />
    <IncidentList categoryName='Traffic' incidents={trafficIncidents} />

    </>
  )
}

export default Incidents

