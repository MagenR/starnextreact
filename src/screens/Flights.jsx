import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

import FlightsTable from '../components/FlightsTable';
import FlightsFilter from '../components/FlightsFilter';
import Typography from '@mui/material/Typography';

export default function Flights() {

    const [flights, setFlights] = useState([]);
    const [filteredFlights, setFilteredFlights] = useState([]);

    useEffect(() => {
        console.log("fetch runs");
        // Fetch the flights from the API
        fetch('https://localhost:44359/api/flight/search')
            .then(response => response.json())
            .then(data => {
                setFlights(data);
            });
    }, []);

    return (
        <Container fixed>
            <Typography variant="h3" sx={{ textAlign: 'center', padding: 2 }}>
                Flight App
            </Typography>
            <FlightsFilter flights={flights} setFilteredFlights={setFilteredFlights} />
            <Typography variant="h4" sx={{ textAlign: 'center', padding: 2 }}>
                Flights Table
            </Typography>
            <FlightsTable flights={filteredFlights} />
        </Container>
    );
}