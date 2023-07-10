
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import IncidentList from './components/IncidentList';
import Navigation from './components/Navigation';;
import { useEffect, useState } from 'react';
import Incident from './lcwc/incident';
import './App.css'
import Jumbotron from './components/Jumbotron';

function App() {

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
            
            jsonResponse.forEach((incident: any) => {
                if (incident['category'] === 'Fire') {
                    fireIncidents.push(incident);
                } else if (incident['category'] === 'Medical') {
                    medicalIncidents.push(incident);
                } else if (incident['category'] === 'Traffic') {
                    trafficIncidents.push(incident);
                }
            });

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
            <header className="pb-3 mb-4 border-bottom">
                <Navigation />
            </header>

            <main className="flex-shrink-0">
                <Container>
                    <Jumbotron />
                    
                    <IncidentList categoryName='Fire' incidents={fireIncidents} />
                    <IncidentList categoryName='Medical' incidents={medicalIncidents} />
                    <IncidentList categoryName='Traffic' incidents={trafficIncidents} />
                </Container>
            </main>

            <Footer />
            
        </>
      );
}

export default App;