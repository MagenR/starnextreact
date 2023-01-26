import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

import FlightsTable from '../components/FlightsTable';
import FlightsFilter from '../components/FlightsFilter';

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
            <FlightsFilter flights={flights} setFilteredFlights={setFilteredFlights} />
            <FlightsTable flights={filteredFlights} />
        </Container>
    );
}