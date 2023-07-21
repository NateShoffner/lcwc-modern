import { Alert, Table } from 'react-bootstrap';
import { Incident } from '@api/incident.types';
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter, normalizeName } from 'normalize-text'
import { normalizeAgency, normalizeDescription } from '@utils/IncidentUtils';

interface IncidentTableProps {
    incidents: Incident[];
}

function NoIncidentsTable() {
    return (
        <Alert variant='info'>
            There are currently no active incidents.
        </Alert>
    )
}

function PopulatedIncidentsTable({incidents}: IncidentTableProps) {

    const navigate = useNavigate();

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>    
                    <th>Date/Time</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Units</th>
                </tr>
            </thead>

            <tbody>
            {
                incidents.map((incident, index) => (

                <tr className={incident.category.toLowerCase()} key={incident.number} style={{cursor: 'pointer'}} onClick={() => { 
                    navigate(`/view_incident/${incidents[index].number}`, {state:{incident: incidents[index]}});
                }}>
                    <td>{new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.parse(incident.date))}</td>
                    <td>{normalizeDescription(incident.description)}</td>     
                    <td>{normalizeName(incident.intersection)}<br />{normalizeName(incident.municipality)}</td>
                    <td>
                        <ul className='list-unstyled'>
                            {
                                incident.units.map((unit) => (
                                    <li key={unit.name}>{unit.name}</li>
                                ))
                            }
                        </ul>
                    </td>
                </tr>       
            ))
            }
            </tbody>
        </Table>
    )
    }

function IncidentsTable({incidents}: IncidentTableProps)  {

    return (
        incidents.length > 0  ? <PopulatedIncidentsTable incidents={incidents} /> : <NoIncidentsTable />
      );
}


export default IncidentsTable;