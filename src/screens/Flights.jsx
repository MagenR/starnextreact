import React, { useState, useEffect } from 'react';

import FlightsTable from '../components/FlightsTable';
import FlightsFilter from '../components/FlightsFilter';

export default function Flights() {

    const [flights, setFlights] = useState([]);
    const [filteredFlights, setFilteredFlights] = useState([]);

    useEffect(() => {
        // Fetch the flights from the API
        fetch('https://localhost:44359/api/flight/search')
            .then(response => response.json())
            .then(data => {
                setFlights(data);
            });
    }, []);

    return (
        <>
            <FlightsFilter flights={flights} setFilteredFlights={setFilteredFlights} />
            <FlightsTable flights={filteredFlights} />
        </>
    );
}