import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Incidents from './pages/Incidents';
import Home from './pages/Home';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="incidents" element={<Incidents />} />
                <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
      );
}

export default App;