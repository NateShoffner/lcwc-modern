import { Alert, Table } from 'react-bootstrap';
import { Incident } from '@api/incident.types';
import { useNavigate } from "react-router-dom";

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
                    <th>Number</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Agency</th>
                    <th>Priority</th>
                    <th>Units</th>
                </tr>
            </thead>

            <tbody>
            {
                incidents.map((incident, index) => (

                <tr className={incident.category.toLowerCase()} key={incident.number} style={{cursor: 'pointer'}} onClick={() => { 
                    navigate(`/view_incident/${incidents[index].number}`, {state:{incident: incidents[index]}});
                }}>
                    <td>{incident.number}</td>
                    <td>{new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.parse(incident.date))}</td>
                    <td>{incident.description}</td>     
                    <td>{incident.intersection}<br />{incident.municipality}</td>
                    <td>{incident.agency}</td>
                    <td>{incident.priority ?? 'N/A'}</td>
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