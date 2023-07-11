import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Incident from '../lcwc/incident';
import IncidentCard from './IncidentCard';

interface IncidentListProps {
    categoryName: string;
    incidents: Incident[];
}

function IncidentList({categoryName, incidents}: IncidentListProps)  {

  return (
    <>
    <h3 className='mt-4 mb-4'>Active {categoryName} Incidents: {incidents.length}</h3>

    <Row xs={1} md={2} className="g-4">
        {
            incidents.length === 0 ? <Col><p>There are currentlly no active {categoryName} incidents.</p></Col> :
                incidents.map((incident) => (
            <CardGroup>
                <IncidentCard category={incident.category} description={incident.description} municipality={incident.municipality} intersection={incident.intersection} number={incident.number} priority={incident.priority} agency={incident.agency} units={incident.units} />
            </CardGroup>
        ))
        }
    </Row>
    </>
  );
}

export default IncidentList;