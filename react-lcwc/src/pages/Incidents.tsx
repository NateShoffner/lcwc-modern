import IncidentsTable from '../components/IncidentsTable';
import { useGetActiveIncidents } from '../../hooks/useGetIncidents';
import { Alert } from 'react-bootstrap';

const Incidents = () => {

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
            <h2 className='mb-5'>Active Incidents: ({activeIncidents.data.length}) </h2>
            <IncidentsTable incidents={activeIncidents.data} />
            </>
        )
    }

    return (<></>)
}

export default Incidents