import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faClock, faArrowUpWideShort, faCalendarAlt, faLocationPin, faFireExtinguisher, faAmbulance, faTrafficLight } from '@fortawesome/free-solid-svg-icons'
import Incident from '../lcwc/incident';

const categoryIcons = {
    'Fire': faFireExtinguisher,
    'Medical': faAmbulance,
    'Traffic': faTrafficLight
}

function getUnitIcon(category: string) {
    return categoryIcons[category as keyof typeof categoryIcons];
}

interface IncidentTableProps {
    categoryName: string;
    incidents: Incident[];
}

function IncidentsTable({categoryName, incidents}: IncidentTableProps)  {
    return (
        <>
        <h3 className='mt-4 mb-4'>Active {categoryName} Incidents: {incidents.length}</h3>

        <Table striped bordered hover>
            <thead>
                <tr>    
                    <th>Number</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Agency</th>
                    <th>Priority</th>
                    <th>Units</th>
                </tr>
            </thead>

            <tbody>

            {
                incidents.length === 0 ? <tr><td>There are curently no active incidents.</td></tr> :
                    incidents.map((incident) => (

                <tr>
                    <td>{incident.number}</td>
                    <td><FontAwesomeIcon icon={getUnitIcon(incident.category)} /> {incident.category}</td>
                    
                    <td>{incident.intersection}<br />{incident.municipality}</td>
                    <td>{incident.agency}</td>
                    <td>{incident.priority}</td>
                    <td>{incident.units.length}</td>
                </tr>
                    
            ))
            }
            </tbody>
        </Table>
        </>
      );
}

export default IncidentsTable