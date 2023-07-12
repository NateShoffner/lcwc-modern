import './App.css';
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Incidents from './pages/Incidents';
import Home from './pages/Home';
import IncidentPage from './pages/IncidentPage';

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="incidents" element={<Incidents />} />
                    <Route path="view_incident/:incidentNumber" element={<IncidentPage />} />
                    <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
      );
}

export default App;