import './App.css';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Incidents from './pages/Incidents';
import Home from './pages/Home';
import IncidentPage from './pages/IncidentPage';
import MapPage from './pages/Map';
import { queryClient } from "../api/query-client";

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="incidents" element={<Incidents />} />
                        <Route path="view_incident/:incidentNumber" element={<IncidentPage />} />
                        <Route path="map" element={<MapPage />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
      );
}

export default App;